//oi prof aqui sou eu criando as variáveis e etc (a "ponto" são os pontos duh, ai criei uma pra cada atributo tbm. ai criei uma tbm pro "negocio.value" pq fica mais facil de se referir depois e afins)
var ponto = document.getElementById("pt")
var pontoValue = ponto.value
var classe = document.getElementById("classe")
var forca = document.getElementById("forca")
var destreza = document.getElementById("destreza")
var sabedoria = document.getElementById("sabedoria")
var inteligencia = document.getElementById("inteligencia")
//aqui sou eu criando a função de enviar os valores pros outros negócios
function enviocis(){
        var nome = document.getElementById("nome");
        var nomer = document.getElementById("nomer");
        var classe = document.getElementById("classe");
        var classer = document.getElementById("cr");
        var f = document.getElementById("forca");
        var fr = document.getElementById("fr");
        var d = document.getElementById("destreza");
        var dr = document.getElementById("dr");
        var s = document.getElementById("sabedoria");
        var sr = document.getElementById("sr");
        var i = document.getElementById("inteligencia");
        var ir = document.getElementById("ir");
        //custei a fazer o proximo var pq tem q pegar o valor da checkbox
        var r = document.querySelector('input[name="raca"]:checked')
        var rr = document.getElementById("rr");
        nomer.innerText = nome.value;
        cr.innerText = classe.value;
        rr.innerText = r.value;
        fr.innerText = f.value;
        dr.innerText = d.value;
        sr.innerText = s.value;
        ir.innerText = i.value;
    }
//criei um while pq o ponto não pode passar de 10 e nem de 0 ne kkkk
//atualização: tirei o while, meu programa não tava funcionando direito com ele.
//ai tem a função pra add os atributos tbm
//perdoa a repetição dos trem prof eu tenho duvida na matéria (T-T)
//força
function addforca(){
        if (pontoValue >= 1) {
        forca.value++
        pontoValue--
        ponto.value = pontoValue
        console.log(forca.value);
        console.log(pontoValue);
}
}

function removeforca(){
        forca.value--
        pontoValue++
        ponto.value = pontoValue
        console.log(forca.value);
        console.log(pontoValue);
}

//destreza

function adddestreza(){
        if (pontoValue >= 1) {
        destreza.value++
        pontoValue--
        ponto.value = pontoValue
        console.log(destreza.value);
        console.log(pontoValue);
}
}
function removedestreza(){
        destreza.value--
        pontoValue++
        ponto.value = pontoValue
        console.log(destreza.value);
        console.log(pontoValue);
}

//sabedoria

function addsabedoria(){
        if (pontoValue >= 1) {
        sabedoria.value++
        pontoValue--
        ponto.value = pontoValue
        console.log(sabedoria.value);
        console.log(pontoValue);
}
}
function removesabedoria(){
        sabedoria.value--
        pontoValue++
        ponto.value = pontoValue
        console.log(sabedoria.value);
        console.log(pontoValue);
}

//inteligência

function addinteligencia(){
        if (pontoValue >= 1) {
        inteligencia.value++
        pontoValue--
        ponto.value = pontoValue
        console.log(inteligencia.value);
        console.log(pontoValue);
}
}
function removeinteligencia(){
        inteligencia.value--
        pontoValue++
        ponto.value = pontoValue
        console.log(inteligencia.value);
        console.log(pontoValue);
}
// é isso! obg prof perfeita