const bh = document.getElementById("ExperienciA")
const br = document.getElementById("ExperienciP")
const div = document.getElementById("contenido")
const Aexp = [
    {
        "titulo": "Creacion digital, animación y videojuegos",
        "periodo": "2021-2025",
        "centro": "Universidade da Coruña"
    },
    {
        "titulo": "GS Desarrollo de Aplicaciones Web",
        "periodo":"2025-2027",
        "centro":"CPR Afundación A Coruña"
    }

]
const Pexp = [
    {
        "Puesto":"Software dev(prácticas)",
        "periodo":"2024",
        "Empresa":"Universidade da Coruña"
    }

]

bh.addEventListener("click", hab);
br.addEventListener("click", req);

function hab(){
    div.querySelectorAll('ul').forEach(n => n.remove());
    Aexp.forEach(element => { 
        var bloq = document.createElement("ul")
        Object.keys(Aexp[0]).forEach( x => {
            const nl = document.createElement("li")
            nl.textContent = x + ": " + element[x]
            bloq.appendChild(nl)
        })
        div.appendChild(bloq);
    });   
}
function req(){
    div.querySelectorAll('ul').forEach(n => n.remove());
    var bloq = document.createElement("ul")
    Pexp.forEach(element => {
        var bloq = document.createElement("ul")
        Object.keys(Pexp[0]).forEach( x => {
            const nl = document.createElement("li")
            nl.textContent = x + ": " + element[x]
            bloq.appendChild(nl)
        })
        div.appendChild(bloq);
    })
}
