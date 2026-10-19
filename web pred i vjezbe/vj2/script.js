const getFirstBtn = () => {
    let body = document.getElementsByTagName("body")[0];
    let btn = body.childNodes[3];
    return btn;
}

let btn1 = getFirstBtn();
let btn2 = document.getElementsByTagName("button")[1];

const createDynamically = () => {
    let p = document.createElement('p');
    let hr = document.createElement('hr');

    p.innerHTML = 'This is a dinamically created paragraph';

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(p);
    body.appendChild(hr);
}

createDynamically();

const removeThirdBtn = () => {
    let btn = document.getElementById("id-btn");
    let parent = btn.parentNode;
    parent.removeChild(btn);
}

removeThirdBtn();

const changeColor = (color) => {
    let title = document.getElementsByTagName("h2")[0];
    title.style.color = color;
}

changeColor();

btn2.addEventListener("click", () => {
    changeColor("deepskyblue");
});

(() => {
    let input = document.createElement("input");
    let div = document.createElement("div");

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(input);
    body.appendChild(div);

    input.addEventListener("keyup",() => {
        div.innerText = input.value.toUpperCase();
    });
})();

const renderList = () => {
    const dishes = ["Fries🍟", "Hamburger🍔", "Pizza🍕"];
}



let clock = document.getElementById("clock");
const renderClock = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    const txt = String(h) + ":" + String(m) + ":" + String(s)
    clock.innerText = txt;
}
renderClock();
setInterval(renderClock, 1000);

let counter = document. getElementById("counter");
let millis = Date.now();
const duration = 10;
const setCounter = (callb) => {
    let new_millis = Date.now();
    let seconds_passed = (new_millis - millis) / 1000;
    if (seconds_passed >= duration)
        callb();
    else counter.innerText = String(duration - seconds_passed);
}
let interval = setInterval(() => {
    setCounter(() => {
        clearInterval(interval);
        counter.innerText = String(0);
    });
}, 10);