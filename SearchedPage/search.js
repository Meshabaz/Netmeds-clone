let searchKey = JSON.parse(localStorage.getItem("search"));
let cartLength = JSON.parse(localStorage.getItem("cartItem"));

let keyword = "mask";
let finalKey = keyword.toLowerCase();
const searchedData = async () => {
  let responce = await fetch("https://mr-raaz.github.io/NetmedsClone_data/data.json");
  let data = await responce.json();

  showData(data.products);
}
searchedData();
let count = 0;
function showData(data) {
  document.querySelector(".grid").innerHTML = null;
  let str = "";
  data.map(function (ele, idx) {
    if (ele.prod_name.toLowerCase().includes(finalKey)) {
      count++;
      str += ` <div class="card">
        <img
          src="${ele.url_1}"
          alt="img"
          id="img"
        />
        <div class="details">
          <h1 id="title">
          ${ele.prod_name}
          </h1>
          <p id="category">${ele.categories_1} ${ele.categories_2}</p>
          <h1 id="price">MRP <span id="bestprice">₹ ${ele.best_price}</span></h1>
          <p id="brand">Mkt: ${ele.mkf}</p>

          <div class="end">
            <button id="addToCart">ADD TO CART</button>
          </div>
        </div>
      </div>`;

      document.querySelector(".grid").innerHTML = str;
    }
  });

  document.getElementById("totalItems").innerText = count + " " + "items found";

  if (count === 0) {
    document.querySelector(".grid").innerHTML = null;

    let img = document.createElement("h1");
    img.id = "noFound";
    img.innerText = "No Match Found...";

    document.querySelector(".grid").append(img);
  }
}
