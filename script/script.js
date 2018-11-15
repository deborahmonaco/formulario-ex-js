/* Pergunta numero 1 */

/* variavel: pegar valor <input> */


let btn = document.getElementById("btn-enviar");

btn.addEventListener("click", recebeInput);

function recebeInput(e){
        e.preventDefault();
    /* Pergunta numero 1 */
        var p1 = document.getElementById("campo-num1").value;
        var r1 = p1.toLowerCase(); 

        var corretoR1 = document.getElementById("r1");
        var erradoR1 = document.getElementById("r4");

        if (r1 === "rosinha"){
        corretoR1.innerHTML = "<span class='upper'> correto! </span> a namorada do Chico Bento é a <em class='upper'> rosinha </em>";
        } else {
        erradoR1.innerHTML = "<span class='upper'> errado! </span> a namorada do Chico Bento é a <em class='upper'> rosinha </em>";
        };
    /* Pergunta numero 2 */
        var p2 = document.getElementById("campo-num2").value;
        var r2 = p2.toLowerCase(); 

        var corretoR2 = document.getElementById("r2");
        var erradoR2 = document.getElementById("r5");

        if (r2 === "cascão"){
        corretoR2.innerHTML = "<span class='upper'> correto! </span> o amigo do cebolinha é o  <em class='upper'> cascão </em>";
        } else {
        erradoR2.innerHTML = "<span class='upper'> errado! </span> o amigo do cebolinha é o  <em class='upper'> cascão </em>";
        };
    /* Pergunta numero 3 */
        var p3 = document.getElementById("campo-num3").value;
        var r3 = p3.toLowerCase(); 

        var corretoR3 = document.getElementById("r3");
        var erradoR3 = document.getElementById("r6");

        if (r3 === "magali"){
        corretoR3.innerHTML = "<span class='upper'> correto! </span> a amiga da Mônica é a <em class='upper'> magali </em>";
        } else {
        erradoR3.innerHTML = "<span class='upper'> errado! </span> a amiga da Mônica é a <em class='upper'> magali </em>";
        };

        };


var load = document.getElementById("btn-reload");

load.addEventListener("click", reload);

function reload() {
    ""
};


        


        











