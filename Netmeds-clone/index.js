import navbar from "./scripts/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
console.log(navbar);

import { footer } from "./scripts/footer.js";
document.querySelector('.footer').innerHTML = footer();


const url = 'https://mr-raaz.github.io/NetmedsClone_data/landingPage_data.json';
// https://mr-raaz.github.io/NetmedsClone_data/landingPage_data.json
getdata(url);

async function getdata(url) {
    let res = await fetch(url);
    let data = await res.json();
    showlimited_time(data.Limited_time_deals);
    showbrands(data.Brand_days);
    console.log(data.Brand_days);
}

function showbrands(data) {
    console.log(data);

    data.forEach((e) => {

        const div = document.createElement("div");
        div.className = "slide";
        const image = document.createElement("img");
        image.src = e.url_1;
        image.addEventListener('click', () => {
            select(e);
            // console.log("send: ", e);
        })
        // image.cla
        const name = document.createElement("h3");
        name.innerText = e.prod_name;
        const price = document.createElement("p");
        price.innerText = `₹${e.mrp}`;
        const discount = document.createElement("p");
        discount.innerText = e.discount;
        discount.classList = "discount";
        const addtocartbtn = document.createElement("button");
        addtocartbtn.classList = "slidecart_btn";
        addtocartbtn.innerHTML = "ADD TO CART";
        addtocartbtn.addEventListener('click', () => {
            addtocart(e);
        })

        div.append(image, name, price, discount, addtocartbtn);
        document.querySelector(".brands").append(div);
    })
}


let cardContainers = [...document.querySelectorAll(".brands, .limited_time, .trending_container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
cardContainers.forEach((items, i) => {
    let containerDimensions = items.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtns[i].addEventListener("click", () => {
        items.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
        items.scrollLeft -= containerWidth + 200;
    });
});




function showlimited_time(data) {
    console.log(data);

    data.forEach((e) => {
        console.log(e);
        const div = document.createElement("div");
        div.className = "slide";
        const image = document.createElement("img");
        image.src = e.url_1;
        console.log(e.url_1);
        image.addEventListener('click', () => {
            select(e);
            // console.log("send: ", e);
        })
        // image.cla
        const name = document.createElement("h3");
        name.innerText = e.prod_name;
        const price = document.createElement("p");
        price.innerText = `₹${e.mrp}`;
        const discount = document.createElement("p");
        discount.innerText = e.discount;
        discount.classList = "discount";
        const addtocartbtn = document.createElement("button");
        addtocartbtn.classList = "slidecart_btn";
        addtocartbtn.innerHTML = "ADD TO CART";
        addtocartbtn.addEventListener('click', () => {
            addtocart(e);
        })

        div.append(image, name, price, discount, addtocartbtn);
        document.querySelector(".limited_time").append(div);
    })
}

// const countitemsaddedincart = 0;
// const c = localStorage.getItem("countcartitrms");
// console.log("itemsAdded:", cartArr.length);
// cartItemsCount = cartArr.length;
// console.log(cartArr);
const cartArr = JSON.parse(localStorage.getItem("cartitems")) || [];
const user_name = localStorage.getItem("user_fname");
const user_login_status = localStorage.getItem("login_status");
console.log(user_name, user_login_status);
function addtocart(e) {
    // alert("adding")
    console.log(e);
    if (user_login_status == 'true') {
        document.querySelector(".cart_counter").style.display = "block"
        cartArr.push(e);
        // localStorage.setItem("countcartitems", c)
        console.log(c);
        localStorage.setItem("cartitems", JSON.stringify(cartArr));
    }
    else {
        // alert("Please Login First!")
        document.querySelector(".bg_pop_login_status").style.display = "flex"
    }
}

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


// checkLoginStatus();

// function checkLoginStatus() {
//     return user_login_status;

//     // if (user_login_status === true) {
//     //     console.log("decl:", user_login_status);

//     // }
// }


// const url = "https://mr-raaz.github.io/NetmedsClone_data/landingPage_data.json";

// getdata(url);

// async function getdata(url) {
//     let res = await fetch(url);
//     let data = await res.json();

//     showbrands(data.Brand_days);
// }

// function showbrands(data) {
//     console.log(data);

//     data.forEach((e) => {

//         const div = document.createElement("div");
//         div.className = "slide";
//         const image = document.createElement("img");
//         image.src = e.url_one;
//         // image.cla
//         const name = document.createElement("p");
//         name.innerText = e.prod_name;
//         const price = document.createElement("p");
//         price.innerText = `₹${e.mrp}`;
//         const discount = document.createElement("p");
//         discount.innerText = e.discount;
//         const addtocartbtn = document.createElement("button");
//         addtocartbtn.innerHTML = "ADD TO CART";


//         div.append(image, name, price, discount, addtocartbtn);
//         document.querySelector(".brands").append(div);
//     })
// }

// const trendingcontainer = [...document.querySelectorAll(".trending_container")];
// const nxtbtn = [...document.querySelectorAll('.nxt_btn')];
// const prebtn = [...document.querySelectorAll('.pre_btn')];
// console.log('len', trendingcontainer.length);
// trendingcontainer.forEach((e, i) => {
//     let conatinerDimensions = e.getBoundingClientRect();
//     let containerWidth = conatinerDimensions.width;

//     nxtbtn[i] = addEventListener('click', () => {
//         e.scrollLeft += containerWidth;
//         console.log(i);

//     })
//     prebtn[i] = addEventListener('click', () => {
//         console.log(i);
//         e.scrollLeft -= containerWidth;
//     })
// })
//  // //
document.querySelector("#checkbtnheader").addEventListener('click', () => {
    // alert("opening ?? OPEN BTN");
    document.querySelector(".header_rigth_ul").style.right = 0;
    document.querySelector(".header_rigth_ul").style.transition = "1s";
    document.querySelector("#checkbtnheader").style.display = "none";
    document.querySelector("#closebtnheader").style.display = "block";
})
document.querySelector("#closebtnheader").addEventListener('click', () => {
    // alert("closing ?? CLOSE BTN");
    document.querySelector(".header_rigth_ul").style.right = "-100%";
    document.querySelector(".header_rigth_ul").style.transition = "1s";
    document.querySelector("#checkbtnheader").style.display = "block";
    document.querySelector("#closebtnheader").style.display = "none";
})

// // //


// // // //
// document.querySelector("#checkbtnnavigatons").addEventListener('click', () => {
//     // alert("opening nav2 ?? OPEN BTN");
//     document.querySelector(".mid_ul").style.left = 0;
//     document.querySelector(".mid_ul").style.transition = "1s";
//     document.querySelector("#checkbtnnavigatons").style.display = "none";
//     document.querySelector("#closebtnnavigatons").style.display = "block";
// })

// document.querySelector("#closebtnnavigatons").addEventListener('click', () => {
//     // alert("closing nav2 ?? Close BTN");
//     document.querySelector(".mid_ul").style.left = "-100%";
//     document.querySelector(".mid_ul").style.transition = "1s";
//     document.querySelector("#closebtnnavigatons").style.display = "none";
//     document.querySelector("#checkbtnnavigatons").style.display = "block";
// })


// // // //

// document.querySelector("#checkbtn").addEventListener('click', () => {
//     // alert("opening");
//     document.querySelector(".error").style.left = 0;
//     document.querySelector(".error").style.transition = "10s";
//     document.querySelector("#checkbtn").style.display = "none";
//     document.querySelector("#closebtn").style.display = "block";
// })

// document.querySelector("#closebtn").addEventListener('click', () => {
//     // alert("closing");
//     document.querySelector(".error").style.left = "-100%";
//     document.querySelector(".error").style.transition = "1s";
//     document.querySelector("#checkbtn").style.display = "block";
//     document.querySelector("#closebtn").style.display = "none";
// })




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
    window.location.href = "/Product_Description_Page/productDetails.html";
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



// ON ENTER SHOW IN SEARCHPAGE FUNCTION
document.querySelector("#inp").addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        let searhTerm = document.querySelector("#inp").value;
        console.log(searhTerm);
        // alert("hello")
        localStorage.setItem("search", searhTerm);
        document.querySelector("#inp").value = ""
        window.location.href = "./SearchedPage/search.html";
    }
    // console.log("hhheelloooo");
})



// FOOTER SECTION JAVASCRIPT
const subscription_arr = [];
function subscribeToNetmedsClone() {
    event.preventDefault();
    // alert("got")
    let subs_obj = {
        email: document.querySelector(".Inp_Subscribe_Email").value
    }
    console.log(subs_obj);
    const check = subscription_arr.filter((e) => {
        return e.email == subs_obj.email;
    })
    console.log(check.length);

    if (check.length >= 1) {
        document.querySelector(".errorsubs").style.display = "flex"
        document.querySelector(".success").style.display = "none"
    } else {
        subscription_arr.push(subs_obj);
        localStorage.setItem("subscribed", subscription_arr);

        document.querySelector(".errorsubs").style.display = "none"
        document.querySelector(".success").style.display = "flex"
    }
    document.querySelector(".Inp_Subscribe_Email").value = ""
}
// FOOTER SECTION JAVASCRIPT







// document.querySelector("#inp").addEventListener("input", () => {
//     debouncefind();
// })

// const debouncefind = debounce(find, 500);

// function debounce(fun, delay) {
//     let timerId;
//     return function () {
//         if (timerId) clearTimeout(timerId);
//         timerId = setTimeout(function () {
//             fun();
//         }, delay);
//     };
// }

// async function find() {
//     const input = document.querySelector("#inp").value;
//     const url = await fetch(`http://localhost:3000/blogs?author_like=${input}`, {
//         method: `GET`
//     });
//     const data = await url.json();
//     appenddata(data);
//     console.log(data);
// }



// const mobile_nav = document.querySelector(".mobile_navbar_btn");
// const lastnavbar = document.querySelector(".lastnavigation");

// const togglelastnav = () => {
//     lastnavbar.classList.toggle("active")
// }

// mobile_nav.addEventListener('click', () => togglelastnav())

// getdataagain(url);

// async function getdataagain(url) {
//     let reslt = await fetch(url);
//     let dataa = await reslt.json();
//     // console.log("dataa", dataa.Limited_time_deals);
//     dop(dataa.Limited_time_deals)
// }

// // dop();
// function dop(data) {
//     console.log("deals", data);
//     data.map((e) => {
//         const div = document.createElement("div");
//         div.className = "swiper-slide";
//         const image = document.createElement("img");
//         image.src = e.url_one;
//         // image.cla
//         const name = document.createElement("p");
//         name.innerText = e.prod_name;
//         const price = document.createElement("p");
//         price.innerText = `₹${e.mrp}`;
//         const discount = document.createElement("p");
//         discount.innerText = e.discount;
//         const addtocartbtn = document.createElement("button");
//         addtocartbtn.innerHTML = "ADD TO CART";


//         div.append(image, name, price, discount, addtocartbtn);
//         document.querySelector("#deals").append(div);
//     })
// }