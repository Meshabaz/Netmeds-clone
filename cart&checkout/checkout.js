import navbar from "../scripts/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let cart = JSON.parse(localStorage.getItem("cartitems")) || [];
let address = JSON.parse(localStorage.getItem("address")) || [];

displayProduct();
function displayProduct() {
    document.querySelector(".productsDiv").innerHTML = "";
    cart.forEach((element, indx) => {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "productCard");

        let topSec = document.createElement("div");
        topSec.setAttribute("class", "topsec");

        let img = document.createElement("img");
        img.id = "cartImg";
        img.src = element.url_1;

        let subDiv = document.createElement("div");
        subDiv.setAttribute("class", "subDiv");

        let cartPname = document.createElement("p");
        cartPname.id = "cartPname";
        cartPname.innerText = element.prod_name;

        let cartComp = document.createElement("p");
        cartComp.id = "cartComp";
        cartComp.innerText = element.mkf;

        let middleSec = document.createElement("div");
        middleSec.setAttribute("class", "middleSec");

        let cartCut = document.createElement("span");
        cartCut.innerText = "Rs." + element.best_price - 50;
        cartCut.id = "cartCut";

        let cartPrice = document.createElement("p");
        cartPrice.id = "cartPrice";
        cartPrice.innerText = "Rs." + element.best_price;

        let cartQuan = document.createElement("div");
        cartQuan.setAttribute("class", "cartQuan");

        let cartQuantity = document.createElement("button");
        cartQuantity.id = "cartQuantity";
        cartQuantity.innerText = "QTY: " + element.quantity;

        let endSec = document.createElement("div");
        endSec.setAttribute("class", "endSec");

        let delevery = document.createElement("p");
        delevery.id = "delevery";
        delevery.innerText = "Delivery between OCTOBER 17-OCTOBER 18";

        endSec.append(delevery);

        cartQuan.append(cartQuantity);
        middleSec.append(cartPrice, cartQuan);
        subDiv.append(cartPname, cartComp, middleSec, endSec);
        topSec.append(img, subDiv);
        productCard.append(topSec);

        document.querySelector(".productsDiv").append(productCard);
    });
}

function calculateTotal() {
    let total = 0;
    cart.forEach(ele => {
        total += ele.best_price * ele.quantity;
    })

    return total.toFixed(2);
}


function updatePrice() {
    document.getElementById("Carttotal").innerText = "Rs. " + calculateTotal();
    document.getElementById("finalTotal").innerText = "Rs. " + calculateTotal();
    document.getElementById("grandTotal").innerText = "Rs. " + calculateTotal();
    document.getElementById("proceed").innerText = "PAY " + calculateTotal();
}
updatePrice();

document.getElementById("selectAd").addEventListener("click", () => {
    let div = document.getElementById("popup_box");
    div.style.display = "block";
});

document.getElementById("cancel").addEventListener("click", () => {
    let div = document.getElementById("popup_box");
    div.style.display = "none";
});
document.getElementById("add").addEventListener("click", () => {
    event.preventDefault();
    let form = document.getElementById("form");

    let pincode = form.pincode.value;
    let city = form.city.value;
    let state = form.state.value;
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let landmark = form.landmark.value;
    let address = form.address.value;
    let phone = form.phone.value;

    if (pincode === "" && city === "" && state === "" && firstName === "" && address === "" && phone === "") {
        alert("all fields are requeried...")
    }
    else {
        let arr = JSON.parse(localStorage.getItem("address")) || [];

        let obj = {
            pin: pincode,
            city: city,
            state: state,
            firstName: firstName,
            lastName: lastName,
            landmark: landmark,
            address: address,
            phone: phone
        }
        arr.push(obj);
        localStorage.setItem("address", JSON.stringify(arr));
        let div = document.getElementById("popup_box");
        div.style.display = "none";
        location.reload();
    }
});
add_Address();
function add_Address() {
    address.forEach(ele => {
        let div = document.createElement("div");
        div.id = "allAd";

        let h3 = document.createElement("h3");
        h3.id = "userName";
        h3.innerText = ele.firstName + " " + ele.lastName;

        let add = document.createElement("p");
        add.id = "userAddress";
        add.innerText = ele.address;

        let city = document.createElement("p");
        city.id = "usercity";
        city.innerText = ele.state + " , " + ele.city + " " + ele.pin;

        let mob = document.createElement("p");
        mob.id = "userMobile";
        mob.innerText = ele.phone;

        let hr = document.createElement("hr");
        div.append(h3, add, city, mob, hr);

        document.querySelector(".address").append(div);
    });
}

document.getElementById("proceed").addEventListener("click", () => {
    if (address.length === 0) {
        alert("please add address first");
    }
    else {
        localStorage.setItem("amount", calculateTotal());
        location.href = "../cart&checkout/payment.html";
    }
});