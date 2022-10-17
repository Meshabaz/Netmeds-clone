const user_name = localStorage.getItem("user_fname");
const user_login_status = localStorage.getItem("login_status");
console.log(user_name, user_login_status);
cart();
function cart() {

    if (user_login_status == 'true') {
        document.querySelector(".withoutlogin").style.display = "none";
        document.querySelector(".withlogin").innerText = `${user_name}`
        document.querySelector(".withlogin").style.display = "block"
        document.querySelector(".withlogin").addEventListener("click", () => {
            window.location.href = "profile/profile.html";
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


const cartArr = JSON.parse(localStorage.getItem("cartitems")) || [];
function addtocart(e) {
    console.log(e);
    if (user_login_status == 'true') {
        // alert("Hello");
        const c = cartArr.push(e);
        document.querySelector(".cart_counter").innerHTML = c;
        localStorage.setItem("countcartitems", c)
        console.log(c);
        localStorage.setItem("cartitems", json.stringify(cartArr));
    }
    else {
        alert("Please Login First!")
    }
}