const form = document.querySelector('#register')

form.addEventListener("submit", (event) => {
  event.preventDefault();
})

function addPoint(attributeInput) {
  let point = document.querySelector('#point')
  if (point.value != "0") {
    console.log(attributeInput)
    const input = document.querySelector(`#${attributeInput}`);
    input.value = Number(input.value) + 1;
    point.value = Number(point.value) - 1;
  } else {
    alert('Sem pontos')
  }
}

function removePoint(attributeInput) {
  let point = document.querySelector('#point')
  const input = document.querySelector(`#${attributeInput}`);

  if (point.value != "10" && input.value != "0") {
    input.value = Number(input.value) - 1;
    point.value = Number(point.value) + 1;
  }
}

const btn = document.querySelector('#btn');

btn.addEventListener("click", () => {
  click()
})

function click() {
  let name = document.querySelector('#name')
  let classe = document.querySelector('#classe')
  let breed = document.querySelector('input[name=breed]:checked').value
  let force = document.querySelector('#force').value
  let dexterity = document.querySelector('#dexterity').value
  let wisdom = document.querySelector('#wisdom').value
  let intelligence = document.querySelector('#intelligence').value

  if (name.value != "" && (force != "0" || dexterity != "0" || wisdom != "0" ||
    intelligence != "0")) {

    sessionStorage.setItem('name', name.value);
    sessionStorage.setItem('classe', classe.options[classe.selectedIndex].value);
    sessionStorage.setItem('breed', breed);
    sessionStorage.setItem('force', force);
    sessionStorage.setItem('dexterity', dexterity);
    sessionStorage.setItem('wisdom', wisdom);
    sessionStorage.setItem('intelligence', intelligence);

    clearFields()

    window.location.href = './result.html'
  }else{
    if(name.value == ""){
      name.focus()
      alert('Digite seu nome')
    }else{
      alert('escolha pelo menos 1 atributo')
    }
  }
}

function clearFields() {
  let name = document.querySelector('#name').value = ""
  let force = document.querySelector('#force').value = 0
  let dexterity = document.querySelector('#dexterity').value = 0
  let wisdom = document.querySelector('#wisdom').value = 0
  let intelligence = document.querySelector('#intelligence').value = 0
  let point = document.querySelector('#point').value = 10
}