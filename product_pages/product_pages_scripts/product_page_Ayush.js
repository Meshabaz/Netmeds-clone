let page = "Ayush";

let loc1 = "Home"
let loc2 = "Non-Prescription"

import displayPageLocationOnBanner from "../utils/page_location_display.js";
document.getElementById("headdiv").innerHTML=displayPageLocationOnBanner(loc1,loc2,page);

import shopByCategoryCards from "../utils/shop_by_category_cards.js";
document.getElementById("main-shopbyCategoryDiv").innerHTML = shopByCategoryCards();

import categoryFilter from "../utils/categoryFilter.js";
document.getElementById("subFilterBox").innerHTML = categoryFilter();

import productPages from "../utils/master_script_productPages.js";
productPages(page);
