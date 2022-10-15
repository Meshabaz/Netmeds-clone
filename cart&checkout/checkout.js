var mon = JSON.parse(localStorage.getItem("mobile"));
if (mon !== null) {
  document.querySelector("#don").innerText = mon;
}
var cart = JSON.parse(localStorage.getItem("cartitems")) || [];
displayCart(cart);
function displayCart(cart) {
    var price1 = 0;
    var discount = 0;
    document.querySelector("#cartitems").innerHTML = "";
    document.querySelector("#MRP").innerText = "Rs." + 0;
    document.querySelector("#netmeddiscount").innerText = "₹" + 0;
    document.querySelector("#netmed").innerText = "Rs." + 0;
    document.querySelector("#total").innerText = "Rs." + 0;
    document.querySelector("#total1").innerText = "Rs." + 0;
    var uniqueCartItems = [];
    var itemsQuantity = [];
    
    cart.forEach(function (ele) {
        var flag = false;
        for (var i = 0; i < uniqueCartItems.length; i++) {
            var obj = uniqueCartItems[i];
            if (
                obj.url_1 === ele.url_1 &&
                obj.prod_name === ele.prod_name &&
                obj.best_price === ele.best_price &&
                obj.mrp === ele.mrp &&
                obj.mkf === ele.mkf
                ) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                itemsQuantity[i] = itemsQuantity[i] + 1;
            } else {
                uniqueCartItems.push(ele);
                itemsQuantity.push(1);
            }
        });
        
    // document.querySelector("#pdone").addEventListener("click", func);
    // function func() {
    //     alert("Congratulations payment done. Your product will get deliever to the mentioned address soon.");
    //     window.location.href = "landing.html";
    // }
     uniqueCartItems.forEach(function (elem, index) {
        var card = document.createElement("div");
        card.setAttribute("class", "boxCard");
        card.style.display = "flex";

    var card1 = document.createElement("div");
    card1.setAttribute("class", "boxCard1");
    var image = document.createElement("img");
    image.setAttribute("src", elem.url_1);
    card1.append(image);
    var card2 = document.createElement("div");
    card2.setAttribute("class", "boxCard2");
    var details = document.createElement("p"); 
    details.innerText = elem.prod_name;
    var details1 = document.createElement("p");
    details1.innerText = elem.mkf;
    var card3 = document.createElement("div");
    card3.setAttribute("class", "boxCard3");
    card3.style.display = "flex";
    var card31 = document.createElement("div");
    card31.setAttribute("class", "boxCard31");
    var price = document.createElement("span");
    price.innerText = "Rs." + elem.best_price;
    var Sprice = document.createElement("span");
    Sprice.innerText = "Rs." + elem.mrp;
    price1 = price1 + elem.mrp * itemsQuantity[index];
    document.querySelector("#MRP").innerText = "Rs." + price1;
    if (elem.mrp) {
        var discounted = elem.mrp - elem.best_price;
        discount = discount + itemsQuantity[index] * discounted;
    }
    // 
    
    document.querySelector("#pdone").addEventListener("click", func);
    function func() {
      window.location.href="pay.html";
    }
    let paydetails=JSON.parse(localStorage.getItem("pay")) || [];
    let x=document.querySelector("#MRP").innerText = "Rs." + price1;
    let a=document.querySelector("#netmeddiscount").innerText = "-Rs." + discount;
    let b=document.querySelector("#netmed").innerText = "Rs." + discount;
    let c=document.querySelector("#total").innerText = "Rs." + (price1 - discount);
    let d=document.querySelector("#total1").innerText = "Rs." + (price1 - discount);
    function Payment(){
        this.x=x;
      this.a=a;
      this.b=b;
      this.c=c;
      this.d=d;
    }
    let paydet=new Payment(x,a,b,c,d);
    paydetails.push(paydet);
    localStorage.setItem("pay", JSON.stringify(paydetails));
    var Delievery = document.createElement("p");
    Delievery.innerText = "Delivery between Oct-9 6PM - Oct-14 10PM";
    card31.append(price, Sprice, Delievery);
    var card32 = document.createElement("div");
    card32.setAttribute("class", "boxCard32");
    var quantityValue = document.createElement("span");
    quantityValue.innerText = " QTY:" + itemsQuantity[index];
    var card321 = document.createElement("div");
    card321.setAttribute("class", "boxCard321");
    card321.style.display = "flex";
    var hr = document.createElement("hr");
    hr.setAttribute("class", "hr");
    hr.style.color = "blue";
    card32.append(quantityValue);
    card3.append(card31, card32);
    card2.append(details, details1, card3, hr);
    card.append(card1, card2);
    document.querySelector("#cartitems").append(card);
  });
}
function saved(){
     event.preventDefault();
     let pin=document.getElementById("pin").value;
     let city=document.getElementById("city").value;
     let state=document.getElementById("state").value;
     let first=document.getElementById("first").value;
     let last=document.getElementById("last").value;
     let address=document.getElementById("address").value;
     let landmark=document.getElementById("landmark").value;
     let num=document.getElementById("num").value;
     let details=JSON.parse(localStorage.getItem("users")) || [];
     function Address(p,c,s,f,l,a,lm,n){
        this.pin=p;
        this.city=c;
        this.state=s;
        this.first=f;
        this.last=l;
        this.address=a;
        this.landmark=lm;
        this.num=n;
    }
    let det=new Address(pin, city, state, first, last, address, landmark, num);
    details.push(det);
    localStorage.setItem("users", JSON.stringify(details));
}
let details=JSON.parse(localStorage.getItem("users")) || [];
console.log(details);
dis(details);
function dis(details){
    details.map((elem)=>{
        let first=document.createElement("h3");
        first=elem.first;
        let last=document.createElement("h3");
        last=" " + elem.last;
        let address=document.createElement("p");
        address=elem.address;
        let landmark=document.createElement("p");
        landmark=elem.landmark;
        let city=document.createElement("p");
        city=elem.city;
        let pin=document.createElement("p");
        pin=" -"+elem.pin+",";
        let state=document.createElement("p");
        state=" "+elem.state;
        let num=document.createElement("p");
        num="+91- "+elem.num;
        let box=document.createElement("div");
        box.append(first, last);
        let box1=document.createElement("div");
        box1.append(city, pin, state);
        let box2=document.createElement("div");
        box2.append(address, landmark, box1, num);
        let box3=document.createElement("div");
        box3.append(box, box2);
        box3.style.marginLeft="10px";
        let rem=document.createElement("h4");
        rem.innerText="remove";
        rem.style.cursor="pointer";
        rem.style.fontFamily="sans-serif";
        rem.style.color="red";
        rem.style.scrollMarginTop="-10px";
        rem.addEventListener("click", function(){
            removeAd(elem);
        })
        let box4=document.createElement("div");
        box4.append(box3, rem);
        box4.style.display="flex";
        box4.style.flexDirection="row";
        box4.style.justifyContent="space-between";
        document.getElementById("delivery").append(box4);
    })
};
function removeAd(elem) {
    event.target.parentNode.remove();
    var newAd = [];
    details.forEach(function (ele) {
        if (
            ele.first !== elem.first||
            ele.last !== elem.last ||
            ele.address !== elem.address ||
            ele.landmark !== elem.landmark ||
            ele.city !== elem.city ||
            ele.pin !== elem.pin ||
            ele.state !== elem.state ||
            ele.num !== elem.num ){
                newAd.push(ele);
            }
        });
        details = newAd;
        localStorage.setItem("users", JSON.stringify(details));
        displayCart(details);
    }