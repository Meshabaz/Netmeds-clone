import navbar from "./navbar.js";

document.getElementById("navbar").innerHTML = navbar();

// login _signup js code

document.getElementById("use_otp").addEventListener("click" , validate);

function validate() {
    let number = document.getElementById("mobile_number").value;
    
    localStorage.setItem("user_number" , number);

    if(number.length != 10) {
        alert("please enter correct number");
        return;
    } else {
        document.getElementById("right_first").style.display = "none";

        document.getElementById("loading").style.display = "block";

        setTimeout(()=>{
            document.getElementById("loading_container").style.display = "none";
            document.getElementById("cheking").style.display = "block";


            document.getElementById("verify").addEventListener("click" , ()=>{
                let email = document.getElementById("email").value;
            let fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;

            localStorage.setItem("user_fname" , fname);
            localStorage.setItem("user_lname" , lname);
            localStorage.setItem("user_email" , email);

            window.location.href = "./index.html";

            
            });
        },800);


    }
}