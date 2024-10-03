// Déclaration et initialisation des variables pour récupérer les éléments HTML par leur ID
var input = document.getElementById('input'); // Input de l'utilisateur
var result = document.getElementById('result'); // Zone d'affichage du résultat
var inputType = document.getElementById('inputType'); // Sélecteur d'unité de poids d'entrée
var resultType = document.getElementById('resultType'); // Sélecteur d'unité de poids de sortie

// Variables pour stocker les valeurs sélectionnées dans les sélecteurs d'unité de poids
var inputTypeValue, resultTypeValue;

// Ajout des écouteurs d'événements pour les changements dans l'input et les sélecteurs d'unité de poids
input.addEventListener("keyup", myResult); // Lorsque l'utilisateur tape dans l'input
inputType.addEventListener("change", myResult); // Lorsque l'utilisateur change l'unité de poids d'entrée
resultType.addEventListener("change", myResult); // Lorsque l'utilisateur change l'unité de poids de sortie

// Fonction de conversion qui sera appelée à chaque événement de changement
function myResult(){

    // Mettre à jour les valeurs sélectionnées dans les sélecteurs d'unité de poids
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    
    // Logique de conversion basée sur les valeurs sélectionnées
    if(inputTypeValue === "kilogram" && resultTypeValue==="kilogram"){
        result.value = Number(input.value); // Aucune conversion nécessaire
    }
    else if(inputTypeValue === "kilogram" && resultTypeValue==="gram"){
        result.value = Number(input.value) * 1000; // Conversion de kg à g
    }
    // Autres conditions de conversion similaires pour toutes les combinaisons possibles d'unités de poids
    
    // Les conditions suivantes effectuent des conversions similaires pour les autres combinaisons d'unités de poids
    
    // Mettre à jour la valeur affichée dans la zone de résultat
}


    else if(inputTypeValue === "kilogram" && resultTypeValue==="miligram"){
        
        result.value = Number(input.value) *1000000 ;     
    }

    else if(inputTypeValue === "kilogram" && resultTypeValue==="pounds"){
        
        result.value = Number(input.value) * 2.2; 
    }


    else if(inputTypeValue === "gram" && resultTypeValue==="kilogram"){
       
        result.value = Number(input.value)/1000; 
    }

    else if(inputTypeValue === "gram" && resultTypeValue==="gram"){
       
        result.value = Number(input.value); 
    }

    else if(inputTypeValue === "gram" && resultTypeValue==="miligram"){
        
        result.value = Number(input.value) *1000 ;     
    }

    else if(inputTypeValue === "gram" && resultTypeValue==="pounds"){
        
        result.value = Number(input.value) * 0.0022; 
    }



    else if(inputTypeValue === "miligram" && resultTypeValue==="kilogram"){
       
        result.value = Number(input.value)/1000000; 
    }
   

    else if(inputTypeValue === "miligram" && resultTypeValue==="gram"){
       
        result.value = Number(input.value)/1000; 
    }

    else if(inputTypeValue === "miligram" && resultTypeValue==="miligram"){
        
        result.value = Number(input.value) ; 
          
    }

    else if(inputTypeValue === "miligram" && resultTypeValue==="pounds"){
        
        result.value  = Number(input.value)/453592.37; 
        
    }



   
    else if(inputTypeValue === "pounds" && resultTypeValue==="kilogram"){
       
        result.value  = Number(input.value)* 0.45359237 ; 
        
    }

    else if(inputTypeValue === "pounds" && resultTypeValue==="gram"){
       
        result.value = Number(input.value)*453.592;
        
    }

    else if(inputTypeValue === "pounds" && resultTypeValue==="miligram"){
        
        result.value = Number(input.value)*453,592.37 ;  
        
    }

    else if(inputTypeValue === "pounds" && resultTypeValue==="pounds"){
        
        result.value = Number(input.value); 
    
    }
   

    



    
