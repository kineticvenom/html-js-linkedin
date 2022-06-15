

let button = document.getElementById("connect");
let backgroundBoxes = document.getElementsByClassName('main-boxes')
function random(number) {
    return Math.floor(Math.random() * (number+1))
}
button.addEventListener('click', (event) => {
    console.log('Button Listener')
    const rndCol = `rgb (155, 100, 102)`;
    document.body.style.backgroundColor = rndCol;
})
// document
    // // .getElementById("connect");
    // button.addEventListener("click", (event) => {
    //     console.log("Button Listener")
    // })