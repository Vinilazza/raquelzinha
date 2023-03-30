const button = document.getElementById('btn');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 180)}%`;
    button.style.top = `${Math.ceil(Math.random() * 190)}%`;
});

let yes = document.getElementsByClassName("btn2")[0]

yes.addEventListener("click", () => {
  alert("A melhor escolha <3 <3")
})