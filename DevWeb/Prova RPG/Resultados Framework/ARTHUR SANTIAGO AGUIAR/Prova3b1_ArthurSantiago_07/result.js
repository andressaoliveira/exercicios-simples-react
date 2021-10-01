
window.onload = render
function render() {
  let name = document.getElementById("name");
  let classe = document.querySelector("#classe");
  let breed = document.querySelector("#breed");
  let force = document.querySelector("#force");
  let dexterity = document.querySelector("#dexterity");
  let wisdom = document.querySelector("#wisdom");
  let intelligence = document.querySelector("#intelligence");

  name.value = sessionStorage.getItem("name");
  classe.value = sessionStorage.getItem("classe");
  breed.value = sessionStorage.getItem("breed");
  force.value = sessionStorage.getItem("force");
  dexterity.value = sessionStorage.getItem("dexterity");
  wisdom.value = sessionStorage.getItem("wisdom");
  intelligence.value = sessionStorage.getItem("intelligence")
}
