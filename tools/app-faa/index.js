
//import { json } from './survey_json.js';


$('#next').hide();
$('#why').hide();
Survey
    .StylesManager
    .applyTheme("defaultV2");

window.survey = new Survey.Model(json);
fact_literals = ["has_prior_history_of_violation", "aircrafts_nearby",  "yield_right_of_way", "used_spotter","flew_above_400_ft",
"within_3_miles","notify_authority", "expert_assistance", "max_takeoff_weight","flown_under_ama_rules","flown_in_santioned_show","manuevers_established_beforehand",
"has_name_address","flown_indoors","address_affixed","has_metal_blade_rollers","carries_pyrotechnic_devices",
"devices_produce_smoke_when_burnt","devices_securely_attached","g_series_rocket_motors","g_series_firmly_attached",
"air_show_team_ama_compliant","alcohol_drug_influence","helmets_worn","osha_approved","helmets_under_comparable_standards"];

possible_violations = [
    "violation_1", 
    "violation_2",
    "violation_3",
    "violation_4",
    "violation_5",
    "violation_6",
    "violation_7",
    "violation_8",
    "violation_9",
    "violation_10",
]

survey.completedHtml = "";
survey.showCompletedPage = false;
survey
    .onComplete
    .add(function (sender) {
       /* document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
	*/
	// Send it over to swish here!
    survey.completedHtml = "";
    scasp_src = rules_src;
    fact_literals.forEach(function(key){
        if(survey.data[key] && (survey.data[key] === true)){
            scasp_src += "\n" + key + ".\n";
        }

        if(survey.data[key] && !(parseFloat(survey.data[key]) === NaN)){
            scasp_src += "\n" + key + "(" + survey.data[key] + ").\n";
        }
        if(!survey.data[key]){
            scasp_src += "\n" + key + " :- 1 = 2.\n";  
        }  

    });

    window.rule_clicked = function(event){
        var index = event.target.getAttribute("index");
        var tree_html = format_json_tree(json_trees[index]['args'][1][0], "");
        var div = $('#surveyResult')[0];
        div.innerHTML = tree_html;
        $(div).children()[0].className = 'tree';
        jQuery(".tree").treemenu({delay:0});
         window.current_index = index;
         window.current_rule = event.target.getAttribute("rule");
         $('#back').show();
         $('#min').show();
    }

    //url = "http://localhost:3030/pengine/create";
    window.non_compliant_models = [];
    window.json_trees = [];
    var pengine;
    get_all_models("violation", scasp_src, non_compliant_models);
    payload = {
        "server" : "http://localhost:4000/pengine",
        "format" : "json",
        "template" : "[Tree]", 
        "ask" : "scasp(violation, [tree(Tree)])",
        "application" : "swish",
        "src_text" : scasp_src,
        "destroy" : false,
        "onsuccess" : function(response, status, type){
             json_trees[json_trees.length] = response.data[0][0];
            if(response.more){
             pengine.next();
            }
        },
        "onerror" : function(a, b, c){
         
        },
        "onfailure" : function(a,b, c){
            if(non_compliant_models.length == 0){
                $('#surveyResult')[0].innerHTML = "You are 100% compliant!";
                return;
            }
             window.model_list = "<ul>" ; 
            var index = 0;
            non_compliant_models.forEach(function(model){
                    possible_violations.forEach(function(violation){
                        if(model.includes(violation)){
                            var rule = violation.split("_")[1];
                            model_list += '<li  onclick="rule_clicked(event)" rule=' + rule + " index= " + index  + ">";
                            model_list += "Rule " + rule + " violated";
                            model_list += "</li>";
                        }
                    });
                    index ++;
             });
            model_list += "</ul>";
            var div = $('#surveyResult')[0];
            div.innerHTML = model_list;
        }

    };
 
  dual_payload = {  
    "server" : "http://localhost:4000/pengine",
    "src_text" : scasp_src,
    'template' : "[Tree]",
    'format' : "csv",
    "application" : "swish",
    'ask' : "scasp(not(violation), [tree(Tree)])",
    'onerror' : function(data, b, c){
        var response = data.data.split("\n")[1];
        response = response.replace(/\"/g, "");
        var tree_response = response.substr(0, response.length - 3);
        var tree_html = format_tree(tree_response,"");
        var div = $('#surveyResult')[0];
        div.innerHTML = tree_html;
        $(div).children()[0].className = 'tree';
        jQuery(".tree").treemenu({delay:0});
        $('#why').hide().unbind("click");
    },
    'onsuccess' : function(data, status, type){

        var response = data.split("\n")[1];
        response = response.replace(/\"/g, "");
        var tree_response = response.substr(0, response.length - 3);
        var tree_html = format_tree(tree_response,"");
        var div = $('#surveyResult')[0];
        div.innerHTML = tree_html;
        $(div).children()[0].className = 'tree';
        jQuery(".tree").treemenu({delay:0});
        $('#why').hide().unbind("click");
        $('#surveyResult').show();
       
       setTimeout(function(){
        $('.sd-completedpage').hide();
       }, 2000);
        //$('#surveyResult').fadeIn();
        
    }

};

    dual_pengine = function(){
      
        $('#why').click(function(){
            peng = new Pengine(dual_payload);
        })
    }
     pengine = new Pengine(payload);

    });

$("#surveyElement").Survey({model: survey});

$.get("http://localhost:4000/apps/faa/ama_incremental.lp",{},function(data, success, type){
    rules_src  = data;
});

    
onBack = function(){
    $('#surveyResult')[0].innerHTML = model_list;
    $('#minimal')[0].innerHTML = "";
    $('#back').hide();
    $('#min').hide();
}

showMinimalExplanation = function(){
      var compliant_mods = [];
      var query = "not(violation_" + current_rule + ")";
      get_all_models(query, rules_src + get_abducibles(), compliant_mods);
      setTimeout(function(){
      var min_expl = min_explanation(compliant_mods, non_compliant_models[current_index]);
      expl = "<p> Conditions to be changed or added towards compliance </p>";
      expl += "<ul>" ;
      min_expl.forEach(function(literal){
             if(min_expl_english_text.hasOwnProperty(literal)){
                 expl += "<li>" + min_expl_english_text[literal] + "</li>";
             }
      });
      
      expl += "</ul>";
      $('#minimal')[0].innerHTML = expl;
    }, 2000);
}

$('#back').hide();
$('#min').hide();