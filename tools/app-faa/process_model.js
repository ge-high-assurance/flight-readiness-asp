get_model = function(response){
    var model = response['data'][0][0];
    var model_terms = [];
    model.forEach(function(entry){
          if(entry instanceof Object){
              var term = entry.functor + "(";
              entry.args.forEach(function(arg){
                  term += arg + ",";
              });
              term = term.substr(0, term.length-1);
              term += ")";
              model_terms[model_terms.length] = term;
          }
          else{
              model_terms[model_terms.length] = entry;
          }
    });
    return model_terms;
}

get_literals = function(model) {
    var literals = [];
    model.forEach(function(atom){
        var formatted = atom;
        if(atom.includes("not(") && atom.endsWith(")")){
            formatted = atom.substr(4, atom.length - 5);
        }
        literals[literals.length] = formatted;
    });
    return literals;
}

intersect = function(literals1, literals2){
    for(var index in fact_literals){
     if(literals1.includes(fact_literals[index]) && literals2.includes(fact_literals[index])){
          return true;
        }
    }
    return false;
}



min_explanation = function(compliant_mods, model){
    var min_size = Infinity;
    var current_model = [];
    compliant_mods.forEach(function(cmodel){
          if(intersect(get_literals(cmodel), get_literals(model))){
              if(cmodel.length < min_size){
                  current_model = cmodel;
                  min_size = current_model.length;
              }
          }
    });
    return current_model;
}

get_abducibles = function(){
    var abducibles = "\n";
    fact_literals.forEach(function(literal){
         abducibles += " #abducible " + literal + ".\n";
    });
    return abducibles;
}


get_all_models = function(query, source, models){

    //add all abducibles
    var destroy_pengine = false;
    var pengine;
    payload = {
        "server" : "http://localhost:4000/pengine",
        "format" : "json",
        "template" : "[Tree]", 
        "ask" : "scasp(" + query + ", [model(Tree)])",
        "application" : "swish",
        "src_text" : source,
        "destroy" : false,
        "onsuccess" : function(response, status, type){
            models[models.length] = get_model(response)
            pengine.next();
        },
        "onerror" : function(a, b, c){
           
        },
        "onfailure" : function(a,b, c){
        }

    };
   pengine = new Pengine(payload);

}


