function associazione() {
    let messaggio = 'Sei sicuro di voler entrare a far parte della nostra associazione? Non puoi tornare indietro.';
    if (confirm(messaggio)) alert('Sei entrato con successo nella nostra associazione! Sono 72€ per l\'entrata.');
    else alert('Ci dispiace che tu non ci voglia vendere la tua anima.');
}


// Fatto da SecchioNerd

let i=0;

function menu(){

    if(i%2==0){
        document.getElementById("menu").innerHTML = '<div style="display: flex;"><a href="#cadman" class="indice">Chi è CADman?</a> <br><a href="#chiSiamo" class="indice">Chi siamo?</a> <br><a href="#associazione" class="indice">Vuoi far parte della nostra associazione?</a> <br><a href="#moltiUtentiNonSanno" class="indice">Molti dei nostri utenti non sanno che...</a> <br><a href="#faq" class="indice" style="border-right:red solid 3px">FAQ</a></div>';
    }
    else{
        document.getElementById("menu").innerHTML = '<div style="display: none;"><a href="#cadman" class="indice">Chi è CADman?</a> <br><a href="#chiSiamo" class="indice">Chi siamo?</a> <br><a href="#associazione" class="indice">Vuoi far parte della nostra associazione?</a> <br><a href="#moltiUtentiNonSanno" class="indice">Molti dei nostri utenti non sanno che...</a> <br><a href="#faq" class="indice" style="border-right:red solid 3px">FAQ</a></div>';
    }

    i++;
}