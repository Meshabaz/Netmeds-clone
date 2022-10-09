function navbar() {

    return `<div class="header">
        <div id="left">
            <img src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg"
                alt="">
        </div>
        <div id="mid">
            <input type="text" placeholder="  Search for medicine & wellness Products...">
        </div>
        <div id="right">

            <ul class="navbar">
                <li><a href=""><img id="precription_img"
                            src="https://cdn.iconscout.com/icon/premium/png-64-thumb/medical-prescription-3356022-2794413.png"
                            alt="">
                        <div id="_1">Upload</div>
                    </a></li>
                <li><a href=""><img id="cart_img"
                            src="https://cdn.iconscout.com/icon/free/png-64/cart-grocery-store-shopping-shop-30488.png"
                            alt="">
                        <div id="_1">Cart</div>
                    </a></li>
                <li><a href=""><img id="sign_in" src="https://www.iconpacks.net/icons/1/free-icon-user-276.png" alt="">
                        <div id="_1">Sign in / Sign Up</div>
                    </a></li>
            </ul>

        </div>
    </div>

    <div class="navigatons">
        <div id="menu">
            <ul>
                <il id="medicine_list">
                    <a href="">

                        <div><img id="logos"
                                src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-medical-hospital-wanicon-flat-wanicon.png"
                                alt=""></div>
                        <div id="_1">Medicine<img id="dropdownbtn"
                                src="https://icons.veryicon.com/png/o/miscellaneous/docs/dropdown-2.png" alt=""></div>

                    </a>
                    <ul id="medicine_dd_list">
                        <li><a href="">All Medicines</a></li>
                        <li><a href="">Previously Ordered Products</a></li>
                    </ul>
                </il>

                <il id="wellness_list"><a href="">
                        <div><img id="logos"
                                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-wellness-travel-agency-flaticons-lineal-color-flat-icons.png"
                                alt=""></div>
                        <div id="_1">Wellness</div>

                    </a></il>


                <il id="labtest_list"><a href="">
                        <div><img id="logos"
                                src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/2x/external-lab-science-and-technology-icongeek26-linear-colour-icongeek26.png"
                                alt=""></div>
                        <div id="_1">Lab Tests</div>
                    </a></il>


                <il id="beauty_list"><a href="">
                        <div><img id="logos" src="https://img.icons8.com/office/2x/foundation-makeup.png" alt=""></div>
                        <div id="_1">Beauty
                            <img id="dropdownbtn"
                                src="https://icons.veryicon.com/png/o/miscellaneous/docs/dropdown-2.png" alt="">
                        </div>
                    </a>
                    <ul id="beauty_dd_list">
                        <li><a href="">Personal Care</a></li>
                        <li><a href="">Make-Up</a></li>
                        <li><a href="">Hair</a></li>
                        <li><a href="">Skin Care</a></li>
                        <li><a href="">Tools & Apliances</a></li>
                        <li><a href="">Mom & Baby</a></li>
                        <li><a href="">Fragrances</a></li>
                        <li><a href="">Men's Grooming</a></li>
                    </ul>
                </il>


                <il id="healthcorner_list"><a href="">
                        <div><img id="logos" src="https://img.icons8.com/office/2x/heart-health.png" alt=""></div>
                        <div id="_1">Health Corner
                            <img id="dropdownbtn"
                                src="https://icons.veryicon.com/png/o/miscellaneous/docs/dropdown-2.png" alt="">
                        </div>
                    </a>
                    <ul id="healthcorner_dd_list">
                        <li><a href="">Health Library</a></li>
                        <li><a href="">PatientsAlike</a></li>
                        <li><a href="">Corona Awareness</a></li>
                    </ul>
                </il>


            </ul>
        </div>
    </div>

    <div class="lastnavigation">
        <div id="menu">
            <ul>
                <li><a href="">COVID Essentials</a></li>
                <li><a href="">Diabetes</a></li>
                <li><a href="">Eyewear</a></li>
                <li><a href="">Ayush</a></li>
                <li><a href="">Ayurvedic</a></li>
                <li><a href="">Homeopathy</a></li>
                <li><a href="">Fitness</a></li>
                <li><a href="">Moms & Baby</a></li>
                <li><a href="">Devices</a></li>
                <li><a href="">Surgicals</a></li>
                <li><a href="">Sexual Wellness</a></li>
                <li><a href="">Treatment</a></li>
            </ul>
        </div>
    </div>`
}

export default navbar;