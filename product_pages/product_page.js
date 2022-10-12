    // <!--************4. Collaborators>> input product data here ***********  -->
    let page = "Covid Essentials";
    let productDataArray=[];
    let url = `https://mr-raaz.github.io/NetmedsClone_data/data.json`
    const getData = async function x(){
        let fetched = await fetch(url); 
        let data = await fetched.json()
        let i=0;
        data.products.map((ele)=>{
            if(ele.categories_1===page || ele.categories_2===page){
                productDataArray[i]=ele;
                i++;
            }
         });
        let sorted =[];
        productDataArray.forEach(function(ele,ind){
            sorted.push(ele);
        });
         display(productDataArray);
         document.getElementById("popular").addEventListener("click",()=>{
            popular(productDataArray);
         })
         document.getElementById("hightolow").addEventListener("click",()=>{
            hightolow(sorted);
         })
         document.getElementById("lowtohigh").addEventListener("click",()=>{
            lowtohigh(sorted);
         })
         document.getElementById("discount").addEventListener("click",()=>{
            discount(sorted);
         })
         document.getElementById("num").append(productDataArray.length);
         document.getElementById("totalcount").append(productDataArray.length);
        }
    getData();
    
//   console.log(productDataArray[0]);
    document.getElementById("num").append(productDataArray.length);
    
    // display(productDataArray);
    function display(productDataArray){
        document.getElementById("gridbox").innerText="";
        productDataArray.map((ele,ind,arr)=>{
        // <<<<<<<<<<<< New Element Creation >>>>>>>>>>>>>>>>>>>>
            // console.log(ele);
            let divmain = document.createElement("div");
            divmain.classList.add("maindiv");

            let divimg = document.createElement("div"); 
            divimg.classList.add("divimg");
            let discountdiv = document.createElement("div"); 
            discountdiv.className="discountdiv";
            let prodDiscount = document.createElement("p");
            prodDiscount.className="prodDiscount";
            let anchor = document.createElement("a")
            let image = document.createElement("img");

            let headdiv = document.createElement("div")
            headdiv.classList.add("headdiv");
            let h5 = document.createElement("h5");
            
            let categorydiv = document.createElement("div");
            categorydiv.className="categorydiv";
            let categorybtn1 = document.createElement("div");
            let categorybtn2 = document.createElement("div");
            categorybtn1.className="categorybtn"
            categorybtn2.className="categorybtn"

            let madybycompanydiv = document.createElement("div");
            madybycompanydiv.className="madybycompanydiv";
            let mkt_company_name = document.createElement("div");
            mkt_company_name.className="mkt_company_name";

            let divmrp = document.createElement("div");
            divmrp.classList.add("divmrp");
            let productmrp = document.createElement("p");
            productmrp.classList.add("productmrp");
            let productbestprice = document.createElement("p");
            productbestprice.classList.add("productbestprice");
            let spanBestPriceTitle = document.createElement("span");
            spanBestPriceTitle.classList.add("spanBestPriceTitle")
            let spanmrpTitle = document.createElement("span");
            spanmrpTitle.classList.add("spanmrpTitle")
            let spanBestPrice = document.createElement("span");
            spanBestPrice.classList.add("spanBestPrice")
            let spanmrp = document.createElement("span");
            spanmrp.classList.add("spanmrp")

            let divbtn = document.createElement("div");
            divbtn.classList.add("divbtn")
            let btn = document.createElement("button");
            let span1 = document.createElement("span");
            // let disc = document.createElement("div");
            // discdiv.classList.add("discdiv");
            // let spandisc = document.createElement("span")
            // spandisc.classList.add("spandiscount");
            
            // spandisc.innerText="14% off" //take value from array
            // disc.append(spandisc)

        // <<<<<<<<<<<< Object Input Values >>>>>>>>>>>>>>>>>>>>
            anchor.href="";
            // span2.innerHTML='<i class="fa-thin fa-plus"></i>'
            image.setAttribute("src",ele.url_1)
            h5.innerText = ele.prod_name;
            categorybtn1.innerText=ele.categories_1
            categorybtn2.innerText=ele.categories_2
            mkt_company_name.innerText=ele.mkf
            spanmrpTitle.innerText="MRP "
            spanmrp.innerText = " Rs."+ele.mrp;
            spanBestPriceTitle.innerText="Best price* "
            spanBestPrice.innerText = "  ₹"+ele.best_price;
            prodDiscount.innerText=ele.discount+" % OFF";
            span1.innerText="ADD TO CART"
        // <<<<<<<<<<<< Append >>>>>>>>>>>>>>>>>>>>
            discountdiv.append(prodDiscount);
            divimg.append(discountdiv,image);
            
            headdiv.append(h5)
            categorydiv.append(categorybtn1,categorybtn2)
            productbestprice.append(spanBestPriceTitle,spanBestPrice)
            productmrp.append(spanmrpTitle,spanmrp)
            divmrp.append(productbestprice,productmrp)
            btn.append(span1);
            divbtn.append(btn);
            madybycompanydiv.append(mkt_company_name);
            anchor.append(divimg,headdiv)
            divmain.append(anchor,categorydiv,madybycompanydiv,divmrp,divbtn)
            document.getElementById("gridbox").append(divmain);
            divimg.addEventListener("click",()=>{
                gotoDescriptionPage(arr,ind)
            })
            btn.addEventListener("click",function(){
                addtocart(arr,ind);
            })
        })
    }

    // Search sorting>>>>>>>>>>>>>>>
    document.getElementById("searchbtn").addEventListener("click",search);
        function search(){
            document.getElementById("num").innerText="";
            let searchItem = document.getElementById("search").value;
            let out = productDataArray.filter(function(ele){
                if(searchItem===""){
                    return 1;
                }else{
                    return ele.name===searchItem;
                }
            })
                display(out)
                totalproductonpage=out.length;
                document.getElementById("num").append(totalproductonpage);
        }
    
    // category sorting using checkbox>>>>>>>>>>>>>>>>>>>>>>
    document.getElementById("apple").addEventListener("click",select1);
    function select1(){
       document.getElementById("num").innerText="";
        let selected = document.getElementById("apple").value;
        console.log(selected)
        let out = productDataArray.filter(function(ele){
            if(selected===""){
                return 1;
            }else{
                return ele.name===selected; 
            } 
        })
        display(out)
        totalproductonpage=out.length;
        document.getElementById("num").append(totalproductonpage);
    }
   document.getElementById("pear").addEventListener("click",select2);
    function select2(){
        document.getElementById("num").innerText="";
        let selected = document.getElementById("pear").value;
        console.log(selected)
        let out = productDataArray.filter(function(ele){
            if(selected===""){
                return 1;
            }else{
                return ele.name===selected; 
            }
        })
            display(out)
            totalproductonpage=out.length;
            document.getElementById("num").append(totalproductonpage);
    }

// sorting>>>>>>>>>>>>>>>>>>>
    
    function popular(productDataArray){
        display(productDataArray);

        let popular = document.getElementById("popular")
        popular.style.border="1px solid #32aeb1"
        popular.style.color="#32aeb1"

        let hightolow  = document.getElementById("hightolow")
        hightolow .style.border="none"
        hightolow .style.color=""
        let lowtohigh = document.getElementById("lowtohigh")
        lowtohigh.style.border="none"
        lowtohigh.style.color=""
        let discount= document.getElementById("discount")
        discount.style.border="none"
        discount.style.color=""
    }
    function hightolow(sorted){
        sorted.sort(function(a,b){
            return b.best_price-a.best_price;
        })
        display(sorted);
        let hightolow = document.getElementById("hightolow")
        hightolow.style.border="1px solid #32aeb1"
        hightolow.style.color="#32aeb1"

        let popular = document.getElementById("popular")
        popular.style.border="none"
        popular.style.color=""
        let lowtohigh = document.getElementById("lowtohigh")
        lowtohigh.style.border="none"
        lowtohigh.style.color=""
        let discount= document.getElementById("discount")
        discount.style.border="none"
        discount.style.color=""
    }
   
    function lowtohigh(sorted){
        sorted.sort(function(a,b){
            return a.best_price-b.best_price;
        })
        display(sorted);
        let lowtohigh = document.getElementById("lowtohigh");
        lowtohigh.style.border="1px solid #32aeb1";
        lowtohigh.style.color="#32aeb1";

        let popular = document.getElementById("popular");
        popular.style.border="none";
        popular.style.color="";
        let hightolow = document.getElementById("hightolow");
        hightolow.style.border="none";
        hightolow.style.color="";
        let discount= document.getElementById("discount");
        discount.style.border="none";
        discount.style.color="";
    }

    function discount(sorted){
        sorted.sort(function(a,b){
            return b.discount-a.discount;
        })
        display(sorted);
        let discount= document.getElementById("discount");
        discount.style.border="1px solid #32aeb1";
        discount.style.color="#32aeb1";

        let lowtohigh = document.getElementById("lowtohigh");
        lowtohigh.style.border="none";
        lowtohigh.style.color="";
        let popular = document.getElementById("popular");
        popular.style.border="none";
        popular.style.color="";
        let hightolow = document.getElementById("hightolow");
        hightolow.style.border="none";
        hightolow.style.color="";
        

    }

    // **************************** go to description page ************************************************************************
    function gotoDescriptionPage(arr,ind){
        localStorage.setItem("productDescription",JSON.stringify(arr[ind]));
    }
    
    // total product on page count>>>>>>>>>>>>>>
    // document.getElementById("num").append(totalproductonpage);
    

    // <<<<<<<<<<<<<<<<<<<<<<<<<   local storage to add to cart      >>>>>>>>>>>>>>>>>>>>>>
    let cart = JSON.parse(localStorage.getItem("cartitems")) || [];
    function addtocart(arr, i){
        event.preventDefault();
        
        let prod = arr.filter(function(ele,ind){
            return ind===i;
        })
        // console.log(prod[0]);
        if(cart.some(cart => cart.id=== prod[0].id)){
            // alert("Item already in cart");
        } else{
            cart.push(prod[0]);
            addcart(arr,i);
            // alert("Item successfully added to cart")
            
        }
        localStorage.setItem("cartitems",JSON.stringify(cart)); 
        let addcartbutton = document.querySelectorAll(".divbtn")
        // let addcartdiv = document.querySelector(".divbtn")
        let index=-1;
        for(let j=0; j<changecartprodquant.length; j++){
            if(changecartprodquant[j].id===arr[i].id){
                index=j;
            }
        }
        let changedqty = changecartprodquant[index].productquantity;
        // console.log(index);
        changeAddtoCartbuttonOnclick(arr,i,addcartbutton, changedqty);
        // let returnedelement = [...addcartbutton].map((ele,ind)=>{
        //         return i;
        //     }
        // })
        // console.log(returnedelement);
    }

    function changeAddtoCartbuttonOnclick(arr,i,addcartbutton,changedqty){
        for(let j=0; j<addcartbutton.length;j++){
            if(j===i){
                // console.log(addcartbutton[i]);
                let change = addcartbutton[i];
                change.innerHTML="";
                let plus = document.createElement("button")
                let qtydiv = document.createElement("div")
                qtydiv.className="qtydiv"
                let minus = document.createElement("button")
                plus.innerText="+"
                minus.innerText="-"
                // styles>>>>>>>>>>>
                plus.style.width="40px"
                minus.style.width="40px"
                plus.style.height="40px"
                minus.style.height="40px"
                qtydiv.style.width="20%"
                qtydiv.innerText=changedqty
                qtydiv.style.fontWeight="bold"
                plus.style.backgroundColor="white"
                minus.style.backgroundColor="white"
                plus.style.color="black"
                minus.style.color="black"
                plus.style.border="1px solid grey"
                minus.style.border="1px solid grey"
                plus.style.fontSize="20px"
                plus.style.fontWeight="1"
                minus.style.fontSize="20px"
                minus.style.fontWeight="1"
                plus.style.borderRadius="50%"
                minus.style.borderRadius="50%"

                change.append(plus,qtydiv,minus);

                plus.addEventListener("click",()=>{
                    plusqty(j,qtydiv,arr);
                })
                minus.addEventListener("click",()=>{
                    minusqty(j,qtydiv,arr,addcartbutton,i);
                })
                break;
            }
        }
    }

    let changecartprodquant = JSON.parse(localStorage.getItem("presentquantity")) || [];
    function plusqty(j,qtydiv,arr){
        qtydiv.innerText="";
        let index=-1;
        for(let i=0; i<changecartprodquant.length; i++){
            if(changecartprodquant[i].id===arr[j].id){
                index=i;
            }
        }
        let changedqty = changecartprodquant[index].productquantity;
        console.log(changedqty);
        changedqty++;
        if(changedqty<=5){
            changecartprodquant[index].productquantity = changedqty;
            localStorage.setItem("presentquantity",JSON.stringify(changecartprodquant));
        }
        qtydiv.innerText=changecartprodquant[index].productquantity;
        console.log(index);
    }

    function minusqty(j,qtydiv,arr,addcartbutton,i){
        qtydiv.innerText="";
        let index=-1;
        for(let i=0; i<changecartprodquant.length; i++){
            if(changecartprodquant[i].id===arr[j].id){
                index=i;
            }
        }
        let changedqty = changecartprodquant[index].productquantity;
        changedqty--;
        if(changedqty>=1){
            changecartprodquant[index].productquantity = changedqty;
            localStorage.setItem("presentquantity",JSON.stringify(changecartprodquant));
        }
        // else if(changedqty==0){
        //     addcartbutton[i].innerHTML=""
        //     console.log(addcartbutton[i]);
        //     let btn = document.createElement("button");
        //     let span1 = document.createElement("span");
        //     span1.innerText="ADD TO CART"
        //     btn.append(span1);
        //     addcartbutton[i].append(btn)
        //     changecartprodquant.splice(index,1);
        //     cart.splice(index,1)
        //     localStorage.setItem("cartitems",JSON.stringify(cart)); 
        //     localStorage.setItem("presentquantity",JSON.stringify(changecartprodquant));
        //     btn.addEventListener("click",function(){
        //         addtocart(arr,ind);
        //     })
        // }
        qtydiv.innerText=changecartprodquant[index].productquantity;
        console.log(index);
    }

    let cartprodquant = JSON.parse(localStorage.getItem("presentquantity")) || [];
    let count=0;
    function addcart(arr, ind){
        event.preventDefault();
        let prodquantobj = {
            id: arr[ind].id,
            productquantity:1
        }
        console.log(prodquantobj);
        let p = cartprodquant.push(prodquantobj);
        localStorage.setItem("presentquantity",JSON.stringify(cartprodquant));
    }
