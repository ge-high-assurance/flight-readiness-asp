
format_tree = function(tree, partial){
    var index = tree.indexOf("-");   
    var parent = tree.substr(0, index);
    var children = tree.substr(index + 1, tree.length);
   return format_tree_helper(parent, children, partial)
}

format_tree_helper = function(parent, children, partial){
    if(children !== "[]"){
        partial += "<ul>";
        formatted_text = english_text.hasOwnProperty(parent) ? english_text[parent] : parent;
        partial += formatted_text ;
        partial = process_children(children, partial);
        partial += "</ul>" 
    }
    else{
        partial += "<li>" + parent + "</li>";
        console.log(partial);
    }
    return partial
}

get_children = function(str, partial){
    if(str === ""){
        return partial;
    }
    //it will always be literals of type Head-Body
    var pivot = str.indexOf("-");
    //find matching square brackets starting at pivot + 1
    var match = 1;
    var index = pivot + 2;
    while(match != 0){
       if(str[index] == '['){
           match++;
       }
       if(str[index] == ']'){
           match--;
       }
       index++;
    }
    partial[partial.length] = str.substr(0, index);
    return get_children(str.substr(index+1, str.length), partial);
}

process_children = function(children, partial){
    var str = children.substr(1, children.length - 2);
    var split = get_children(str,[]);
    for(var index = 0; index < split.length; index++){
        partial += "<li>"
        partial = format_tree(split[index], partial);
        partial += "</li>"
    }
    return partial;
}


reduce = function(list, operator, unit){
    var part = unit;
    list.forEach(element => part = operator.call(part, element));
    return part;
}
format_json_tree = function(tree, partial){
    partial += "<ul>";
    var term = "";
    var parent = tree['args'][0];
    if(typeof(parent) === 'object'){
          term += parent['functor'] + "(";
          if(parent['args'].length > 1){
             term += p
          }
          else{
            for(const index in parent['args']){
              if(index < parent['args'].length - 1) {
                term += parent['args'][index] + ",";
              }
              else{
                  term += parent['args'][index];
              }
            }
            
          }
          term += ")";
          formatted_text = english_text.hasOwnProperty(term) ? english_text[term] : term;
          partial += formatted_text;
         
    }
    else{
        
    formatted_text = english_text.hasOwnProperty(parent) ? english_text[parent] : parent;
    partial += formatted_text;
    }
    partial = format_children(tree['args'][1], partial);
    partial += "</ul>";
    return partial;
}

format_children = function(children, partial) {
    debugger;
     children.forEach(function(child){
          partial += "<li>";
          partial = format_json_tree(child, partial);
          partial += "</li>";
     });
     return partial;
}