//on def les var des elements dont on aura besoin
let depenses = document.getElementById("depenses");
let revenu = document.getElementById("revenu");
let results = document.getElementById("resultats");
let x = new Array(6);
x[0] = "Chauffage";
x[1] = "Loyer";
x[2] = "Femme de menage";
x[3] = "Patipateticienne";
x[4] = "Voiture";
x[5] = "High tech";

//on def les boutons et on ajoute un listener "click" qui va appeler addInput
let btn_add_deps = document.getElementById("btn_add_deps");
btn_add_deps.addEventListener("click", function(){ addInput(depenses);});

let btn_add_revenu = document.getElementById("btn_add_revenu");
btn_add_revenu.addEventListener("click", function(){ addInput(revenu);});


//creer un input de type text, et l'ajoute dans l'element passé en parametre "id"
function addInput(id){
    var newInput = document.createElement("input");
        newInput.setAttribute("type", "text");
    var newInput2 = document.createElement("input");
        newInput2.setAttribute("type", "text");
    var newDiv = document.createElement("div");
        newDiv.setAttribute('class', "rowss");
        
    var newBtn = document.createElement("button");
        newBtn.setAttribute("class", "btn btn-danger btn-sm m-2 rounded-circle");
        newBtn.innerText = "X";

        newInput.setAttribute("value", Math.floor(Math.random()*150));
        newInput2.setAttribute("value", x[Math.floor(Math.random()*6)]);
    id.appendChild(newDiv);
    newDiv.appendChild(newInput2);
    newDiv.appendChild(newInput);
    newDiv.appendChild(newBtn);
    newBtn.addEventListener("click", function(){
        newDiv.remove();
        resultat();
    });

    addInputListener(newInput, id);//Addeventlister to inputs so #results is changed dynamicly
    addInputListener(newInput2, id);
    resultat();
}

function addInputListener(inputId, type){//type = revenu/depense
    
    inputId.addEventListener("keypress", function(){
        resultat();
    });
    inputId.addEventListener("focus", function(){
        resultat();
    });
    inputId.addEventListener("keyup", function(){//solves a bug where it was the old value
        resultat();
    });

}
function resultat(){
    results.innerHTML = "";
    var arrInputDep = depenses.getElementsByTagName("input");
    var arrInputRev = revenu.getElementsByTagName("input");
    tot_depense = 0;
    tot_revenu = 0;

    for(i = 0; i < arrInputDep.length; i+=2){
        montant_depense = arrInputDep[i+1].value;
       tot_depense += parseInt(montant_depense);
    }
    for(i = 0; i < arrInputRev.length; i+=2){
        montant_revenu = arrInputRev[i+1].value;
       tot_revenu += parseInt(montant_revenu);
    }
    results.innerHTML = "<div class='text-danger'>Depense total: <span class='fs-4 fw-bolder'>" + tot_depense + "</span> </div>";
    results.innerHTML += "<div class='text-success'>Revenu total:  <span class=' fs-4 fw-bolder'>" + tot_revenu + "</span> </div>";
    bilan = (tot_revenu-tot_depense);
    if(bilan >= 0)
        color = "success";
    else color = "danger";
    results.innerHTML += "<div class='text-"+color+"'>Bilan total:  <span class=' fs-4 fw-bolder'>" + (tot_revenu-tot_depense) + "</span> </div>";
    
}