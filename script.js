
//Je vais chercher la valeur numérique de l'âge
let trigAge = parseInt(document.getElementById('age').textContent); 

//Pour pouvoir cliquer sur la ligne
let clickAge = document.getElementById('age');

clickAge.onclick = function (){
    if (trigAge >0 & trigAge <7){
        alert("Vous êtes un jeune enfant.")
    }
    else if (trigAge >6 & trigAge <12){
        alert("Vous êtes un enfant qui a atteint l'âge de la raison.")
    }
    else if (trigAge >11 & trigAge <18){
        alert("Vous êtes un adolescent.")
    }
    else if (trigAge >17 & trigAge <121) {
        alert("Vous êtes un adulte")
    }
};

//Vieille tentative
// if (trigAge >17){
//     alert("Vous êtes un adulte.")
//}

// console.log(trigAge);
// console.log(clickAge);
//Pour tester

//Je créé l'élément closeButton
let closeButton = document.getElementById('close')

//On click il déclenche la function "close()"" (les parenthèses sont importantes)
//S'il y a eu confirmation avec "confirm" (+ affichage du message Fermer la fenêtre ?)
closeButton.onclick = function (){
    if (confirm("Fermer la fenêtre ?")){
        close()
    }
};


//console.log(closeButton);

rubikMove = document.getElementById('rubik');

rubikMove.onmousemove = function (){
    alert('Tu as frotté mes cubes avec ta souris.')
};

let buttonInput = document.getElementById('buttonInput');

//On click, on va chercher ce qui a été entré dans l'input : la value.
//Puis alert pour l'afficher
buttonInput.onclick = function (){
    let input=document.getElementById('input').value
    alert(input)
};