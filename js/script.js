// =====================================================
// DAN ZAKI MOBILE & ACCESSORIES
// JAVASCRIPT
// =====================================================


// =====================================================
// WHATSAPP NUMBER
// =====================================================

const whatsappNumber = "2348106460589";


// =====================================================
// PRODUCTS
// =====================================================
//
// IMPORTANT:
//
// Hotunan suna cikin folder:
// images/
//
// Misali:
// images/iphone.jpg
// images/samsung.jpg
//
// =====================================================


const products = [

    {
        id: 1,
        name: "iPhone 11",
        detail: "Latest Apple Iphone 11 64GB smartphones",
        type: "phone",
        image: "images/iphone 11 64GB.jpeg"
    },


    {
        id: 2,
        name: "Iphone 11",
        detail:"Latest Apple Iphone 11 128GB smartphones",
        type: "phone",
        image: "images/iphone 11 128GB.jpeg"
    },


    {
        id: 3,
        name: "iPHONE 11 PROMAX",
        detail: "Latest Apple Iphone 11PROMAX 128GB smartphones",
        type: "phone",
        image: "images/iphone 11 pro max.jpeg"
    },


    {
        id: 4,
        name: "IPHONE 12",
        detail: "Original Iphone 12 64GB",
        type: "phone",
        image: "images/iphone 12 64GB.jpeg"
    },


    {
        id: 5,
        name: "IPHONE 13",
        detail: "Value-packed iphone 13pro smartphones",
        type: "phone",
        image: "images/iphone 13.jpeg"
    },


    {
        id: 6,
        name: "Iphone 17",
        detail: "Clean Iphone 17 258GB Smartphone",
        type: "phone",
        image: "images/iphone 17 258GB.jpeg"
    },


    {
        id: 7,
        name: "Iphone 18pro",
        detail: "Clean Iphone 18pro 258GB",
        type: "phone",
        image: "images/iphone 18 pro.jpeg"
    },


    {
        id: 8,
        name: "Redmi A5",
        detail: "Clean Redmi A5 64GB",
        type: "phone",
        image: "images/Redmi A5 64Gb.jpeg"
    },


    {
        id: 9,
        name: "Redmi Note 15",
        detail: "Clean Redmi Note 15 64GB",
        type: "phone",
        image: "images/Redmi Note 15 64Gb.jpeg"
    },

    {
        id: 10,
        name: "Samsung Z Fold 3",
        detail: "Original Samsung Z Fold 3",
        type: "phone",
        image: "images/Samsung Z Fold 3.jpeg"
    },

    {
        id: 11,
        name: "Samsung Z Fold 6",
        detail: "Original Samsung Z Fold 6 128GB",
        type: "phone",
        image: "images/Samsung Z Fold 6.jpeg"
    },

    {
        id: 11,
        name: "TECNO POP 20",
        detail: "Original Pop 20 64GB & 128GB",
        type: "phone",
        image: "images/Tecno pop 20.jpeg"
    },

     {
        id: 12,
        name: "RODIMU KEYPARD",
        detail: "Original Keypad",
        type: "phone",
        image: "images/Rodimu keypad.jpeg"
    },

    {
        id: 13,
        name: "RODIMU M1 KEYPARD",
        detail: "Original Keypad",
        type: "phone",
        image: "images/Rodimu M1.jpeg"
    },

{
        id: 14,
        name: "RODIMU M102 KEYPARD",
        detail: "Original Keypad",
        type: "phone",
        image: "images/Rodimu M102.jpeg"
    },

{
        id: 14,
        name: "RODIMU M6 KEYPARD",
        detail: "Original Keypad",
        type: "phone",
        image: "images/Romidu M6.jpeg"
    },

{
        id: 15,
        name: "Smart Watch S810max",
        detail: "Portable charging",
        type: "accessory",
        image: "images/watch 2.jpeg"
    },

{
        id: 16,
        name: "Smat Watch A62",
        detail: "Portable charging",
        type: "accessory",
        image: "images/wATCH a62.jpeg"
    },

{
        id: 17,
        name: "Smat Watch Big 2.09",
        detail: "Portable charging",
        type: "accessory",
        image: "images/Watch Big 2.09.jpeg"
    },

{
        id: 18,
        name: "Smat Watch ASG87",
        detail: "Portable charging",
        type: "accessory",
        image: "images/Watch1.jpeg"
    },

];


// =====================================================
// HTML ELEMENTS
// =====================================================

const productGrid =
    document.getElementById("productGrid");

const searchInput =
    document.getElementById("searchInput");

const noProducts =
    document.getElementById("noProducts");


// =====================================================
// CURRENT FILTER
// =====================================================

let currentFilter = "all";


// =====================================================
// WHATSAPP LINK
// =====================================================

function createWhatsAppLink(product) {

    const message =
`Hello DAN ZAKI MOBILE & ACCESSORIES,

I'm interested in ${product.name}.

Please send me the current price and availability.

Thank you.`;

    return (
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message)
    );
}


// =====================================================
// DISPLAY PRODUCTS
// =====================================================

function displayProducts() {

    const searchTerm =
        searchInput.value
        .trim()
        .toLowerCase();


    const filteredProducts =
        products.filter(product => {


            // CATEGORY FILTER

            const categoryMatch =
                currentFilter === "all" ||
                product.type === currentFilter;


            // SEARCH FILTER

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(searchTerm) ||

                product.detail
                    .toLowerCase()
                    .includes(searchTerm);


            return categoryMatch && searchMatch;

        });


    // NO PRODUCTS

    if (filteredProducts.length === 0) {

        productGrid.innerHTML = "";

        noProducts.style.display = "block";

        return;
    }


    noProducts.style.display = "none";


    // CREATE PRODUCT CARDS

    productGrid.innerHTML =
        filteredProducts.map(product => {


            const badge =
                product.type === "phone"
                    ? "MOBILE"
                    : "ACCESSORY";


            return `

                <article class="product-card">


                    <!-- PRODUCT IMAGE -->

                    <div class="product-image">

                        <span class="product-badge">
                            ${badge}
                        </span>


                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                        >

                    </div>


                    <!-- PRODUCT INFORMATION -->

                    <div class="product-info">

                        <h3>
                            ${product.name}
                        </h3>


                        <p>
                            ${product.detail}
                        </p>


                        <div class="price">
                            Contact for Price
                        </div>


                        <div class="product-actions">

                            <a
                                href="${createWhatsAppLink(product)}"
                                target="_blank"
                                rel="noopener"
                            >
                                Ask on WhatsApp
                            </a>

                        </div>

                    </div>

                </article>

            `;

        }).join("");

}


// =====================================================
// SEARCH
// =====================================================

searchInput.addEventListener(
    "input",
    displayProducts
);


// =====================================================
// FILTER BUTTONS
// =====================================================

document
    .querySelectorAll(".filter")
    .forEach(button => {


        button.addEventListener(
            "click",
            () => {


                // REMOVE ACTIVE

                document
                    .querySelectorAll(".filter")
                    .forEach(btn => {

                        btn.classList.remove("active");

                    });


                // ADD ACTIVE

                button.classList.add("active");


                // SAVE FILTER

                currentFilter =
                    button.dataset.filter;


                // DISPLAY PRODUCTS

                displayProducts();

            }
        );

    });


// =====================================================
// MOBILE MENU
// =====================================================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle("open");

    }
);


// =====================================================
// CLOSE MENU AFTER CLICK
// =====================================================

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {


        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove("open");

            }
        );

    });


// =====================================================
// CURRENT YEAR
// =====================================================

document.getElementById("year")
    .textContent = new Date().getFullYear();


// =====================================================
// INITIALIZE WEBSITE
// =====================================================

displayProducts();