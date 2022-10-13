import navbar from "./navbar.js";

document.querySelector(".navbar").innerHTML = navbar();

const a = JSON.parse(localStorage.getItem("ToShowInSearchPage")) || [];
console.log(a);

function showToUi(e) {
    // data.map((e) => {
    console.log(e);
    let div = document.createElement("div")
    let img = document.createElement('img');
    let name = document.createElement('h2');
    name.innerText = e.prod_name;
    img.src = e.url_1
    div.append(img, name);
    document.querySelector(".container").append(div);
    // })
}
showToUi(a);


