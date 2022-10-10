import { description, keyBenifits, uses, information, others } from "../Product_Description_Page/description.js";
//getElementByID
let getElement = (id) => {
    let tag = document.getElementById(id);
    return tag;
}

//Vertical image border click start
function setBorder(str, id) {
    let dc = document.getElementById(id);
    dc.style.border = str;
}
setBorder("2px solid #32aeb1", "imb1");
//Vertical image border click start

//PC WIDTH IMAGES CLICK START

let img = document.getElementById("img1").src;
let img2 = document.getElementById("img2").src;
let img3 = document.getElementById("img3").src;

getElement("img1").onclick = () => {
    getElement("img").src = img;
    setBorder("2px solid #32aeb1", "imb1");
    setBorder("1px solid #d3d3d3", "imb2");
    setBorder("1px solid #d3d3d3", "imb3");
}
getElement("img2").onclick = () => {
    getElement("img").src = img2;
    setBorder("2px solid #32aeb1", "imb2");
    setBorder("1px solid #d3d3d3", "imb1");
    setBorder("1px solid #d3d3d3", "imb3");
}

getElement("img3").onclick = () => {
    getElement("img").src = img3;
    setBorder("2px solid #32aeb1", "imb3");
    setBorder("1px solid #d3d3d3", "imb1");
    setBorder("1px solid #d3d3d3", "imb2");
}
//PC WIDTH IMAGES CLICK END

//Description Click Start
function setDecBorder(color, bg, id) {
    let dc = document.getElementById(id);
    dc.style.color = color;
    dc.style.backgroundColor = bg;
}
setDecBorder("#24aeb1", "white", "dec1");
document.querySelector(".detailsBox").innerHTML = description();


getElement("dec1").onclick = () => {
    setDecBorder("#24aeb1", "white", "dec1");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec2");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec3");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec4");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec5");

    document.querySelector(".detailsBox").innerHTML = null;
    document.querySelector(".detailsBox").innerHTML = description();
}
getElement("dec2").onclick = () => {
    setDecBorder("#24aeb1", "white", "dec2");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec1");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec3");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec4");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec5");

    document.querySelector(".detailsBox").innerHTML = null;
    document.querySelector(".detailsBox").innerHTML = keyBenifits();
}
getElement("dec3").onclick = () => {
    setDecBorder("#24aeb1", "white", "dec3");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec2");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec1");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec4");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec5");

    document.querySelector(".detailsBox").innerHTML = null;
    document.querySelector(".detailsBox").innerHTML = uses();
}
getElement("dec4").onclick = () => {
    setDecBorder("#24aeb1", "white", "dec4");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec2");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec3");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec1");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec5");

    document.querySelector(".detailsBox").innerHTML = null;
    document.querySelector(".detailsBox").innerHTML = information();
}
getElement("dec5").onclick = () => {
    setDecBorder("#24aeb1", "white", "dec5");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec2");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec3");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec4");
    setDecBorder("#151b39", "rgba(21, 27, 57, .04)", "dec1");

    document.querySelector(".detailsBox").innerHTML = null;
    document.querySelector(".detailsBox").innerHTML = others();
}
//Description Click Start