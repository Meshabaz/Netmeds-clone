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
    "id": 7,
    "prod_name": "Ciphands Rinse Free & Non-Sticky Antiseptic Hand Sanitizer Gel 500 ml",
    "categories_1": "Business Essentials",
    "categories_2": "Covid Essentials",
    "best_price": 236.55,
    "mrp": 249.00,
    "mkf": "Cipla Ltd(Otc)",
    "Brands": "Ciphands",
    "discount": 5,
    "url_1": "https://www.netmeds.com/images/product-v1/600x600/914763/ciphands_rinse_free_non_sticky_antiseptic_hand_sanitizer_gel_500_ml_0_1.jpg",
    "url_2": "https://www.netmeds.com/images/product-v1/600x600/914763/ciphands_rinse_free_non_sticky_antiseptic_hand_sanitizer_gel_500_ml_1_0.jpg",
    "url_3": "https://www.netmeds.com/images/product-v1/600x600/914763/ciphands_rinse_free_non_sticky_antiseptic_hand_sanitizer_gel_500_ml_2_0.jpg",
    "dis": null,
    "hsn_code": 38089400
}
localStorage.setItem("clicked", JSON.stringify(obj));
let clicked = JSON.parse(localStorage.getItem("clicked"));
//Set DATA to Ui start
const setData = () => {

    getElement("img1").src = clicked.url_1;
    getElement("img2").src = clicked.url_2;
    getElement("img3").src = clicked.url_3;
    getElement("pName").innerText = clicked.prod_name;
    getElement("cat1").innerText = clicked.categories_1;
    getElement("cat2").innerText = clicked.categories_2;
    getElement("cimg1").src = clicked.url_1;
    getElement("cimg2").src = clicked.url_2;
    getElement("cimg3").src = clicked.url_3;
    getElement("price").innerText = clicked.best_price;
    getElement("cutPrice").innerText = clicked.mrp;
    getElement("discount").innerText = `GET ${clicked.discount}% OFF`;
    getElement("company").innerText = `* Mkt: ${clicked.mkf}`;
    getElement("default").innerText = `You get ${clicked.discount}% OFF on this product`;
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

//ADD TO CART START
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartData = [];

let flag = false;
let quantity = 0;
cart.forEach(element => {
    if (element.prod_name === clicked.prod_name) {
        flag = true;
        quantity = element.quantity;
    }
});

if (flag === true) {
    getElement("addToCart").style.display = "none";
    getElement("btnFlex").style.display = "flex";

    getElement("quan").innerText = quantity;
}

document.getElementById("addToCart").addEventListener("click", () => {

    let data = {
        "id": clicked.id,
        "prod_name": clicked.prod_name,
        "best_price": clicked.best_price,
        "mrp": clicked.mrp,
        "mkf": clicked.mkf,
        "url_1": clicked.url_1,
        "quantity": 1
    }

    cartData.push(data);
    localStorage.setItem("cart", JSON.stringify(cartData));
    getElement("addToCart").style.display = "none";
    getElement("btnFlex").style.display = "flex";

    //getElement("quan").innerText = 1;
});

getElement("minus").addEventListener("click", () => {
    if (getQuantity() === 1) {
        getElement("addToCart").style.display = "grid";
        getElement("btnFlex").style.display = "none";
        cart.forEach((element, indx) => {
            if (element.prod_name === clicked.prod_name) {
                removeData(indx);
            }
        });
    }
    else {
        getQuantity()--;
        cart.forEach((element, indx) => {
            if (element.prod_name === clicked.prod_name) {
                updateData(indx);
            }
        });

        getElement("quan").innerText = getQuantity();
    }
});

getElement("plus").addEventListener("click", () => {
    getQuantity()++;
    cart.forEach((element, indx) => {
        if (element.prod_name === clicked.prod_name) {
            updateData(indx);
        }
    });

    getElement("quan").innerText = getQuantity();
});

//only error in getQuantity;
function updateData(indx) {
    cart.splice(indx, 1);
    let obj = {
        "id": clicked.id,
        "prod_name": clicked.prod_name,
        "best_price": clicked.best_price,
        "mrp": clicked.mrp,
        "mkf": clicked.mkf,
        "url_1": clicked.url_1,
        "quantity": getQuantity()
    }
    cartData.push(obj);
    localStorage.setItem("cart", JSON.stringify(cartData));
}

function removeData(indx) {
    cart.splice(indx, 1);
    localStorage.setItem("cart", JSON.stringify(cartData));
}

function getQuantity() {
    let temp = 0;
    cart.forEach(element => {
        if (element.prod_name === clicked.prod_name) {
            temp = element.quantity;
        }
    });

    return temp;
}
//ADD TO CART END
