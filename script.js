/* =========================================================
   RUCHIRA COMMUNICATION
   SHOP MANAGER
   BILINGUAL ENGLISH / SINHALA
   ========================================================= */


/* =========================================================
   DATA
   ========================================================= */

let products =
    JSON.parse(
        localStorage.getItem("shopProducts")
    ) || [];


let sales =
    JSON.parse(
        localStorage.getItem("shopSales")
    ) || [];


let cart = [];


let selectedCategory = "all";


/*
 * Product currently being edited.
 *
 * null = adding a new product
 */

let editingProductId = null;


/*
 * Current language
 */

let currentLanguage =
    localStorage.getItem("shopLanguage") || "en";


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

    en: {

        dashboard:
            "Dashboard",

        products:
            "Products",

        cashier:
            "Cashier",

        salesHistory:
            "Sales History",

        shopManager:
            "Shop Manager",

        localInventory:
            "Local inventory system",

        totalProducts:
            "Total Products",

        totalStock:
            "Total Stock",

        todaysSales:
            "Today's Sales",

        todaysRevenue:
            "Today's Revenue",

        lowStock:
            "Low Stock",

        productsNeedAttention:
            "Products that need attention",

        viewProducts:
            "View Products",

        recentSales:
            "Recent Sales",

        latestTransactions:
            "Latest transactions",

        viewHistory:
            "View History",

        addProduct:
            "Add Product",

        updateProduct:
            "Update Product",

        addItemsStorage:
            "Add items to your storage",

        updateProductDetails:
            "Update product information",

        cancel:
            "Cancel",

        productName:
            "Product Name",

        productCode:
            "Product Code",

        category:
            "Category",

        buyingPrice:
            "Buying Price",

        sellingPrice:
            "Selling Price",

        quantity:
            "Quantity",

        minimumStock:
            "Minimum Stock",

        storage:
            "Storage",

        currentInventory:
            "Current inventory",

        searchProducts:
            "Search products...",

        product:
            "Product",

        code:
            "Code",

        stock:
            "Stock",

        status:
            "Status",

        action:
            "Action",

        inStock:
            "In Stock",

        lowStockStatus:
            "Low Stock",

        edit:
            "Edit",

        delete:
            "Delete",

        cashier:
            "Cashier",

        selectProducts:
            "Select products to add to the sale",

        cashierSearchPlaceholder:
            "Search product or scan code...",

        all:
            "All",

        currentSale:
            "Current Sale",

        clear:
            "Clear",

        items:
            "Items",

        subtotal:
            "Subtotal",

        discount:
            "Discount",

        total:
            "TOTAL",

        cashReceived:
            "Cash Received",

        change:
            "Change",

        completeSale:
            "✓ Complete Sale",

        completedTransactions:
            "All completed transactions",

        totalRevenue:
            "Total Revenue",

        date:
            "Date",

        unitPrice:
            "Unit Price",

        noProducts:
            "No products found.",

        noSales:
            "No sales recorded yet.",

        cartEmpty:
            "Cart is empty",

        cartEmptyDescription:
            "Search and select products to start a sale.",

        remove:
            "Remove",

        lowStockDashboard:
            "Products that need attention",

        minimum:
            "Minimum",

        left:
            "left",

        out:
            "Out",

        added:
            "added to storage.",

        updated:
            "updated successfully.",

        deleted:
            "Product deleted.",

        saleCompleted:
            "Sale completed",

        stockRestored:
            "Sale deleted and stock restored.",

        saleDeleted:
            "Sale deleted.",

        enterProductName:
            "Enter a product name.",

        negativePrice:
            "Price cannot be negative.",

        negativeQuantity:
            "Quantity cannot be negative.",

        duplicateCode:
            "This product code is already being used.",

        outOfStock:
            "This product is out of stock.",

        notEnoughStock:
            "Not enough stock available.",

        cartEmptyMessage:
            "Cart is empty.",

        cashNotEnough:
            "Cash received is not enough.",

        productMissing:
            "A product no longer exists.",

        clearSaleConfirm:
            "Clear the current sale?",

        deleteProductConfirm:
            "Delete this product?",

        deleteSaleConfirm:
            "Delete this sale and restore its stock?",

        allEnough:
            "✓ All products have enough stock.",

        noSalesYet:
            "No sales yet.",

        each:
            "each",

        addedToCart:
            "added to cart.",

        available:
            "available.",

        productUpdated:
            "Product updated successfully.",

        productAdded:
            "Product added successfully.",

        productNamePlaceholder:
            "USB Cable",

        categoryPlaceholder:
            "Accessories",

        addedLabel:
            "Added"

    },


    si: {

        dashboard:
            "මුල් පිටුව",

        products:
            "භාණ්ඩ",

        cashier:
            "කැෂියර්",

        salesHistory:
            "විකුණුම් ඉතිහාසය",

        shopManager:
            "සාප්පු කළමනාකරණය",

        localInventory:
            "දේශීය භාණ්ඩ ගබඩා පද්ධතිය",

        totalProducts:
            "මුළු භාණ්ඩ",

        totalStock:
            "මුළු තොගය",

        todaysSales:
            "අද විකුණුම්",

        todaysRevenue:
            "අද ආදායම",

        lowStock:
            "අඩු තොගය",

        productsNeedAttention:
            "අවධානය අවශ්‍ය භාණ්ඩ",

        viewProducts:
            "භාණ්ඩ බලන්න",

        recentSales:
            "මෑත විකුණුම්",

        latestTransactions:
            "අලුත්ම ගනුදෙනු",

        viewHistory:
            "ඉතිහාසය බලන්න",

        addProduct:
            "භාණ්ඩ එකතු කරන්න",

        updateProduct:
            "භාණ්ඩ යාවත්කාලීන කරන්න",

        addItemsStorage:
            "ගබඩාවට භාණ්ඩ එකතු කරන්න",

        updateProductDetails:
            "භාණ්ඩ තොරතුරු යාවත්කාලීන කරන්න",

        cancel:
            "අවලංගු කරන්න",

        productName:
            "භාණ්ඩ නම",

        productCode:
            "භාණ්ඩ කේතය",

        category:
            "වර්ගය",

        buyingPrice:
            "මිලදී ගැනීමේ මිල",

        sellingPrice:
            "විකුණුම් මිල",

        quantity:
            "ප්‍රමාණය",

        minimumStock:
            "අවම තොගය",

        storage:
            "ගබඩාව",

        currentInventory:
            "වත්මන් භාණ්ඩ තොගය",

        searchProducts:
            "භාණ්ඩ සොයන්න...",

        product:
            "භාණ්ඩය",

        code:
            "කේතය",

        stock:
            "තොගය",

        status:
            "තත්ත්වය",

        action:
            "ක්‍රියාව",

        inStock:
            "තොගයේ ඇත",

        lowStockStatus:
            "අඩු තොගය",

        edit:
            "සංස්කරණය",

        delete:
            "මකන්න",

        cashier:
            "කැෂියර්",

        selectProducts:
            "විකිණීම සඳහා භාණ්ඩ තෝරන්න",

        cashierSearchPlaceholder:
            "භාණ්ඩ නම හෝ කේතය සොයන්න...",

        all:
            "සියල්ල",

        currentSale:
            "වත්මන් විකිණීම",

        clear:
            "හිස් කරන්න",

        items:
            "භාණ්ඩ",

        subtotal:
            "අතුරු එකතුව",

        discount:
            "වට්ටම",

        total:
            "මුළු එකතුව",

        cashReceived:
            "ලැබුණු මුදල",

        change:
            "ඉතිරිය",

        completeSale:
            "✓ විකිණීම සම්පූර්ණ කරන්න",

        completedTransactions:
            "සම්පූර්ණ කළ සියලු ගනුදෙනු",

        totalRevenue:
            "මුළු ආදායම",

        date:
            "දිනය",

        unitPrice:
            "ඒකක මිල",

        noProducts:
            "භාණ්ඩ හමු නොවීය.",

        noSales:
            "තවමත් විකුණුම් නොමැත.",

        cartEmpty:
            "කරත්තය හිස්ය",

        cartEmptyDescription:
            "විකිණීම ආරම්භ කිරීමට භාණ්ඩ සොයන්න.",

        remove:
            "ඉවත් කරන්න",

        minimum:
            "අවම",

        left:
            "ඉතිරි",

        out:
            "නැත",

        added:
            "ගබඩාවට එකතු කරන ලදී.",

        updated:
            "සාර්ථකව යාවත්කාලීන කරන ලදී.",

        deleted:
            "භාණ්ඩය මකා දමන ලදී.",

        saleCompleted:
            "විකිණීම සම්පූර්ණයි",

        stockRestored:
            "විකිණීම මකා දමා තොගය නැවත එකතු කරන ලදී.",

        saleDeleted:
            "විකිණීම මකා දමන ලදී.",

        enterProductName:
            "භාණ්ඩ නම ඇතුළත් කරන්න.",

        negativePrice:
            "මිල ඍණ විය නොහැක.",

        negativeQuantity:
            "ප්‍රමාණය ඍණ විය නොහැක.",

        duplicateCode:
            "මෙම භාණ්ඩ කේතය දැනටමත් භාවිතා වේ.",

        outOfStock:
            "මෙම භාණ්ඩය තොගයේ නොමැත.",

        notEnoughStock:
            "ප්‍රමාණවත් තොගයක් නොමැත.",

        cartEmptyMessage:
            "කරත්තය හිස්ය.",

        cashNotEnough:
            "ලැබුණු මුදල ප්‍රමාණවත් නොවේ.",

        productMissing:
            "භාණ්ඩය තවදුරටත් නොමැත.",

        clearSaleConfirm:
            "වත්මන් විකිණීම හිස් කරන්නද?",

        deleteProductConfirm:
            "මෙම භාණ්ඩය මකා දමන්නද?",

        deleteSaleConfirm:
            "මෙම විකිණීම මකා දමා තොගය නැවත එකතු කරන්නද?",

        allEnough:
            "✓ සියලුම භාණ්ඩවල ප්‍රමාණවත් තොගයක් ඇත.",

        noSalesYet:
            "තවමත් විකුණුම් නොමැත.",

        each:
            "එකකට",

        addedToCart:
            "කරත්තයට එකතු කරන ලදී.",

        available:
            "පවතී.",

        productUpdated:
            "භාණ්ඩය සාර්ථකව යාවත්කාලීන කරන ලදී.",

        productAdded:
            "භාණ්ඩය සාර්ථකව එකතු කරන ලදී.",

        productNamePlaceholder:
            "USB කේබල්",

        categoryPlaceholder:
            "උපාංග",

        addedLabel:
            "එකතු කළ දිනය"

    }

};


/* =========================================================
   TRANSLATION HELPER
   ========================================================= */

function t(key) {

    return (
        translations[currentLanguage]?.[key] ||
        translations.en[key] ||
        key
    );

}


/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function applyLanguage() {

    document.documentElement.lang =
        currentLanguage === "si"
            ? "si"
            : "en";


    /*
     * Translate normal elements
     */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            element.textContent =
                t(key);

        });


    /*
     * Translate placeholders
     */

    document
        .querySelectorAll("[data-placeholder]")
        .forEach(element => {

            const key =
                element.dataset.placeholder;

            element.placeholder =
                t(key);

        });


    /*
     * Update language selector
     */

    document.getElementById(
        "languageSelect"
    ).value =
        currentLanguage;


    /*
     * Re-render dynamic areas
     */

    updatePageTexts();

    renderProducts(
        document.getElementById(
            "productSearch"
        ).value
    );

    renderCashier();

    renderSalesHistory();

    updateDashboard();

    updateCurrentDate();

}


/* =========================================================
   LANGUAGE SELECTOR
   ========================================================= */

document
    .getElementById("languageSelect")
    .addEventListener(
        "change",
        event => {

            currentLanguage =
                event.target.value;

            localStorage.setItem(
                "shopLanguage",
                currentLanguage
            );

            applyLanguage();

        }
    );


/* =========================================================
   SAVE DATA
   ========================================================= */

function saveData() {

    localStorage.setItem(
        "shopProducts",
        JSON.stringify(products)
    );


    localStorage.setItem(
        "shopSales",
        JSON.stringify(sales)
    );

}


/* =========================================================
   CURRENCY
   ========================================================= */

function formatCurrency(value) {

    return "Rs. " +
        Number(value || 0).toLocaleString(
            "en-LK",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );

}


/* =========================================================
   HTML ESCAPE
   ========================================================= */

function escapeHTML(value) {

    return String(value)

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}


/* =========================================================
   DATE
   ========================================================= */

function formatDate(dateString) {

    const date =
        new Date(dateString);


    return date.toLocaleString(
        currentLanguage === "si"
            ? "si-LK"
            : "en-LK",
        {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


function isToday(dateString) {

    const date =
        new Date(dateString);


    const today =
        new Date();


    return (

        date.getDate() ===
            today.getDate()

        &&

        date.getMonth() ===
            today.getMonth()

        &&

        date.getFullYear() ===
            today.getFullYear()

    );

}


/* =========================================================
   NAVIGATION
   ========================================================= */

document
    .querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showSection(
                    button.dataset.section
                );

            }
        );

    });


function updatePageTexts() {

    const section =
        document.querySelector(
            ".page.active"
        );


    if (!section) return;


    const sectionId =
        section.id;


    const titles = {

        dashboard: [
            "Dashboard",
            "Overview of your shop"
        ],

        products: [
            "Products & Storage",
            "Manage your shop inventory"
        ],

        sales: [
            "Cashier",
            "Create a new sale"
        ],

        history: [
            "Sales History",
            "View all completed transactions"
        ]

    };


    const sinhalaTitles = {

        dashboard: [
            "මුල් පිටුව",
            "ඔබගේ සාප්පුවේ සාරාංශය"
        ],

        products: [
            "භාණ්ඩ සහ ගබඩාව",
            "සාප්පු භාණ්ඩ තොගය කළමනාකරණය කරන්න"
        ],

        sales: [
            "කැෂියර්",
            "නව විකිණීමක් සාදන්න"
        ],

        history: [
            "විකුණුම් ඉතිහාසය",
            "සම්පූර්ණ කළ සියලු ගනුදෙනු"
        ]

    };


    const selected =
        currentLanguage === "si"
            ? sinhalaTitles[sectionId]
            : titles[sectionId];


    if (!selected) return;


    document.getElementById(
        "pageTitle"
    ).textContent =
        selected[0];


    document.getElementById(
        "pageSubtitle"
    ).textContent =
        selected[1];

}


function showSection(sectionId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove(
                "active"
            );

        });


    const page =
        document.getElementById(
            sectionId
        );


    if (page) {

        page.classList.add(
            "active"
        );

    }


    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.classList.remove(
                "active"
            );


            if (
                button.dataset.section ===
                sectionId
            ) {

                button.classList.add(
                    "active"
                );

            }

        });


    updatePageTexts();


    if (sectionId === "sales") {

        renderCashier();

    }

}


/* =========================================================
   PRODUCT FORM
   ========================================================= */

document
    .getElementById("productForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "productName"
                ).value.trim();


            const code =
                document.getElementById(
                    "productCode"
                ).value.trim();


            const category =
                document.getElementById(
                    "productCategory"
                ).value.trim();


            const buyPrice =
                Number(
                    document.getElementById(
                        "buyPrice"
                    ).value
                );


            const sellPrice =
                Number(
                    document.getElementById(
                        "sellPrice"
                    ).value
                );


            const quantity =
                Number(
                    document.getElementById(
                        "productQuantity"
                    ).value
                );


            const minimumStock =
                Number(
                    document.getElementById(
                        "minimumStock"
                    ).value
                );


            if (!name) {

                showToast(
                    t("enterProductName")
                );

                return;

            }


            if (
                buyPrice < 0 ||
                sellPrice < 0
            ) {

                showToast(
                    t("negativePrice")
                );

                return;

            }


            if (quantity < 0) {

                showToast(
                    t("negativeQuantity")
                );

                return;

            }


            /*
             * Product code
             */

            const finalCode =
                code ||
                "SKU-" +
                Date.now()
                    .toString()
                    .slice(-5);


            /*
             * Check duplicate code
             */

            const duplicate =
                products.find(
                    product =>
                        product.code
                            .toLowerCase() ===
                        finalCode.toLowerCase()
                        &&
                        product.id !==
                        editingProductId
                );


            if (duplicate) {

                showToast(
                    t("duplicateCode")
                );

                return;

            }


            /* =================================================
               UPDATE EXISTING PRODUCT
               ================================================= */

            if (
                editingProductId !==
                null
            ) {

                const product =
                    products.find(
                        item =>
                            item.id ===
                            editingProductId
                    );


                if (!product) {

                    return;

                }


                product.name =
                    name;

                product.code =
                    finalCode;

                product.category =
                    category ||
                    "General";

                product.buyPrice =
                    buyPrice;

                product.sellPrice =
                    sellPrice;

                product.quantity =
                    quantity;

                product.minimumStock =
                    minimumStock;


                saveData();


                const updatedName =
                    product.name;


                resetProductForm();


                refreshAll();


                showToast(
                    `${updatedName} - ${t("productUpdated")}`
                );


                return;

            }


            /* =================================================
               ADD NEW PRODUCT
               ================================================= */

            const product = {

                id:
                    Date.now(),

                name:
                    name,

                code:
                    finalCode,

                category:
                    category ||
                    "General",

                buyPrice:
                    buyPrice,

                sellPrice:
                    sellPrice,

                quantity:
                    quantity,

                minimumStock:
                    minimumStock,

                createdAt:
                    new Date()
                        .toISOString()

            };


            products.push(
                product
            );


            saveData();


            resetProductForm();


            refreshAll();


            showToast(
                `${name} - ${t("productAdded")}`
            );

        }
    );


/* =========================================================
   EDIT PRODUCT
   ========================================================= */

function editProduct(id) {

    const product =
        products.find(
            item =>
                item.id === id
        );


    if (!product) return;


    editingProductId =
        id;


    document.getElementById(
        "productName"
    ).value =
        product.name;


    document.getElementById(
        "productCode"
    ).value =
        product.code;


    document.getElementById(
        "productCategory"
    ).value =
        product.category;


    document.getElementById(
        "buyPrice"
    ).value =
        product.buyPrice;


    document.getElementById(
        "sellPrice"
    ).value =
        product.sellPrice;


    document.getElementById(
        "productQuantity"
    ).value =
        product.quantity;


    document.getElementById(
        "minimumStock"
    ).value =
        product.minimumStock;


    document.getElementById(
        "productFormTitle"
    ).textContent =
        t("updateProduct");


    document.getElementById(
        "productFormSubtitle"
    ).textContent =
        t("updateProductDetails");


    const button =
        document.getElementById(
            "productSubmitButton"
        );


    button.textContent =
        "✓ " +
        t("updateProduct");


    button.classList.add(
        "update-mode"
    );


    document.getElementById(
        "cancelEditButton"
    ).classList.remove(
        "hidden"
    );


    showSection(
        "products"
    );


    document.getElementById(
        "productName"
    ).focus();

}


/* =========================================================
   RESET PRODUCT FORM
   ========================================================= */

function resetProductForm() {

    editingProductId =
        null;


    document.getElementById(
        "productForm"
    ).reset();


    document.getElementById(
        "minimumStock"
    ).value =
        5;


    document.getElementById(
        "productFormTitle"
    ).textContent =
        t("addProduct");


    document.getElementById(
        "productFormSubtitle"
    ).textContent =
        t("addItemsStorage");


    const button =
        document.getElementById(
            "productSubmitButton"
        );


    button.textContent =
        "+ " +
        t("addProduct");


    button.classList.remove(
        "update-mode"
    );


    document.getElementById(
        "cancelEditButton"
    ).classList.add(
        "hidden"
    );

}


/* =========================================================
   CANCEL EDIT
   ========================================================= */

document
    .getElementById(
        "cancelEditButton"
    )
    .addEventListener(
        "click",
        resetProductForm
    );


/* =========================================================
   PRODUCT SEARCH
   ========================================================= */

document
    .getElementById("productSearch")
    .addEventListener(
        "input",
        event => {

            renderProducts(
                event.target.value
            );

        }
    );


/* =========================================================
   PRODUCT TABLE
   ========================================================= */

function renderProducts(
    searchTerm = ""
) {

    const tbody =
        document.getElementById(
            "productsTableBody"
        );


    const search =
        searchTerm
            .toLowerCase()
            .trim();


    const filtered =
        products.filter(
            product =>

                product.name
                    .toLowerCase()
                    .includes(search)

                ||

                product.code
                    .toLowerCase()
                    .includes(search)

                ||

                product.category
                    .toLowerCase()
                    .includes(search)
        );


    tbody.innerHTML = "";


    if (!filtered.length) {

        tbody.innerHTML = `

            <tr>

                <td
                    colspan="7"
                    style="
                        text-align:center;
                        padding:35px;
                        color:#94a3b8;
                    "
                >

                    ${t("noProducts")}

                </td>

            </tr>

        `;

        document.getElementById(
            "productCount"
        ).textContent =
            products.length;

        return;

    }


    filtered.forEach(product => {

        const low =
            Number(product.quantity) <=
            Number(product.minimumStock);


        const row =
            document.createElement(
                "tr"
            );


        row.innerHTML = `

            <td>

                <div class="product-name">

                    ${escapeHTML(
                        product.name
                    )}

                </div>

                <div class="product-sub">

                    ${t("addedLabel")}
                    ${formatDate(
                        product.createdAt
                    )}

                </div>

            </td>


            <td>

                ${escapeHTML(
                    product.code
                )}

            </td>


            <td>

                ${escapeHTML(
                    product.category
                )}

            </td>


            <td>

                ${formatCurrency(
                    product.sellPrice
                )}

            </td>


            <td>

                <span class="
                    stock-number
                    ${low ? "low" : ""}
                ">

                    ${product.quantity}

                </span>

            </td>


            <td>

                <span class="
                    status
                    ${low ? "low" : "good"}
                ">

                    ${low
                        ? t("lowStockStatus")
                        : t("inStock")}

                </span>

            </td>


            <td>

                <div class="action-buttons">

                    <button
                        class="edit-button"
                        onclick="
                            editProduct(
                                ${product.id}
                            )
                        "
                    >

                        ${t("edit")}

                    </button>


                    <button
                        class="delete-button"
                        onclick="
                            deleteProduct(
                                ${product.id}
                            )
                        "
                    >

                        ${t("delete")}

                    </button>

                </div>

            </td>

        `;


        tbody.appendChild(row);

    });


    document.getElementById(
        "productCount"
    ).textContent =
        products.length;

}


/* =========================================================
   DELETE PRODUCT
   ========================================================= */

function deleteProduct(id) {

    const product =
        products.find(
            item =>
                item.id === id
        );


    if (!product) return;


    const message =
        currentLanguage === "si"
            ? `"${product.name}" ${t("deleteProductConfirm")}`
            : `${t("deleteProductConfirm")} "${product.name}"?`;


    if (!confirm(message)) {

        return;

    }


    products =
        products.filter(
            item =>
                item.id !== id
        );


    cart =
        cart.filter(
            item =>
                item.productId !== id
        );


    saveData();


    refreshAll();


    showToast(
        t("deleted")
    );

}


/* =========================================================
   CASHIER SEARCH
   ========================================================= */

const cashierSearch =
    document.getElementById(
        "cashierSearch"
    );


cashierSearch.addEventListener(
    "input",
    renderCashier
);


document
    .getElementById(
        "clearCashierSearch"
    )
    .addEventListener(
        "click",
        () => {

            cashierSearch.value = "";

            renderCashier();

            cashierSearch.focus();

        }
    );


/* =========================================================
   CATEGORIES
   ========================================================= */

function renderCategories() {

    const container =
        document.getElementById(
            "categoryFilter"
        );


    const categories = [
        ...new Set(
            products.map(
                product =>
                    product.category
            )
        )
    ].filter(Boolean);


    container.innerHTML = "";


    const allButton =
        document.createElement(
            "button"
        );


    allButton.className =
        "category-button";


    if (
        selectedCategory ===
        "all"
    ) {

        allButton.classList.add(
            "active"
        );

    }


    allButton.dataset.category =
        "all";


    allButton.textContent =
        t("all");


    allButton.addEventListener(
        "click",
        () => {

            selectedCategory =
                "all";

            renderCategories();

            renderCashierProducts();

        }
    );


    container.appendChild(
        allButton
    );


    categories.forEach(category => {

        const button =
            document.createElement(
                "button"
            );


        button.className =
            "category-button";


        if (
            selectedCategory ===
            category
        ) {

            button.classList.add(
                "active"
            );

        }


        button.textContent =
            category;


        button.addEventListener(
            "click",
            () => {

                selectedCategory =
                    category;

                renderCategories();

                renderCashierProducts();

            }
        );


        container.appendChild(
            button
        );

    });

}


/* =========================================================
   CASHIER
   ========================================================= */

function renderCashier() {

    renderCategories();

    renderCashierProducts();

    renderCart();

    updateCashierTotals();

}


/* =========================================================
   CASHIER PRODUCTS
   ========================================================= */

function renderCashierProducts() {

    const grid =
        document.getElementById(
            "cashierProductGrid"
        );


    const search =
        cashierSearch.value
            .toLowerCase()
            .trim();


    const filtered =
        products.filter(product => {

            const matchesSearch =

                product.name
                    .toLowerCase()
                    .includes(search)

                ||

                product.code
                    .toLowerCase()
                    .includes(search)

                ||

                product.category
                    .toLowerCase()
                    .includes(search);


            const matchesCategory =

                selectedCategory ===
                "all"

                ||

                product.category ===
                selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    grid.innerHTML = "";


    if (!filtered.length) {

        grid.innerHTML = `

            <div
                style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:60px 20px;
                    color:#94a3b8;
                "
            >

                <div
                    style="
                        font-size:30px;
                        margin-bottom:10px;
                    "
                >
                    🔎
                </div>

                ${t("noProducts")}

            </div>

        `;

        return;

    }


    filtered.forEach(product => {

        const card =
            document.createElement(
                "div"
            );


        const outOfStock =
            Number(product.quantity) <= 0;


        const low =
            Number(product.quantity) <=
            Number(product.minimumStock);


        card.className =
            "cashier-product";


        if (outOfStock) {

            card.classList.add(
                "out-of-stock"
            );

        }


        card.innerHTML = `

            <div>

                <div class="product-card-icon">

                    ${getProductIcon(
                        product.category
                    )}

                </div>


                <div class="
                    cashier-product-name
                ">

                    ${escapeHTML(
                        product.name
                    )}

                </div>


                <div class="
                    cashier-product-code
                ">

                    ${escapeHTML(
                        product.code
                    )}

                </div>

            </div>


            <div class="
                cashier-product-bottom
            ">

                <span class="
                    cashier-price
                ">

                    ${formatCurrency(
                        product.sellPrice
                    )}

                </span>


                <span class="
                    cashier-stock
                    ${outOfStock
                        ? "empty"
                        : low
                            ? "low"
                            : ""}
                ">

                    ${
                        outOfStock
                            ? t("out")
                            : `${product.quantity} ${t("left")}`
                    }

                </span>

            </div>

        `;


        if (!outOfStock) {

            card.addEventListener(
                "click",
                () => {

                    addToCart(
                        product.id
                    );

                }
            );

        }


        grid.appendChild(
            card
        );

    });

}


/* =========================================================
   PRODUCT ICON
   ========================================================= */

function getProductIcon(category) {

    const text =
        String(category)
            .toLowerCase();


    if (
        text.includes("phone") ||
        text.includes("mobile") ||
        text.includes("දුරකථන")
    ) {

        return "📱";

    }


    if (
        text.includes("computer") ||
        text.includes("laptop") ||
        text.includes("පරිගණක")
    ) {

        return "💻";

    }


    if (
        text.includes("cable") ||
        text.includes("access") ||
        text.includes("කේබල්")
    ) {

        return "🔌";

    }


    if (
        text.includes("audio") ||
        text.includes("head") ||
        text.includes("ශබ්ද")
    ) {

        return "🎧";

    }


    if (
        text.includes("charger") ||
        text.includes("චාජර්")
    ) {

        return "🔋";

    }


    return "📦";

}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(productId) {

    const product =
        products.find(
            item =>
                item.id === productId
        );


    if (!product) return;


    if (
        Number(product.quantity) <=
        0
    ) {

        showToast(
            t("outOfStock")
        );

        return;

    }


    const existing =
        cart.find(
            item =>
                item.productId ===
                productId
        );


    if (existing) {

        if (
            existing.quantity >=
            product.quantity
        ) {

            showToast(
                `${product.quantity} ${t("available")}`
            );

            return;

        }


        existing.quantity++;

    } else {

        cart.push({

            productId:
                product.id,

            quantity:
                1

        });

    }


    renderCart();

    updateCashierTotals();


    showToast(
        `${product.name} ${t("addedToCart")}`
    );

}


/* =========================================================
   CHANGE CART QUANTITY
   ========================================================= */

function changeCartQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            cartItem =>
                cartItem.productId ===
                productId
        );


    const product =
        products.find(
            product =>
                product.id ===
                productId
        );


    if (!item || !product) return;


    const newQuantity =
        item.quantity + change;


    if (newQuantity <= 0) {

        removeFromCart(
            productId
        );

        return;

    }


    if (
        newQuantity >
        product.quantity
    ) {

        showToast(
            `${product.quantity} ${t("available")}`
        );

        return;

    }


    item.quantity =
        newQuantity;


    renderCart();

    updateCashierTotals();

}


/* =========================================================
   REMOVE CART ITEM
   ========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.productId !==
                productId
        );


    renderCart();

    updateCashierTotals();

}


/* =========================================================
   CLEAR CART
   ========================================================= */

document
    .getElementById("clearCart")
    .addEventListener(
        "click",
        () => {

            if (!cart.length) {

                return;

            }


            if (
                confirm(
                    t("clearSaleConfirm")
                )
            ) {

                cart = [];


                document.getElementById(
                    "discountAmount"
                ).value = 0;


                document.getElementById(
                    "cashReceived"
                ).value = "";


                renderCart();

                updateCashierTotals();

            }

        }
    );


/* =========================================================
   RENDER CART
   ========================================================= */

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    container.innerHTML = "";


    if (!cart.length) {

        container.innerHTML = `

            <div class="cart-empty">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <strong>
                    ${t("cartEmpty")}
                </strong>

                <p>
                    ${t("cartEmptyDescription")}
                </p>

            </div>

        `;


        document.getElementById(
            "cartItemCount"
        ).textContent =
            `0 ${t("items")}`;


        return;

    }


    let totalItems = 0;


    cart.forEach(item => {

        const product =
            products.find(
                product =>
                    product.id ===
                    item.productId
            );


        if (!product) return;


        totalItems +=
            item.quantity;


        const itemTotal =
            product.sellPrice *
            item.quantity;


        const row =
            document.createElement(
                "div"
            );


        row.className =
            "cart-item";


        row.innerHTML = `

            <div>

                <div class="
                    cart-product-name
                ">

                    ${escapeHTML(
                        product.name
                    )}

                </div>


                <div class="
                    cart-product-price
                ">

                    ${formatCurrency(
                        product.sellPrice
                    )}

                    ${t("each")}

                </div>


                <div class="
                    cart-controls
                ">

                    <button
                        class="quantity-button"
                        onclick="
                            changeCartQuantity(
                                ${product.id},
                                -1
                            )
                        "
                    >
                        −
                    </button>


                    <span class="
                        cart-quantity
                    ">

                        ${item.quantity}

                    </span>


                    <button
                        class="quantity-button"
                        onclick="
                            changeCartQuantity(
                                ${product.id},
                                1
                            )
                        "
                    >
                        +
                    </button>


                    <button
                        class="
                            remove-cart-item
                        "
                        onclick="
                            removeFromCart(
                                ${product.id}
                            )
                        "
                    >

                        ${t("remove")}

                    </button>

                </div>

            </div>


            <div class="
                cart-item-total
            ">

                ${formatCurrency(
                    itemTotal
                )}

            </div>

        `;


        container.appendChild(
            row
        );

    });


    document.getElementById(
        "cartItemCount"
    ).textContent =

        `${totalItems} ${t("items")}`;

}


/* =========================================================
   DISCOUNT
   ========================================================= */

document
    .getElementById(
        "discountAmount"
    )
    .addEventListener(
        "input",
        updateCashierTotals
    );


/* =========================================================
   CASH
   ========================================================= */

document
    .getElementById(
        "cashReceived"
    )
    .addEventListener(
        "input",
        updateCashierTotals
    );


/* =========================================================
   CALCULATE SUBTOTAL
   ========================================================= */

function calculateSubtotal() {

    return cart.reduce(
        (total, item) => {

            const product =
                products.find(
                    product =>
                        product.id ===
                        item.productId
                );


            if (!product) {

                return total;

            }


            return total +
                (
                    product.sellPrice *
                    item.quantity
                );

        },
        0
    );

}


/* =========================================================
   DISCOUNT
   ========================================================= */

function getDiscount() {

    let discount =
        Number(
            document.getElementById(
                "discountAmount"
            ).value
        ) || 0;


    if (discount < 0) {

        discount = 0;

    }


    const subtotal =
        calculateSubtotal();


    if (discount > subtotal) {

        discount = subtotal;

    }


    return discount;

}


/* =========================================================
   GRAND TOTAL
   ========================================================= */

function getGrandTotal() {

    const subtotal =
        calculateSubtotal();


    const discount =
        getDiscount();


    return Math.max(
        0,
        subtotal - discount
    );

}


/* =========================================================
   CASHIER TOTALS
   ========================================================= */

function updateCashierTotals() {

    const subtotal =
        calculateSubtotal();


    const discount =
        getDiscount();


    const total =
        Math.max(
            0,
            subtotal - discount
        );


    const cash =
        Number(
            document.getElementById(
                "cashReceived"
            ).value
        ) || 0;


    const change =
        Math.max(
            0,
            cash - total
        );


    const totalItems =
        cart.reduce(
            (
                sum,
                item
            ) =>
                sum + item.quantity,
            0
        );


    document.getElementById(
        "summaryItems"
    ).textContent =
        totalItems;


    document.getElementById(
        "summarySubtotal"
    ).textContent =
        formatCurrency(
            subtotal
        );


    document.getElementById(
        "grandTotal"
    ).textContent =
        formatCurrency(
            total
        );


    document.getElementById(
        "changeAmount"
    ).textContent =
        formatCurrency(
            change
        );


    const completeButton =
        document.getElementById(
            "completeSale"
        );


    completeButton.disabled =
        cart.length === 0 ||
        cash < total;

}


/* =========================================================
   COMPLETE SALE
   ========================================================= */

document
    .getElementById(
        "completeSale"
    )
    .addEventListener(
        "click",
        completeSale
    );


function completeSale() {

    if (!cart.length) {

        showToast(
            t("cartEmptyMessage")
        );

        return;

    }


    const subtotal =
        calculateSubtotal();


    const discount =
        getDiscount();


    const total =
        Math.max(
            0,
            subtotal - discount
        );


    const cash =
        Number(
            document.getElementById(
                "cashReceived"
            ).value
        ) || 0;


    if (cash < total) {

        showToast(
            t("cashNotEnough")
        );

        return;

    }


    /*
     * Final stock verification
     */

    for (const item of cart) {

        const product =
            products.find(
                product =>
                    product.id ===
                    item.productId
            );


        if (!product) {

            showToast(
                t("productMissing")
            );

            return;

        }


        if (
            item.quantity >
            product.quantity
        ) {

            showToast(
                `${product.name}: ${t("notEnoughStock")}`
            );

            return;

        }

    }


    /*
     * Decrease stock
     */

    cart.forEach(item => {

        const product =
            products.find(
                product =>
                    product.id ===
                    item.productId
            );


        product.quantity -=
            item.quantity;

    });


    /*
     * Save sale
     */

    const saleId =
        Date.now();


    cart.forEach(
        (item, index) => {

            const product =
                products.find(
                    product =>
                        product.id ===
                        item.productId
                );


            const lineTotal =
                product.sellPrice *
                item.quantity;


            const lineDiscount =
                index === 0
                    ? discount
                    : 0;


            const finalLineTotal =
                Math.max(
                    0,
                    lineTotal -
                    lineDiscount
                );


            sales.unshift({

                id:
                    saleId +
                    index,

                transactionId:
                    saleId,

                productId:
                    product.id,

                productName:
                    product.name,

                productCode:
                    product.code,

                quantity:
                    item.quantity,

                unitPrice:
                    product.sellPrice,

                subtotal:
                    lineTotal,

                discount:
                    lineDiscount,

                total:
                    finalLineTotal,

                cashReceived:
                    index === 0
                        ? cash
                        : 0,

                change:
                    index === 0
                        ? cash - total
                        : 0,

                date:
                    new Date()
                        .toISOString()

            });

        }
    );


    saveData();


    cart = [];


    document.getElementById(
        "discountAmount"
    ).value = 0;


    document.getElementById(
        "cashReceived"
    ).value = "";


    refreshAll();


    showToast(
        `${t("saleCompleted")} — ${formatCurrency(total)}`
    );

}


/* =========================================================
   SALES HISTORY
   ========================================================= */

function renderSalesHistory() {

    const tbody =
        document.getElementById(
            "salesTableBody"
        );


    tbody.innerHTML = "";


    if (!sales.length) {

        tbody.innerHTML = `

            <tr>

                <td
                    colspan="7"
                    style="
                        text-align:center;
                        padding:35px;
                        color:#94a3b8;
                    "
                >

                    ${t("noSales")}

                </td>

            </tr>

        `;


        document.getElementById(
            "historyRevenue"
        ).textContent =
            formatCurrency(0);


        return;

    }


    sales.forEach(sale => {

        const row =
            document.createElement(
                "tr"
            );


        row.innerHTML = `

            <td>

                ${formatDate(
                    sale.date
                )}

            </td>


            <td>

                <div class="product-name">

                    ${escapeHTML(
                        sale.productName
                    )}

                </div>

            </td>


            <td>

                ${escapeHTML(
                    sale.productCode
                )}

            </td>


            <td>

                ${sale.quantity}

            </td>


            <td>

                ${formatCurrency(
                    sale.unitPrice
                )}

            </td>


            <td>

                <strong>

                    ${formatCurrency(
                        sale.total
                    )}

                </strong>

            </td>


            <td>

                <button
                    class="delete-button"
                    onclick="
                        deleteSale(
                            ${sale.id}
                        )
                    "
                >

                    ${t("delete")}

                </button>

            </td>

        `;


        tbody.appendChild(
            row
        );

    });


    const revenue =
        sales.reduce(
            (sum, sale) =>
                sum +
                Number(sale.total),
            0
        );


    document.getElementById(
        "historyRevenue"
    ).textContent =
        formatCurrency(
            revenue
        );

}


/* =========================================================
   DELETE SALE
   ========================================================= */

function deleteSale(id) {

    const sale =
        sales.find(
            item =>
                item.id === id
        );


    if (!sale) return;


    if (
        !confirm(
            t("deleteSaleConfirm")
        )
    ) {

        return;

    }


    const product =
        products.find(
            item =>
                item.id ===
                sale.productId
        );


    if (product) {

        product.quantity +=
            sale.quantity;

    }


    sales =
        sales.filter(
            item =>
                item.id !== id
        );


    saveData();


    refreshAll();


    showToast(
        t("stockRestored")
    );

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function updateDashboard() {

    document.getElementById(
        "totalProducts"
    ).textContent =
        products.length;


    const stock =
        products.reduce(
            (sum, product) =>
                sum +
                Number(product.quantity),
            0
        );


    document.getElementById(
        "totalStock"
    ).textContent =
        stock;


    const todaySales =
        sales.filter(
            sale =>
                isToday(sale.date)
        );


    document.getElementById(
        "todaySales"
    ).textContent =
        todaySales.length;


    const todayRevenue =
        todaySales.reduce(
            (sum, sale) =>
                sum +
                Number(sale.total),
            0
        );


    document.getElementById(
        "todayRevenue"
    ).textContent =
        formatCurrency(
            todayRevenue
        );


    renderLowStock();

    renderRecentSales();

}


/* =========================================================
   LOW STOCK
   ========================================================= */

function renderLowStock() {

    const container =
        document.getElementById(
            "lowStockList"
        );


    const low =
        products.filter(
            product =>
                Number(product.quantity) <=
                Number(product.minimumStock)
        );


    container.innerHTML = "";


    if (!low.length) {

        container.innerHTML = `

            <div class="empty-state">

                ${t("allEnough")}

            </div>

        `;

        return;

    }


    low.forEach(product => {

        const item =
            document.createElement(
                "div"
            );


        item.className =
            "low-stock-item";


        item.innerHTML = `

            <div>

                <div class="item-name">

                    ${escapeHTML(
                        product.name
                    )}

                </div>

                <div class="item-info">

                    ${t("minimum")}:
                    ${product.minimumStock}

                </div>

            </div>


            <div class="stock-warning">

                ${product.quantity}
                ${t("left")}

            </div>

        `;


        container.appendChild(
            item
        );

    });

}


/* =========================================================
   RECENT SALES
   ========================================================= */

function renderRecentSales() {

    const container =
        document.getElementById(
            "recentSalesList"
        );


    container.innerHTML = "";


    const recent =
        sales.slice(0, 5);


    if (!recent.length) {

        container.innerHTML = `

            <div class="empty-state">

                ${t("noSalesYet")}

            </div>

        `;

        return;

    }


    recent.forEach(sale => {

        const item =
            document.createElement(
                "div"
            );


        item.className =
            "recent-sale-item";


        item.innerHTML = `

            <div>

                <div class="item-name">

                    ${escapeHTML(
                        sale.productName
                    )}

                </div>

                <div class="item-info">

                    ${sale.quantity}
                    ×
                    ${formatCurrency(
                        sale.unitPrice
                    )}

                </div>

            </div>


            <div class="sale-value">

                ${formatCurrency(
                    sale.total
                )}

            </div>

        `;


        container.appendChild(
            item
        );

    });

}


/* =========================================================
   CURRENT DATE
   ========================================================= */

function updateCurrentDate() {

    document.getElementById(
        "currentDate"
    ).textContent =
        new Date().toLocaleDateString(
            currentLanguage === "si"
                ? "si-LK"
                : "en-LK",
            {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        );

}


/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =========================================================
   REFRESH ALL
   ========================================================= */

function refreshAll() {

    renderProducts(
        document.getElementById(
            "productSearch"
        ).value
    );


    renderCashier();


    renderSalesHistory();


    updateDashboard();


    updatePageTexts();

}


/* =========================================================
   INITIALIZE
   ========================================================= */

document.getElementById(
    "languageSelect"
).value =
    currentLanguage;


applyLanguage();

refreshAll();