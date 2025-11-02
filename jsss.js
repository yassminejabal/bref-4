const section3 = document.getElementById("container-3");
const section1 = document.getElementById("SECTION");
const section2 = document.getElementById("container-2");
const section4 = document.getElementById("section4");
 function getEvent() {
    return document.getElementById(selectedEventId);
 }


let quatite = 0;
let selectedEventId = null;

let listEvenment = [
    { quatite: 0, eventId: 'ev1' },
    { quatite: 0, eventId: "ev2" },
    { quatite: 0, eventId: "ev3" },
    { quatite: 0, eventId: "ev4" }
];
function btn() {
    section1.style.display = "none";
    section2.style.display = "block";
    section3.style.display = "none";
    section4.style.display="none";
}
function btn2() {
    section1.style.display = "block";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
}
function btn3() {
    let next = false;
    for (i = 0; i < listEvenment.length; i++) {
        if (listEvenment[i].quatite > 0) {
            next = true
        }
    }
    if (next) {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "block";
        section4.style.display = "none";

        
    }
    document.getElementById("form").addEventListener("submit",(event) => {
            event.preventDefault()
            validation()
        })
}
function btn4(){
    section1.style.display="none";
    section2.style.display="none";
    section3.style.display = "none";
    section4.style.display = "block";
    
}


//event howa li kay3tina evenment li klika 3lih l'itilisateur   dak event howa mnin kanjabdo dok alma3lomat dyal ina evenment klika 3lih  almostakhdim 
function selectioner(event) {
    for (const element of document.querySelectorAll(".container>div")) {
        element.style.border = "solid 5px white";
    }
    event.currentTarget.style.border = "solid 5px red";
    for (const element of document.querySelectorAll(".container>div")) {
        element.addEventListener("click", selectioner);
    }


    const carddVide = document.getElementById("cardeVide");
    carddVide.innerHTML = event.currentTarget.outerHTML;
    selectedEventId = event.currentTarget.id;



    for (i = 0; i < listEvenment.length; i++) {
        if (selectedEventId == listEvenment[i].eventId) {
            //kathafd 3la quaniiti li kant 9bal
            // kanjib l quantite l9dima , 7int i9der ikon deja kant 3ndha VALUE
            quatite = listEvenment[i].quatite
            
        }
    }
    document.getElementById("nombre-de-teqy").innerHTML = quatite;
}

function changeQuantite(operation) {
    //operation => true/false + / -
    //operation  type boolean;
    if (operation == true) {
        quatite++;
    }
    if (operation == false) {
        quatite--;
    }
    //pour quantite drtha bax n9dro ndkhlo l fonction
    document.getElementById("nombre-de-teqy").innerHTML = quatite;//hadi bax jbna dak span au drna liha innerHTML bax tzadna dik quantete
    // console.log(document.getElementById("nombre-de-teqy").innerHTML)
    // console.log(listEvenment)


    for (i = 0; i < listEvenment.length; i++) {
        // console.log(selectedEventId)
        // console.log(listEvenment[i].eventId)
        console.log(selectedEventId)
        if (listEvenment[i].eventId == selectedEventId) {
            listEvenment[i].quatite = quatite
        }
    }
    document.getElementById("nombre-de-teqy").innerHTML = quatite;
}
    function validation() {

    let form = document.getElementById("form");
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("Prenom").value;
    let email = document.getElementById("email").value;
    let telephne = document.getElementById("telephne").value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^\d{10}$/;
    if (nom === "" || prenom === "" || email === "" || telephne === "") {
        alert("Please fill in all fields!");
    } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
    } else if (!phoneRegex.test(telephne)) {
        alert("Please enter a valid 10-digit phone number!");
    } else {
        let casedeux = document.getElementById("case-2");
        let dataDiv = document.createElement("div");
        dataDiv.innerHTML = `
                <div>${nom}</div>
                <div>${prenom}</div>
                <div>${email}</div>
                <div>${telephne}</div>
                <hr>
      `
        casedeux.appendChild(dataDiv); // hiya li katzid al3anasir f div ; katgol lih xad hade casedeux hat fih had datadiv   *appendChild*
        // au zidhom f casedeux
        //hadi li katmsah dakxi li kayn f wasat input
        form.reset()
    }
}
// function affichage(){


// }