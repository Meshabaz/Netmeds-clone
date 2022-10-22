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












let val = document.getElementById('radio');
let cod = document.getElementById("radio_cod");
let amount = localStorage.getItem("amount");
let cart = JSON.parse(localStorage.getItem("cartitems")) || [];
val.addEventListener("click", () => {
    document.getElementById("radio_cod").checked = false;
    document.getElementById("radio").checked = true;

    let btn = document.getElementById("payBtn");
    btn.innerText = "Pay " + amount;
    btn.style.display = "block";

});

cod.addEventListener("click", () => {
    document.getElementById("radio").checked = false;
    document.getElementById("radio_cod").checked = true;
    let btn = document.getElementById("payBtn");
    btn.style.display = "none";
});

document.getElementById("Carttotal").innerText = amount;
document.getElementById("finalTotal").innerText = amount;

document.getElementById("payBtn").addEventListener("click", () => {
    document.getElementById("popup_box").style.display = "block";
    let random = Math.floor(1000 + Math.random() * 9000);
    timer(random);
    payment(random);
});

document.getElementById("pay").innerText = "PAY " + amount;

document.getElementById("ccc").addEventListener("click", () => {
    document.getElementById("popup_box").style.display = "none";
});

function timer(random) {

    var sec = 3;
    var timer = setInterval(function () {
        // document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
        document.getElementById("generate").innerText = "Generating Your UPI PIN in " + sec + " " + "seconds";
        sec--;
        if (sec < 0) {
            document.getElementById("generate").innerText = "Your UPI PIN is:- " + random;
            clearInterval(timer);
        }
    }, 1000);

}
function redirect(path) {
    var sec = 3;
    var timer = setInterval(function () {
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            location.href = path;
        }
    }, 1000);

}


function payment(random) {
    document.getElementById("pay").addEventListener("click", function () {
        let div = document.querySelector(".phonePay");
        let upi = document.getElementById("upiId");
        if (upi.value === "") {
            alert("enter upi");
        }
        else {
            div.innerHTML = "";
            let img = document.createElement("img");
            img.setAttribute("src", "https://gifimage.net/wp-content/uploads/2018/04/processing-gif-transparent-10.gif");

            let h3 = document.createElement("h2");
            let p = document.createElement("p");
            h3.innerText = "Processing..."
            h3.style.color = "orange";
            div.append(img, h3, p);

            let promise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (upi.value == random) {
                        resolve("success");
                    }
                    else {
                        reject("failed");
                    }
                }, 1500);
            });

            promise.then(function (res) {
                img.setAttribute("src", "https://www.btec.ae/wp-content/uploads/2021/10/success.gif");
                h3.innerText = "Payment Successful";
                h3.style.color = "green";
                img.style.marginTop = "10px";
                p.innerText = "Processing your order...";
                redirect("../order_placed.html");
                localStorage.setItem("orderHistory", JSON.stringify(cart));
                localStorage.removeItem("cartitems");
            }).catch(function (res) {
                img.setAttribute("src", "https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif");
                h3.innerText = "Payment Failed";
                h3.style.color = "red";
                p.innerText = "redirecting...";
                redirect("../cart&checkout/checkout.html");
            });
        }

    });
}