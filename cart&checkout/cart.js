import navbar from "../scripts/navbar.js";
import { footer } from "../scripts/footer.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

let cart = JSON.parse(localStorage.getItem("cartitems")) || [];

if (cart.length === 0) {
  let div = document.createElement("div");
  div.style.display = "grid";
  div.style.justifyContent = "center"
  let h3 = document.createElement("img");
  h3.src = "https://www.netmeds.com/msassets/images/emptycart.svg";
  h3.style.width = "300px";
  h3.style.width = "200px";
  h3.style.margin = "auto";

  let h2 = document.createElement("h2");
  h2.innerText = "Your cart is empty";
  h2.style.verticalAlign = "middle";
  h2.style.color = "rgb(6, 191, 191)";
  h2.style.marginTop = "24px";
  div.append(h3, h2);
  document.querySelector(".productsDiv").append(div);
  let ss = document.querySelector(".cartRight");
  ss.style.display = "none";
}
else {
  displayProduct();
}

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

    let cartPlus = document.createElement("button");
    cartPlus.id = "cartPlus";
    cartPlus.innerText = "+";


    let cartMinus = document.createElement("button");
    cartMinus.id = "cartMinus";
    cartMinus.innerText = "-";


    let cartQuantity = document.createElement("button");
    cartQuantity.id = "cartQuantity";
    cartQuantity.innerText = "QTY: " + element.quantity;

    let endSec = document.createElement("div");
    endSec.setAttribute("class", "endSec");

    let delevery = document.createElement("p");
    delevery.id = "delevery";
    delevery.innerText = "Delivery between OCTOBER 17-OCTOBER 18";

    let cartOther = document.createElement("div");
    cartOther.setAttribute("class", "cartOther");

    let cartLine = document.createElement("div");
    cartLine.setAttribute("id", "cartLine");

    let remove = document.createElement("button");
    remove.id = "remove";
    remove.innerText = "REMOVE";
    remove.addEventListener("click", () => {
      removeFromStorage(indx);
    });

    let btn = document.createElement("button");
    btn.innerText = "SAVE FOR LATER";

    cartOther.append(cartLine, remove, btn);
    endSec.append(delevery, cartOther);

    cartQuan.append(cartPlus, cartMinus, cartQuantity);
    middleSec.append(cartPrice, cartQuan);
    subDiv.append(cartPname, cartComp, middleSec, endSec);
    topSec.append(img, subDiv);
    let hr = document.createElement("hr");
    hr.id = "hr";
    productCard.append(topSec, hr);

    document.querySelector(".productsDiv").append(productCard);
    checkQuan(element, cartPlus, cartMinus, cartQuantity, indx, element.quantity);
  });
}

function removeFromStorage(indx) {
  cart.splice(indx, 1);
  localStorage.setItem("cartitems", JSON.stringify(cart));
  displayProduct();
}

function checkQuan(ele, cartPlus, cartMinus, cartQuantity, indx, quantity) {

  plus(ele, cartPlus, indx, quantity, cartQuantity);
  minus(ele, cartMinus, indx, quantity, cartQuantity);

}
function plus(ele, plus, indx, quantity, cartQuantity) {
  plus.addEventListener("click", () => {
    let quaaa = getQuantity(indx);
    if (quaaa === 5) {
      alert("you can't add more than 5 products");
    }
    else {
      quaaa++;
      updateData(indx, quaaa, ele);
      cartQuantity.innerText = "QTY: " + quaaa;
      updatePrice();
    }
  });
}


function minus(ele, minus, indx, quantity, cartQuantity) {
  minus.addEventListener("click", () => {
    let quaaa = getQuantity(indx);
    console.log(quaaa);
    if (quaaa === 1) {
      removeFromStorage(indx);
      location.reload();
    }
    else {
      quaaa--;
      updateData(indx, quaaa, ele);
      cartQuantity.innerText = "QTY: " + quaaa;
      updatePrice();
    }
  });
}

function updateData(indx, quan, ele) {
  ele.quantity = quan;
  localStorage.setItem("cartitems", JSON.stringify(cart));
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
}
updatePrice();
function promoClick(id1, id2, percentage) {
  document.getElementById(id2).addEventListener("click", () => {
    let promo = document.getElementById(id2).innerText;
    document.getElementById("abc").value = promo;

    let price = document.getElementById("Carttotal").innerText;
    let tt = price.replace('Rs. ', '')
    let temp = tt * percentage / 100;
    document.getElementById("cartDis").innerText = "-Rs." + temp.toFixed(2);
    document.getElementById("saving").innerText = "TOTAL SAVINGS RS. " + temp.toFixed(2);
    console.log(calculateTotal());
    document.getElementById("finalTotal").innerText = calculateTotal() - temp.toFixed(2);
    document.getElementById("grandTotal").innerText = calculateTotal() - temp.toFixed(2);
  });
}

promoClick("dot", "promoo1", 25);
document.getElementById("proceed").addEventListener("click", () => {
  let status = localStorage.getItem("login_status");
  if (status === "true") {
    location.href = "../cart&checkout/checkout.html";
  }
  else {
    alert("login to continue..")
    location.href = "../login_signup.html";
  }
});


function getQuantity(indx) {
  return cart[indx].quantity;
}