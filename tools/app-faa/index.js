
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
"devices_produce_smoke_when_burnt","devices_securely_attached","g_series_rocker_motors","g_series_firmly_attached",
"air_show_team_ama_compliant","alcohol_drug_influence","helmets_worn","osha_approved","helmets_under_comparable_standards"];

survey
    .onComplete
    .add(function (sender) {
       /* document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
	*/
	// Send it over to swish here!
   
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
    //url = "http://localhost:3030/pengine/create";


    payload = {
        "server" : "http://localhost:3030/pengine",
        "format" : "json",
        "template" : "[Tree]", 
        "ask" : "scasp(violation, [tree(Tree)])",
        "application" : "swish",
        "src_text" : scasp_src,
        "destroy" : false,
        "onsuccess" : function(response, status, type){
            var tree_html = format_json_tree(response.data[0][0], "");
            var div = $('#surveyResult')[0];
            div.innerHTML = tree_html;
            $(div).children()[0].className = 'tree';
            jQuery(".tree").treemenu({delay:0});
            if(response.more){
                $('#next').show();
            }
            else{
                $('#next').hide();
                $('#next').unbind("click");
            }
        },
        "onerror" : function(a, b, c){
            $('#next').hide();
            $('#next').unbind("click");
        },
        "onfailure" : function(a,b, c){
              $('#why').show();
              dual_pengine();           
        }

    };

  dual_payload = {  
    "server" : "http://localhost:3030/pengine",
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
    }

};

    dual_pengine = function(){
      
        $('#why').click(function(){
            peng = new Pengine(dual_payload);
        })
    }

        var pengine = new Pengine(payload);

        $('#next').unbind("click");
        $('#next').click(function(){
            pengine.next();
        })

       $('#why').unbind("click");
    console.log(scasp_src);

    });

$("#surveyElement").Survey({model: survey});

$.get("http://localhost:3030/apps/faa/ama_incremental.lp",{},function(data, success, type){rules_src  = data});


