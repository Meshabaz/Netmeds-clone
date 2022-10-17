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
                p.innerText = "redirecting to home page";
                redirect("../index.html");
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