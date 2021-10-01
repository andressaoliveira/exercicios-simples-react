const mainInput = document.getElementById("mainScore")

document.getElementById("checkout").onclick = (e) => {
  const first = document.getElementById("firstDev").value
  const second = document.getElementById("secondDev").value
  const third = document.getElementById("thirdDev").value

  document.getElementById("input-container").style.display = 'none'
  document.getElementById("reveal").style.display = 'block'
  document.getElementById("checkout").style.display = 'none'
  document.getElementById("results").innerHTML = `
  <div>
    <div>
      <h3>Desenvolvedor DevOps </h3>
      <p>Pontuação: <span>${first}</span></p>
    </div>

    <div>
      <h3>Desenvolvedor Mobile </h3>
      <p>Pontuação: <span>${second}</span></p>
    </div>

  <div>
    <h3>Desenvolvedor Fullstack </h3>
    <p>Pontuação: <span>${third}</span></p>
  </div>
  </div>
  `

  //mudanças de UI para mudar a visibilidade dos elementos
}

const addValue = (id) => {
  if (mainInput.value > 0 && mainInput.value <= 15) {
    const scoreTo = document.getElementById(id.id)

    //pegando o valor do ID passado pelo onClick no HTML

    scoreTo.value = Number(scoreTo.value) + 1
    mainInput.value -= 1

    //usando Number para conseguir somar invez de interpolar
  } else {
    alert("Não possui mais pontos")
  }
}

const removeValue = (id) => {
  if (mainInput.value >= 0 && mainInput.value < 15) {
    const scoreTo = document.getElementById(id.id)

    scoreTo.value = Number(scoreTo.value) - 1
    mainInput.value = Number(mainInput.value) + 1

    //usando Number para conseguir subtrair invez de interpolar
  } else {
    alert("Não há pontos para retirar")
  }
}

document.getElementById("reveal").onclick = (e) => {
  document.getElementById("input-container").style.display = 'block'
  document.getElementById("results").innerHTML = ""
  document.getElementById("reveal").style.display = 'none'
  document.getElementById("checkout").style.display = 'block'

  //mudanças de UI para mudar a visibilidade dos elementos
}