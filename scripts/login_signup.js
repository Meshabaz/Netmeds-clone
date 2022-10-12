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

            document.getElementById("local_num").innerText = localStorage.getItem("user_number");

            document.getElementById("change_button").addEventListener("click" , ()=>{
                window.location.reload();
            });

            let i = 60;
            let test = setInterval(()=>{
                if(i == 0){
                    clearInterval(test);
                    document.getElementById("waiting_otp").innerHTML = `<P>RESEND OTP</P>`;
                    document.querySelector("#waiting_otp > p").style.color = "red";
                    document.getElementById("waiting_otp").style.cursor = "pointer";
                    document.querySelector("#waiting_otp").addEventListener('click' , ()=>{
                        check();
                    });
                } else {
                    document.getElementById("otp_time").innerText = `${i}`;
                    i--;
                }
                
            },1000);

            test;
            document.getElementById("loading_container").style.display = "none";
            document.getElementById("cheking").style.display = "block";


            document.getElementById("verify").addEventListener("click" , ()=>{
            let email = document.getElementById("email").value;
            let fname = document.getElementById("fname").value;
            let lname = document.getElementById("lname").value;

            if(email.length < 5 || fname.length < 1 || lname.length < 1) {
                alert("Please Enter Correct Details");
                return;
            }

            localStorage.setItem("user_fname" , fname);
            localStorage.setItem("user_lname" , lname);
            localStorage.setItem("user_email" , email);

            let otp = document.getElementById("input_one").value +  document.getElementById("input_two").value  +  document.getElementById("input_three").value +  document.getElementById("input_four").value +  document.getElementById("input_five").value +  document.getElementById("input_six").value 


            if(otp == "123456") {
                document.getElementById("cheking").style.display = "none";
                document.getElementById("verified").style.display = "block";
                setTimeout(()=>{
                    window.location.href = "./index.html";
                },2000);
            } else {
                document.getElementById("cheking").style.display = "none";
                document.getElementById("wrong").style.display = "block";

                // document.getElementById("verified").style.display = "block";
                setTimeout(()=>{
                    document.getElementById("cheking").style.display = "block";
                    // window.location.href = "./index.html";
                },800);
            }

            
            });
        },800);


    }
}

function check(){
    let i = 60;
    let test = setInterval(()=>{
        if(i == 0){
            clearInterval(test);
            document.getElementById("waiting_otp").innerHTML = `<P>RESEND OTP</P>`;
            document.querySelector("#waiting_otp > p").style.color = "red";
            document.getElementById("waiting_otp").style.cursor = "pointer";
            document.querySelector("#waiting_otp").addEventListener('click' , ()=>{
                
            });
        } else {
            document.getElementById("waiting_otp").innerHTML = `<span> Waiting for OTP... </span><span id="otp_time">${i}</span> Sec</p>`;
            i--;
        }
        
    },1000);
}