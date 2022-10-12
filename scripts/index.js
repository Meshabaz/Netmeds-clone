import navbar from "./navbar.js";

console.log(navbar);
document.getElementById("navbar").innerHTML = navbar();

const url = "https://mr-raaz.github.io/NetmedsClone_data/landingPage_data.json";

getdata(url);

async function getdata(url) {
    let res = await fetch(url);
    let data = await res.json();

    showbrands(data.Brand_days);
}

function showbrands(data) {
    console.log(data);

    data.forEach((e) => {

        const div = document.createElement("div");
        div.className = "slide";
        const image = document.createElement("img");
        image.src = e.url_one;
        // image.cla
        const name = document.createElement("p");
        name.innerText = e.prod_name;
        const price = document.createElement("p");
        price.innerText = `₹${e.mrp}`;
        const discount = document.createElement("p");
        discount.innerText = e.discount;
        const addtocartbtn = document.createElement("button");
        addtocartbtn.innerHTML = "ADD TO CART";


        div.append(image, name, price, discount, addtocartbtn);
        document.querySelector(".brands").append(div);
    })
}

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
    alert("opening ?? OPEN BTN");
    document.querySelector(".navbar").style.left = 0;
    document.querySelector(".navbar").style.transition = "1s";
    document.querySelector("#checkbtnheader").style.display = "none";
    document.querySelector("#closebtnheader").style.display = "block";
})
document.querySelector("#closebtnheader").addEventListener('click', () => {
    alert("closing ?? CLOSE BTN");
    document.querySelector(".navbar").style.left = "-100%";
    document.querySelector(".navbar").style.transition = "1s";
    document.querySelector("#checkbtnheader").style.display = "block";
    document.querySelector("#closebtnheader").style.display = "none";
})

// // //


// // //
document.querySelector("#checkbtnnavigatons").addEventListener('click', () => {
    alert("opening nav2 ?? OPEN BTN");
    document.querySelector(".mid_ul").style.left = 0;
    document.querySelector(".mid_ul").style.transition = "1s";
    document.querySelector("#checkbtnnavigatons").style.display = "none";
    document.querySelector("#closebtnnavigatons").style.display = "block";
})

document.querySelector("#closebtnnavigatons").addEventListener('click', () => {
    alert("closing nav2 ?? Close BTN");
    document.querySelector(".mid_ul").style.left = "-100%";
    document.querySelector(".mid_ul").style.transition = "1s";
    document.querySelector("#closebtnnavigatons").style.display = "none";
    document.querySelector("#checkbtnnavigatons").style.display = "block";
})


// // //

document.querySelector("#checkbtn").addEventListener('click', () => {
    alert("opening");
    document.querySelector(".error").style.left = 0;
    document.querySelector(".error").style.transition = "0.5s";
    document.querySelector("#checkbtn").style.display = "none";
    document.querySelector("#closebtn").style.display = "block";
})

document.querySelector("#closebtn").addEventListener('click', () => {
    alert("closing");
    document.querySelector(".error").style.left = "-100%";
    document.querySelector(".error").style.transition = "1s";
    document.querySelector("#checkbtn").style.display = "block";
    document.querySelector("#closebtn").style.display = "none";
})




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