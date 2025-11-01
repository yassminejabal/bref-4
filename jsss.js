
function btn() {
    section1.style.display = "none";
    section2.style.display = "block";
}


let lescardes = document.querySelectorAll(".container>div");
const section1 = document.getElementById("SECTION");
const section2 = document.getElementById("container-2");

function selectioner(event){
    for(const element of lescardes){
        element.style.border ="solid 5px white";
    }
    event.currentTarget.style.border = "solid 5px red";
    for(const element of lescardes){
        element.addEventListener("click",selectioner);
    }
    const carddVide = document.getElementById("cardeVide");
    carddVide.innerHTML= event.currentTarget.outerHTML;
    }