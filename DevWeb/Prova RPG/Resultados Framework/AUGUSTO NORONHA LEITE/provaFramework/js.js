const btnMais$ = document.getElementById('forcaMais');
const btnMenos$ = document.getElementById('forcaMenos');

const btnPMa$ = document.getElementById('persoasaoMais');
const btnPMe$ = document.getElementById('persoasaoMenos');

const btnSMa$ = document.getElementById('sabedoriaMais');
const btnSMe$ = document.getElementById('sabedoriaMenos');

const btnDMa$ = document.getElementById('destresaMais');
const btnDme$ = document.getElementById('destresaMenos');

const pF$ = document.getElementById('contador');
const pP$ = document.getElementById('contadorP');
const pS$ = document.getElementById('contadorS');
const pD$ = document.getElementById('contadorD');

//forca
let contadorF = 0;

pF$.innerHTML = contadorF;

btnMais$.addEventListener("click", function(){
    pF$.innerHTML = ++contadorF;
});

btnMenos$.addEventListener("click", function(){
    pF$.innerHTML = --contadorF;
});


//persoasao
let contadorP = 0;

pP$.innerHTML = contadorP;

btnPMa$.addEventListener("click", function(){
    pP$.innerHTML = ++contadorP;
});

btnPMe$.addEventListener("click", function(){
    pP$.innerHTML = --contadorP;
});



//sabedoria
let contadorS = 0;

pS$.innerHTML = contadorS;

btnSMa$.addEventListener("click", function(){
    pS$.innerHTML = ++contadorS;
});

btnSMe$.addEventListener("click", function(){
    pS$.innerHTML = --contadorS;
});



//destresa
let contadorD = 0;

pD$.innerHTML = contadorD;

btnDMa$.addEventListener("click", function(){
    pD$.innerHTML = ++contadorD;
});

btnDme$.addEventListener("click", function(){
    pD$.innerHTML = --contadorD;
});

const btnEnviar$ = document.getElementById('enviar');

const resultado$ = document.getElementById('resultado');
const nome$ = document.getElementById('nome').value;
const classe$ = document.getElementById('classe').value;
var raca$ = document.getElementById('humano').value;

if(document.getElementById('humano').checked == true) {   
    raca$ = document.getElementById('humano').value;

} else if (document.getElementById('elfo').checked == true) {  
    raca$ = document.getElementById('elfo').value;
}  else{
    raca$ = document.getElementById('anao').value;
}

const txtNome$ = document.getElementById('nameText');

const txtClasse$ = document.getElementById('classText');

const txtRaca$ = document.getElementById('racaText');

const txtForca$ = document.getElementById('forcaText');

const txtPersoasao$ = document.getElementById('persoasaoText');

const txtSabedoria$ = document.getElementById('sabedoriaText');

const txtDestresa$ = document.getElementById('destresaText');




btnEnviar$.addEventListener("click", function(e){
    resultado$.style.visibility = "visible";
    txtNome$.innerHTML = nome$
    txtClasse$.innerHTML = classe$
    txtRaca$.innerHTML = raca$
    txtForca$.innerHTML = pF$.textContent
    txtPersoasao$.innerHTML = pP$.textContent
    txtSabedoria$.innerHTML = pS$.textContent
    txtDestresa$.innerHTML = pD$.textContent
    e.preventDefault();
})






