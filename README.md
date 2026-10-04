# 🛒 Ruchira Communication — Shop Manager

A modern, lightweight **Shop Management & POS (Point of Sale) system** built with **HTML, CSS, and JavaScript**.

The application allows shop owners to manage products, monitor stock, process sales through a cashier-style interface, and store all data locally on the computer using the browser's **LocalStorage**.

---

## ✨ Features

### 📊 Dashboard

Get a quick overview of your shop:

- Total products
- Total stock units
- Low-stock products
- Out-of-stock products
- Today's sales
- Today's revenue
- Recent sales
- Low-stock alerts

---

### 📦 Product Management

Manage your complete product inventory.

Features include:

- Add new products
- Edit existing products
- Delete products
- Product name
- SKU / Product code
- Category
- Selling price
- Stock quantity
- Low-stock threshold
- Product search
- Automatic stock updates

Example:

| Product | SKU | Category | Price | Stock |
|---|---|---|---:|---:|
| USB Cable | USB001 | Accessories | LKR 850 | 25 |
| Wireless Mouse | WM001 | Accessories | LKR 2,500 | 10 |
| Keyboard | KB001 | Computer | LKR 3,500 | 8 |

---

## 🧾 Cashier / POS

The cashier interface is designed like a simple Point of Sale system.

### Product Search

Cashiers can quickly find products using:

- Product name
- SKU
- Category
- Product selection dropdown

### Shopping Cart

The cashier can:

- Add products to cart
- Increase quantity
- Decrease quantity
- Remove products
- See individual subtotals
- See total item count
- See final bill amount

### 💰 Payment

Supports:

- Cash
- Card
- Other payment methods

For cash payments, the system automatically calculates:
Total       : LKR 4,500
Cash        : LKR 5,000
Change      : LKR 500
