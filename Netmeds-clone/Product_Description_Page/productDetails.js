import { description, keyBenifits, uses, information, others } from "../Product_Description_Page/description.js";
import navbar from "../scripts/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

// mo
const searchdiv = document.querySelector("#mid");
const search = document.querySelector("#inp");
const suggbox = document.querySelector(".sugg_box");

const dataurl = `https://mr-raaz.github.io/NetmedsClone_data/data.json`;
// https://mr-raaz.github.io/NetmedsClone_data/landingPage_data.json
// console.log(dataurl);
getsugg(dataurl);
async function getsugg(dataurl) {
    try {
        let res = await fetch(dataurl);
        let url = await res.json();

        search.onkeyup = (e) => {
            // console.log(url);
            console.log("val:", e.target.value);
            // console.log(url);
            let item = e.target.value;
            let a = url.products;
            let arr = [];
            let arrtopass = [];
            // console.log(a);
            if (item) {
                var c = 0;
                const result = a.filter((el) => {
                    if (el.prod_name[0].toLowerCase() === item) {
                        // console.log(el.prod_name[0].toLowerCase().startWith(item.toLowerCase()));
                        arr.push(el.prod_name);
                        arrtopass.push(el);
                        // console.log(el.prod_name, c++);
                    }
                });
                let dis = arr.map((e) => {
                    return a = `<li>` + e + `</li>`;
                })
                // console.log("array:", arr);
                searchdiv.classList.add("active");
                show_to_sugg(dis);
                let allList = suggbox.querySelectorAll("li");
                for (let i = 0; i < allList.length; i++) {
                    // console.log("data:", e);
                    // allList[i].setAttribute("onclick", "select()");
                    allList[i].addEventListener("click", () => {
                        select(arrtopass[i]);
                    });
                }
            }
            else {
                searchdiv.classList.remove("active");
            }
        }
    } catch (error) {
        console.log(error);
    }
}

function select(e) {
    console.log((" hello", e));
    localStorage.setItem("clicked", JSON.stringify(e));
    window.location.href = "./Product_Description_Page/productDetails.html";
}

// let nonsenseInp = document.querySelector("#inp");
function show_to_sugg(list) {
    // console.log(list);
    let data;
    if (!list.length) {
        var nitem = search.value;
        data = `<li>` + nitem + `</li>`;
    } else {
        data = list.join('');
    }
    suggbox.innerHTML = data;
}

document.getElementById("inp").addEventListener("keypress", () => {
    if (event.key == "Enter") {
        localStorage.setItem("search", document.getElementById("inp").value);
        window.location.href = "../SearchedPage/search.html";
    }
});

//PReLoadEr
let loader = document.getElementById("preLoader");
window.addEventListener("load", function () {
    loader.style.display = "none";
});
let getElement = (id) => {
    let tag = document.getElementById(id);
    return tag;
}

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
    getElement("price").innerText = "₹" + clicked.best_price;
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



//ADD TO CART FUNCTIONALITY START

// 
const user_login_status = localStorage.getItem("login_status");
const user_name = localStorage.getItem("user_fname");
let cart = JSON.parse(localStorage.getItem("cartitems")) || [];
// cartDetail();
// function cartDetail() {
if (user_login_status == 'true') {
    document.querySelector(".cart_counter").style.display = "block";
    document.querySelector(".cart_counter").innerHTML = cart.length;
    document.querySelector(".withoutlogin").style.display = "none";
    document.querySelector(".withlogin").innerText = `${user_name}`
    document.querySelector(".withlogin").style.display = "block"
    document.querySelector(".withlogin").addEventListener("click", () => {
        window.location.href = "/profile.html";
        // document.querySelector(".profile_links").location.href = "./profile/profile.html";
    })
} else {
    document.querySelector(".cart_counter").style.display = "none";
    document.querySelector(".withlogin").innerText = ``;
    document.querySelector(".withlogin").style.display = "none"
    document.querySelector(".withoutlogin").style.display = "block";
    document.querySelector(".withoutlogin").addEventListener("click", () => {
        window.location.href = "/login_signup.html";
    })
}
// }

// if (user_login_status == 'true') {
// } else {
//     document.querySelector(".cart_counter").style.display = "none";

// }
// 


let title = cart.filter((a) => {
    return a.prod_name === clicked.prod_name;
});

function getQuantity() {
    let temp = 0;
    cart.forEach(element => {
        if (element.prod_name === clicked.prod_name) {
            temp = element.quantity;
        }
    });
    return temp;
}

if (title.length === 0) {
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

        cart.push(data);
        localStorage.setItem("cartitems", JSON.stringify(cart));
        getElement("addToCart").style.display = "none";
        getElement("btnFlex").style.display = "flex";
        getElement("quan").innerText = 1;

        location.reload();
    });
}
else {
    getElement("addToCart").style.display = "none";
    getElement("btnFlex").style.display = "flex";

    getElement("quan").innerText = getQuantity();

    getElement("plus").addEventListener("click", () => {
        let quan = getQuantity();
        if (quan === 5) {
            alert("you can't add more than 5 products");
        }
        else {
            quan++;
            cart.forEach((element, indx) => {
                if (element.prod_name === clicked.prod_name) {
                    updateData(indx, quan);
                }
            });
        }
    });

    getElement("minus").addEventListener("click", () => {
        let quan = getQuantity();
        if (quan === 1) {
            getElement("addToCart").style.display = "grid";
            getElement("btnFlex").style.display = "none";
            cart.forEach((element, indx) => {
                if (element.prod_name === clicked.prod_name) {
                    removeData(indx);
                }
            });
            location.reload();
        }
        else {
            quan--;
            cart.forEach((element, indx) => {
                if (element.prod_name === clicked.prod_name) {
                    updateData(indx, quan);
                }
            });
        }
    });

}

function updateData(indx, quan) {
    console.log(quan);
    cart.splice(indx, 1);
    let obj = {
        "id": clicked.id,
        "prod_name": clicked.prod_name,
        "best_price": clicked.best_price,
        "mrp": clicked.mrp,
        "mkf": clicked.mkf,
        "url_1": clicked.url_1,
        "quantity": quan
    }
    cart.push(obj);
    localStorage.setItem("cartitems", JSON.stringify(cart));

    getElement("quan").innerText = getQuantity();
}


function removeData(indx) {
    cart.splice(indx, 1);
    localStorage.setItem("cartitems", JSON.stringify(cart));
}

//ADD TO CART FUNCTIONALITY END

document.querySelector("title").innerText = clicked.prod_name;




