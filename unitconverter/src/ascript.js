// Récupère l'élément HTML avec les identifiants  et le stockent dans des variables
var input = document.getElementById('input');
var result = document.getElementById('result'); 
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;


input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){
// set answer to the result box
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "meter" && resultTypeValue==="centimeter"){
       
        result.value = Number(input.value) * 10000;
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value) * 0.000001; 
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="meter"){
        
        result.value = input.value ;    
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="inch"){
        
        result.value = Number(input.value) * 1550; 
    }

    else if(inputTypeValue === "meter" && resultTypeValue==="feet"){
        
        result.value = Number(input.value) * 10.764; 
    }




    else if(inputTypeValue === "centimeter" && resultTypeValue==="meter"){
        
        result.value = Number(input.value) * 0.0001; 
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value) * 0.0000000001; 
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="centimeter"){
        
        result.value = Number(input.value); 
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="inch"){
         
        result.value= Number(input.value)/ 6.4516;
         
    }

    else if(inputTypeValue === "centimeter" && resultTypeValue==="feet"){
       
        result.value = Number(input.value) * 0.00108;
         
    }



    else if(inputTypeValue === "kilometer" && resultTypeValue==="meter"){
        
        result.value = Number(input.value) * 1000000; 
    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value); 
    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="centimeter"){
        
        result.value = Number(input.value) * 10000000000;

    else if(inputTypeValue === "kilometer" && resultTypeValue==="inch"){
       
        result.value = Number(input.value)* 1,550,003,100.0062;

    }

    else if(inputTypeValue === "kilometer" && resultTypeValue==="feet"){
        
        result.value = Number(input.value) * 10763915; 
    }




    else if(inputTypeValue === "inch" && resultTypeValue==="meter"){
       
        result.value = Number(input.value) * 0.00064516; 
    
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value)/1550003100.0062; 
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="centimeter"){
       
        result.value = Number(input.value) * 6.4516; 
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="inch"){
        
        result.value = Number(input.value); 
    }

    else if(inputTypeValue === "inch" && resultTypeValue==="feet"){
         
        result.value = Number(input.value)/0.007; 
    }



    else if(inputTypeValue === "feet" && resultTypeValue==="meter"){
       
        result.value = Number(input.value) * 0.09290304; 
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="kilometer"){
       
        result.value = Number(input.value) * 0.0000000929; 
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="centimeter"){
       
        result.value = Number(input.value) * 929.03; 
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="inch"){
        
        result.value = Number(input.value) * 144; 
    }

    else if(inputTypeValue === "feet" && resultTypeValue==="feet"){
         
        result.value = Number(input.value); 
    }

    


    
}}
