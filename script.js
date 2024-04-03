hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

let main = document.getElementById("main");
let btn = document.getElementById("btn");
let bg = document.getElementById("bg");

function random() {
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", () => {
    bg.innerText = '#';
    for (i = 0; i < 6; i++) {
        num = random();
        bg.innerText += hex[num]
    }

    main.style.backgroundColor = bg.innerText;
})