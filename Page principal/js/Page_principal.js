window.onload = function() {
    document.getElementById('rechercher').addEventListener('click', rechercher);
    document.getElementById('effacer').addEventListener('click', effacer);
};



function ajouterad() {
    var nbrAdulte = parseInt(document.getElementById('nbradulte').value);

    if (!isNaN(nbrAdulte)) {
        var nouvelleValeurAdulte = nbrAdulte + 1;
        document.getElementById('nbradulte').value = nouvelleValeurAdulte;
    } else {
        document.getElementById('nbradulte').value = 1;
    } }
   
function ajouteren() {
    var nbrEnfant = parseInt(document.getElementById('nbrenfant').value);

    if (!isNaN(nbrEnfant)) {
        var nouvelleValeurEnfant = nbrEnfant + 1;
        document.getElementById('nbrenfant').value = nouvelleValeurEnfant;
    } else {
        document.getElementById('nbrenfant').value = 1;
    } }


function ajouterch() {
    var nbrChambre = parseInt(document.getElementById('nbrchambre').value);

    if (!isNaN(nbrChambre)) {
        var nouvelleValeurChambre = nbrChambre + 1;
        document.getElementById('nbrchambre').value = nouvelleValeurChambre;
    } else {
        document.getElementById('nbrchambre').value = 1;
    }
}


function supprimerad() {
    var nbrAdulte = parseInt(document.getElementById('nbradulte').value);
   
    if (!isNaN(nbrAdulte)) {
        var nouvelleValeurAdulte = nbrAdulte - 1;
        document.getElementById('nbradulte').value = nouvelleValeurAdulte;
    } else {
        document.getElementById('nbradulte').value = 1;
    } }
   
   
function supprimeren() {
    var nbrEnfant = parseInt(document.getElementById('nbrenfant').value);
    
    
    if (!isNaN(nbrEnfant)) {
        var nouvelleValeurEnfant = nbrEnfant - 1;
        document.getElementById('nbrenfant').value = nouvelleValeurEnfant;
    } else {
        document.getElementById('nbrenfant').value = 1;
    } }
    
function supprimerch() {

    var nbrChambre = parseInt(document.getElementById('nbrchambre').value);

    if (!isNaN(nbrChambre)) {
        var nouvelleValeurChambre = nbrChambre - 1;
        document.getElementById('nbrchambre').value = nouvelleValeurChambre;
    } else {
        document.getElementById('nbrchambre').value = 1;
    }
}





function rechercher() {
    document.getElementById('resuladultes').textContent = document.getElementById('nbradulte').value;
    document.getElementById('resulenfants').textContent = document.getElementById('nbrenfant').value;
    document.getElementById('resulchambres').textContent = document.getElementById('nbrchambre').value;
    document.getElementById('resulvoyage').textContent = document.getElementById('voyagetravail').checked ? 'Oui' : 'Non';
}

function effacer() {
//    document.getElementById('resuladultes').textContent = "0";
  //  document.getElementById('resulenfants').textContent = "0";
    //document.getElementById('resulchambres').textContent = "0";
    //document.getElementById('resulvoyage').textContent = "Non";

    window.location.reload();
}