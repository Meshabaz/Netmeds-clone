import { description, keyBenifits, uses, information, others } from "../Product_Description_Page/description.js";



//PReLoadEr
let loader = document.getElementById("preLoader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});
let getElement = (id) => {
    let tag = document.getElementById(id);
    return tag;
}

const obj = {
    "id": 1,
    "prod_name": "mCaffeine Naked & Raw Tan Removal Coffee Body Scrub 100 gm",
    "categories_1": "Personal Care",
    "categories_2": "Bath & Shower",
    "best_price": 377.16,
    "mrp": 499.00,
    "mkf": "Pep Technologies Pvt. Ltd.",
    "Brands": "mCaffeine",
    "discount": 16,
    "url_1": "https://www.netmeds.com/images/product-v1/600x600/959541/mcaffeine_naked_raw_tan_removal_coffee_body_scrub_100_gm_0_0.jpg",
    "url_2": "https://www.netmeds.com/images/product-v1/150x150/959541/mcaffeine_naked_raw_tan_removal_coffee_body_scrub_100_gm_1_0.jpg",
    "url_3": "https://www.netmeds.com/images/product-v1/150x150/959541/mcaffeine_naked_raw_tan_removal_coffee_body_scrub_100_gm_2_0.jpg",
    "dis": null,
    "hsn_code": null
}
localStorage.setItem("clicked", JSON.stringify(obj));
//Set DATA to Ui start
const setData = () => {
    const obj = JSON.parse(localStorage.getItem("clicked"));

    getElement("img1").src = obj.url_1;
    getElement("img2").src = obj.url_2;
    getElement("img3").src = obj.url_3;
    getElement("pName").innerText = obj.prod_name;
    getElement("cat1").innerText = obj.categories_1;
    getElement("cat2").innerText = obj.categories_2;
    getElement("cimg1").src = obj.url_1;
    getElement("cimg2").src = obj.url_2;
    getElement("cimg3").src = obj.url_3;
    getElement("price").innerText = obj.best_price;
    getElement("cutPrice").innerText = obj.mrp;
    getElement("discount").innerText = `GET ${obj.discount}% OFF`;
    getElement("company").innerText = `* Mkt: ${obj.mkf}`;
    getElement("default").innerText = `You get ${obj.discount}% OFF on this product`;
}
setData();
//Set Data to ui end
//getElementByID

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
getElement("img").src = img;
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
//Description Click End
