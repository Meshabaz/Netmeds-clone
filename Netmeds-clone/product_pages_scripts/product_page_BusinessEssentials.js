
let page = "Business Essentials";

let loc1 = "Home"
let loc2 = "Non-Prescription"

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
        nitem = search.value;
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


import displayPageLocationOnBanner from "../utils/page_location_display.js";
document.getElementById("headdiv").innerHTML = displayPageLocationOnBanner(loc1, loc2, page);

import shopByCategoryCards from "../utils/shop_by_category_cards.js";
document.getElementById("main-shopbyCategoryDiv").innerHTML = shopByCategoryCards();

import categoryFilter from "../utils/categoryFilter.js";
document.getElementById("subFilterBox").innerHTML = categoryFilter();

import productPages from "../utils/master_script_productPages.js";
productPages(page);

const cartArr = JSON.parse(localStorage.getItem("cartitems")) || [];
const user_name = localStorage.getItem("user_fname");
const user_login_status = localStorage.getItem("login_status");
console.log(user_name, user_login_status);

cartDetail();
function cartDetail() {
    if (user_login_status == 'true') {
        document.querySelector(".cart_counter").style.display = "block";
        document.querySelector(".cart_counter").innerHTML = cartArr.length;
        document.querySelector(".withoutlogin").style.display = "none";
        document.querySelector(".withlogin").innerText = `${user_name}`
        document.querySelector(".withlogin").style.display = "block"
        document.querySelector(".withlogin").addEventListener("click", () => {
            window.location.href = "profile.html";
            // document.querySelector(".profile_links").location.href = "./profile/profile.html";
        })
    } else {
        document.querySelector(".cart_counter").style.display = "none";
        document.querySelector(".withlogin").innerText = ``;
        document.querySelector(".withlogin").style.display = "none"
        document.querySelector(".withoutlogin").style.display = "block";
        document.querySelector(".withoutlogin").addEventListener("click", () => {
            window.location.href = "login_signup.html";
        })
    }
}