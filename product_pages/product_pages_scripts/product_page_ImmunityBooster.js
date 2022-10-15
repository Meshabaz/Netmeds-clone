let page = "Immunity Booster";

import shopByCategoryCards from "../utils/shop_by_category_cards.js";
document.getElementById("main-shopbyCategoryDiv").innerHTML = shopByCategoryCards();

import categoryFilter from "../utils/categoryFilter.js";
document.getElementById("subFilterBox").innerHTML = categoryFilter();

import productPages from "../utils/master_script_productPages.js";
productPages(page);

