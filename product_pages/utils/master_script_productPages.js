function productPages(pageName){
    
    let page = pageName;
  
    let categoryfilteredArray=[]
    let uniqueBrandFilterElementArrayWithCount = []
    let uniqueMkfFilterElementArrayWithCount = []
    let uniqueCategoriesFilterElementArrayWithCount = []
    let url = `https://mr-raaz.github.io/NetmedsClone_data/data.json`
    let preventFunctionExecution=false;
    const getData = async function x(){
        let fetched = await fetch(url); 
        let data = await fetched.json()
        let i=0;
        
        data.products.map((ele)=>{
            if(ele.categories_1===page || ele.categories_2===page){
                categoryfilteredArray[i]=ele;
                i++;
            }
         });

//  Filtering filterbox elements >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        // let uniqueBrandFilterElementArray = [...new Set(categoryfilteredArray.map(item => item.Brands))];
        //  console.log(unique);
// Brand Filter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
         let BrandElementCountObj = {};
         categoryfilteredArray.forEach(function (ele) { 
            BrandElementCountObj[ele.Brands] = (BrandElementCountObj[ele.Brands] || 0) + 1; 
        });
        
        for (let element in BrandElementCountObj) {
            let obj = {
                Brands:element,
                count:BrandElementCountObj[element]
            }
            uniqueBrandFilterElementArrayWithCount.push(obj);
        } 
        function compare( a, b) {
            if ( a.Brands < b.Brands ){
              return -1;
            }
            if ( a.Brands> b.Brands ){
              return 1;
            }
            return 0;
          }
          uniqueBrandFilterElementArrayWithCount.sort( compare );
// Manufacturers's Filter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        let MkfElementCountObj = {};
        categoryfilteredArray.forEach(function (ele) { 
            MkfElementCountObj[ele.mkf] = (MkfElementCountObj[ele.mkf] || 0) + 1; 
       });
       
       for (let element in MkfElementCountObj) {
           let obj = {
               mkf:element,
               count:MkfElementCountObj[element]
           }
           uniqueMkfFilterElementArrayWithCount.push(obj);
       } 
       function compareMkf( a, b) {
        if (a.mkf.replaceAll(/\s/g,'') < b.mkf.replaceAll(/\s/g,'')){
          return -1;
        }
        if (a.mkf.replaceAll(/\s/g,'')> b.mkf.replaceAll(/\s/g,'')){
          return 1;
        }
        return 0;
      }
      uniqueMkfFilterElementArrayWithCount.sort( compareMkf );
//    categories >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>....
        let CategoriesElementCountObj = {};
        categoryfilteredArray.forEach(function (ele) { 
            CategoriesElementCountObj[ele.categories_1] = (CategoriesElementCountObj[ele.categories_1] || 0) + 1; 
        });
        categoryfilteredArray.forEach(function (ele) { 
            CategoriesElementCountObj[ele.categories_2] = (CategoriesElementCountObj[ele.categories_2] || 0) + 1; 
        });
        for (let element in CategoriesElementCountObj) {
            let obj = {
                categories:element,
                count:CategoriesElementCountObj[element]
            }
            uniqueCategoriesFilterElementArrayWithCount.push(obj);
        }
        function compareCategories( a, b) {
            if (a.categories.replaceAll(/\s/g,'') < b.categories.replaceAll(/\s/g,'')){
              return -1;
            }
            if (a.categories.replaceAll(/\s/g,'')> b.categories.replaceAll(/\s/g,'')){
              return 1;
            }
            return 0;
          }
          uniqueCategoriesFilterElementArrayWithCount.sort( compareCategories );
        // function compare( a, b) {
        //     if ( a.categories < b.categories){
        //       return -1;
        //     }
        //     if ( a.categories> b.categories ){
        //       return 1;
        //     }
        //     return 0;
        //   }
        //   uniqueCategoriesFilterElementArrayWithCount.sort( compare );
     
//    let test = [...new Set(uniqueBrandFilterElementArrayWithCount.map(item => item.Brands))]

        if(preventFunctionExecution===false){
            brandFilterInFilterBox(uniqueBrandFilterElementArrayWithCount);
            manufacturerFilterInFilterBox(uniqueMkfFilterElementArrayWithCount);
            categoriesFilterInFilterBox(uniqueCategoriesFilterElementArrayWithCount);
            preventFunctionExecution=true;
        }
     
            
//  FIters >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
        let brandfilterSlectedArray=[];
        let FilterCheck=false;
        if(execute===true){
            for(let i=0; i<selectedBrandsForFilter.length; i++){
                for(let j=0; j<categoryfilteredArray.length; j++){
                    if(categoryfilteredArray[j].Brands===selectedBrandsForFilter[i]){
                        brandfilterSlectedArray.push(categoryfilteredArray[j])
                        FilterCheck=true
                    }
                }
            }
        }

        let FilterCheckMkf=false;
        if(executeMkf===true){
            for(let i=0; i<selectedmkfForFilter.length; i++){
                for(let j=0; j<categoryfilteredArray.length; j++){
                    if(categoryfilteredArray[j].mkf===selectedmkfForFilter[i]){
                        brandfilterSlectedArray.push(categoryfilteredArray[j])
                        FilterCheckMkf=true
                    }
                }
            }
        }

        let FilterCheckCategories=false;
        if(executeCategories===true){
            for(let i=0; i<selectedCategoriesForFilter.length; i++){
                for(let j=0; j<categoryfilteredArray.length; j++){
                    if(categoryfilteredArray[j].categories_1===selectedCategoriesForFilter[i] ||
                         categoryfilteredArray[j].categories_2===selectedCategoriesForFilter[i]){
                        brandfilterSlectedArray.push(categoryfilteredArray[j])
                        FilterCheckCategories=true
                    }
                }
            }
        }
       
// sorting >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
         let discountSortedArray =[];
         let productDataArray=[];
   
         if(FilterCheck===true || FilterCheckMkf===true || FilterCheckCategories===true){
             discountSortedArray = brandfilterSlectedArray .filter((ele)=>{
                return (ele.discount>=discountminVal && ele.discount<discountmaxVal)
            })
         }
        else{
            discountSortedArray = categoryfilteredArray .filter((ele)=>{
                return (ele.discount>=discountminVal && ele.discount<discountmaxVal)
            })
        }
       
        productDataArray = discountSortedArray.filter((ele)=>{
            return (ele.best_price>=minVal && ele.best_price<maxVal)
        })
        
// array copied for sorting the elements
        let sorted =[];
        productDataArray.forEach(function(ele,ind){
            sorted.push(ele);
        });
       
// Displaying the data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
         display(productDataArray);

//  sorting the products >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
         
//  Displaying number of items on page >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
         let arrlength = productDataArray.length
         let productOnPageCount = document.getElementById("num");
         productOnPageCount.innerText="";
         productOnPageCount.append(arrlength);
         let totalProductOnPage = document.getElementById("totalcount")
         totalProductOnPage.innerText="";
         totalProductOnPage.append(categoryfilteredArray.length);
        }
// function call >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    getData();

    function display(productDataArray){
        document.getElementById("gridbox").innerText="";
        productDataArray.map((ele,ind,arr)=>{
        // <<<<<<<<<<<< New Element Creation >>>>>>>>>>>>>>>>>>>>
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

        // <<<<<<<<<<<< Object Input Values >>>>>>>>>>>>>>>>>>>>
            anchor.href=`../Product_Description_Page/productDetails.html`;
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

// dislplay sorting elements in filter box>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    function brandFilterInFilterBox(uniqueBrandFilterElementArrayWithCount){
        let prodcategorybrands = document.querySelector(".prodcategory-brands");
        prodcategorybrands.innerHTML="";
        let filterbybrandDiv = document.getElementById("filterbybrand");
        filterbybrandDiv.innerHTML="";
        uniqueBrandFilterElementArrayWithCount.map((ele,ind,filterArr)=>{
            let prodcategorybrandsnamesDiv = document.createElement("div");
            prodcategorybrandsnamesDiv.className="prodcategory-brands-names";
            let input = document.createElement("input");
            input.type="checkbox";
            input.value=`${ele.Brands}`;
            input.className=`checkbox-brandfilter`;
            let lable = document.createElement("label");
            lable.innerHTML=`${ele.Brands} <span>(${ele.count})</span>`
            prodcategorybrandsnamesDiv.append(input,lable)
            prodcategorybrands.append(prodcategorybrandsnamesDiv)
            input.addEventListener("click",()=>{
                filterbrand(ele,ind,input.checked,input.value,input);
            })

            let brandbutton = document.createElement("button");
            brandbutton.className="fill-brand-name";
            brandbutton.innerText=`${ele.Brands}`
            filterbybrandDiv.append(brandbutton);
            brandbutton.addEventListener("click",()=>{
                input.checked=true;
                filterbrand(ele,ind,input.checked,input.value,input);
                // input.checked=false;
            })
        })
    }

    function manufacturerFilterInFilterBox(uniqueMkfFilterElementArrayWithCount){
        let prodcategorymkf = document.querySelector(".prodcategory-mkf");
        prodcategorymkf.innerHTML="";
        uniqueMkfFilterElementArrayWithCount.map((ele,ind,filterArr)=>{
            let prodcategorymkfnamesDiv = document.createElement("div");
            prodcategorymkfnamesDiv.className="prodcategory-mkf-names";
            let input = document.createElement("input");
            input.type="checkbox";
            input.value=`${ele.mkf}`;
            input.className=`checkbox-mkfFilter`;
            // input.checked=false;
            let lable = document.createElement("label");
            lable.innerHTML=`${ele.mkf} <span>(${ele.count})</span>`
            prodcategorymkfnamesDiv.append(input,lable)
            prodcategorymkf.append(prodcategorymkfnamesDiv)
            input.addEventListener("click",()=>{
                filtermkf(ele,ind,input.checked,input.value,input);
            })
        })
    }

    function categoriesFilterInFilterBox(uniqueCategoriesFilterElementArrayWithCount){
        let prodcategoryCategories = document.querySelector(".prodcategory-categories");
        prodcategoryCategories.innerHTML="";
        uniqueCategoriesFilterElementArrayWithCount.map((ele,ind,filterArr)=>{
            let prodcategoryCategoriesnamesDiv = document.createElement("div");
            prodcategoryCategoriesnamesDiv.className="prodcategory-categories-names";
            let input = document.createElement("input");
            input.type="checkbox";
            input.value=`${ele.categories}`;
            input.className=`checkbox-categoriesfilter`;
            // input.checked=false;
            let lable = document.createElement("label");
            lable.innerHTML=`${ele.categories} <span>(${ele.count})</span>`
            prodcategoryCategoriesnamesDiv.append(input,lable)
            prodcategoryCategories.append(prodcategoryCategoriesnamesDiv)
            input.addEventListener("click",()=>{
                filterCategories(ele,ind,input.checked,input.value,input);
            })
        })
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
        console.log(sorted);
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
        localStorage.setItem("productDescPage",JSON.stringify(arr[ind]));
    }
    
    // <<<<<<<<<<<<<<<<<<<<<<<<<   local storage to add to cart      >>>>>>>>>>>>>>>>>>>>>>
    let cart = JSON.parse(localStorage.getItem("cartitems")) || [];
    function addtocart(arr, i){
        event.preventDefault();
        
        let prod = arr.filter(function(ele,ind){
            return ind===i;
        })

        if(cart.some(cart => cart.id=== prod[0].id)){
            // alert("Item already in cart");
        } else{
            cart.push(prod[0]);
            addcart(arr,i);
            // alert("Item successfully added to cart")
        }

        localStorage.setItem("cartitems",JSON.stringify(cart)); 
        let addcartbutton = document.querySelectorAll(".divbtn")

        let index=-1;
        for(let j=0; j<changecartprodquant.length; j++){
            if(changecartprodquant[j].id===arr[i].id){
                index=j;
            }
        }

        let changedqty = changecartprodquant[index].productquantity;
        changeAddtoCartbuttonOnclick(arr,i,addcartbutton, changedqty);
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
        else if(changedqty==0){
            // console.log(i);
            // addcartbutton[i].innerHTML=""
            // console.log(addcartbutton[i]);
            // let btn = document.createElement("button");
            // let span1 = document.createElement("span");
            // span1.innerText="ADD TO CART"
            // btn.append(span1);
            // addcartbutton[i].append(btn)
            // changecartprodquant.splice(index,1);
            // cart.splice(index,1)
            // localStorage.setItem("cartitems",JSON.stringify(cart)); 
            // localStorage.setItem("presentquantity",JSON.stringify(changecartprodquant));
            // btn.addEventListener("click",function(){
            //     addtocart(arr,ind);
            // })
        }
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
    

    // *************************** price range filter ****************************
    let executePriceRange = false;
    const rangeInput = document.querySelectorAll(".range-input input");
    const progress = document.querySelector(".progress");
    let mininput = document.getElementById("min-input-val")
    let maxinput = document.getElementById("max-input-val")
    let minVal=0;
    let maxVal=3999;
    function priceRangeTracker(){
        rangeInput.forEach(input=>{
            executePriceRange=true;
            input.addEventListener("input",()=>{
                minVal = parseInt(rangeInput[0].value);
                maxVal = parseInt(rangeInput[1].value);
                let percent = (minVal/rangeInput[0].max)*100;
                progress.style.left = (minVal/rangeInput[0].max)*100 + "%";
                progress.style.right =(100 - (maxVal/rangeInput[1].max)*100 )+"%";
                maxinput.innerText=maxVal;
                mininput.innerText=minVal;
                
            setTimeout(function(){
                getData();
            },1000)

            }) 
        })
    }

    priceRangeTracker()

    const discountrangeInput = document.querySelectorAll(".discount-range-input input");
    const discountprogress = document.querySelector(".discount-progress");
    let discountmininput = document.getElementById("discount-min-input-val")
    let discountmaxinput = document.getElementById("discount-max-input-val")
    let discountminVal=0;
    let discountmaxVal=88;
    function discountRangeTracker(){
        discountrangeInput.forEach(input=>{
            input.addEventListener("input",()=>{
                discountminVal = parseInt(discountrangeInput[0].value);
                discountmaxVal = parseInt(discountrangeInput[1].value);
                let discountpercent = (discountminVal/rangeInput[0].max)*100;
                discountprogress.style.left = (discountminVal/discountrangeInput[0].max)*100 + "%";
                discountprogress.style.right =(100 - (discountmaxVal/discountrangeInput[1].max)*100 )+"%";
                discountmaxinput.innerText=discountmaxVal;
                discountmininput.innerText=discountminVal;
            setTimeout(function(){
                getData();
            },1000)

            }) 
        })
    }

    discountRangeTracker()


// brand name filter >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>....
    let selectedBrandsForFilter = [];
    let brandnameString="";
    let execute = false;
    function filterbrand(ele,ind,checked,value,input){
        let brandnamefilter = document.querySelectorAll(".checkbox-brandfilter")
        console.log(brandnamefilter[ind]);
        execute=true;
        console.log(input.checked);
        brandnameString="";
        if(checked===true){
            selectedBrandsForFilter.push(value);
            getData();
        }
        else{
            for(let i=0; i<selectedBrandsForFilter.length; i++){
                if(selectedBrandsForFilter[i]===value){
                    
                    selectedBrandsForFilter.splice(i,1);
                }
            }
            getData();
        }
    }

    let selectedmkfForFilter = [];

    let executeMkf = false;
    function filtermkf(ele,ind,checked,value,input){
        executeMkf=true;

        if(checked===true){
            selectedmkfForFilter.push(value);
            console.log(selectedmkfForFilter);
            getData();
        }
        else{
            for(let i=0; i<selectedmkfForFilter.length; i++){
                if(selectedmkfForFilter[i]===value){
                    selectedmkfForFilter.splice(i,1);
                }
            }
            getData();
        }
    }


    let selectedCategoriesForFilter = [];

    let executeCategories = false;
    function filterCategories(ele,ind,checked,value,input){
        executeCategories=true;
        if(checked===true){
            selectedCategoriesForFilter.push(value);
            console.log(selectedCategoriesForFilter);
            getData();
        }
        else{
            for(let i=0; i<selectedCategoriesForFilter.length; i++){
                if(selectedCategoriesForFilter[i]===value){
                    selectedCategoriesForFilter.splice(i,1);
                    console.log(selectedCategoriesForFilter);
                }
            }
            getData();
        }
    }



}

export default productPages;