function fichaRPG() {
    var nome = document.getElementById("nomeCadastro").value
    if (nome == "") {
        alert("Insira um nome para o seu personagem!!!")
    }else{
        const element = document.getElementById("resultado");
        element.style.visibility = "visible";
        var nome = document.getElementById("nomeCadastro").value
        var classe = document.getElementById("classeCadastro").value
        var sexo = document.getElementById("sexoCadastro").value
        var humano = document.getElementById("humano")
        var elfo = document.getElementById("elfo")
        var anao = document.getElementById("anao")
    
        if (humano.checked) {
            var raca = document.getElementById("humano").value
        } else if (elfo.checked) {
            var raca = document.getElementById("elfo").value
        }else if (anao.checked) {
            var raca = document.getElementById("anao").value
        }
    
        var forca = document.getElementById("forca").value
        var coragem = document.getElementById("coragem").value
        var agilidade = document.getElementById("agilidade").value
        var inteligencia = document.getElementById("inteligencia").value
        var habilidade = document.getElementById("habilidade").value
    
        document.getElementById("nomePersonagem").innerHTML = `${nome}`
        document.getElementById("classePersonagem").innerHTML = `${classe}`
        document.getElementById("sexoPersonagem").innerHTML = `${sexo}`
        document.getElementById("racaPersonagem").innerHTML = `${raca}`
        document.getElementById("forcaPersonagem").innerHTML = `${forca}`
        document.getElementById("coragemPersonagem").innerHTML = `${coragem}`
        document.getElementById("agilidadePersonagem").innerHTML = `${agilidade}`
        document.getElementById("inteligenciaPersonagem").innerHTML = `${inteligencia}`
        document.getElementById("habilidadePersonagem").innerHTML = `${habilidade}`
    }
}

function adicionaAtributo(params) {
    var pontos = document.getElementById("pt").value
    var forca = document.getElementById("forca").value
    var coragem = document.getElementById("coragem").value
    var agilidade = document.getElementById("agilidade").value
    var inteligencia = document.getElementById("inteligencia").value
    var habilidade = document.getElementById("habilidade").value

    if (pontos > 0) {
        if (params == 'forca') {
            pontos--
            document.getElementById("pt").value = `${pontos}`
            forca++
            document.getElementById("forca").value = `${forca}`
        } else if (params == 'coragem') {
            pontos--
            document.getElementById("pt").value = `${pontos}`
            coragem++
            document.getElementById("coragem").value = `${coragem}`
        } else if (params == 'agilidade') {
            pontos--
            document.getElementById("pt").value = `${pontos}`
            agilidade++
            document.getElementById("agilidade").value = `${agilidade}`
        } else if (params == 'inteligencia') {
            pontos--
            document.getElementById("pt").value = `${pontos}`
            inteligencia++
            document.getElementById("inteligencia").value = `${inteligencia}`
        }else if (params == 'habilidade') {
            pontos--
            document.getElementById("pt").value = `${pontos}`
            habilidade++
            document.getElementById("habilidade").value = `${habilidade}`
        }
    }
}
function removeAtributo(params) {
    var pontos = document.getElementById("pt").value
    var forca = document.getElementById("forca").value
    var coragem = document.getElementById("coragem").value
    var agilidade = document.getElementById("agilidade").value
    var inteligencia = document.getElementById("inteligencia").value
    var habilidade = document.getElementById("habilidade").value

        if (params == 'forca' && forca > 0) {
            pontos++
            document.getElementById("pt").value = `${pontos}`
            forca--
            document.getElementById("forca").value = `${forca}`
        } else if (params == 'coragem' && coragem > 0) {
            pontos++
            document.getElementById("pt").value = `${pontos}`
            coragem--
            document.getElementById("coragem").value = `${coragem}`
        } else if (params == 'agilidade' && agilidade > 0) {
            pontos++
            document.getElementById("pt").value = `${pontos}`
            agilidade--
            document.getElementById("agilidade").value = `${agilidade}`
        } else if (params == 'inteligencia' && inteligencia > 0) {
            pontos++
            document.getElementById("pt").value = `${pontos}`
            inteligencia--
            document.getElementById("inteligencia").value = `${inteligencia}`
        }else if (params == 'habilidade' && habilidade > 0) {
            pontos++
            document.getElementById("pt").value = `${pontos}`
            habilidade--
            document.getElementById("habilidade").value = `${habilidade}`
        }
    }
    function limparRPG() {
        document.getElementById("nomeCadastro").value = ""
        document.getElementById("forca").value = "0"
        document.getElementById("coragem").value = "0"
        document.getElementById("agilidade").value = "0"
        document.getElementById("inteligencia").value = "0"
        document.getElementById("habilidade").value = "0"
        document.getElementById("pt").value = "10"
    }