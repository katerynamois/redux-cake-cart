# Eclaire shop

A small React shop for eclairs.

**Live demo:** https://redux-cake-cart.vercel.app/

## Features

- **Home:** shows the current profit. "Sell Eclair" adds $5 and "Buy Ingredients" subtracts $2.
- **Shop:** fetches eclairs from an external API and shows name, image, description, price and an "Add to Cart" button.
- **Cart:** shows the selected eclairs with quantity. Use **+** to add another of the same item and **−** to remove one. Also shows the total items and total price.
- **Checkout:** shows an order summary. "Place Order" clears the cart and goes back to Home. If the cart is empty, Checkout shows a message instead.
- **Navigation:** a shared menu with a cart count. Pages change without reloading the whole app.

## Tech

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/): `cartSlice` and `profitSlice`, read with `useSelector` and changed with `useDispatch`
- [React Router](https://reactrouter.com/): routes for `/`, `/shop`, `/cart` and `/checkout`
- [Bootstrap](https://getbootstrap.com/) + custom CSS
- API: my own API on [MockAPI](https://mockapi.io/):
  `https://6abe4f88c4d5ac54830261cc.mockapi.io/eclairs`

## Install and run

You need [Node.js](https://nodejs.org/) 20.19 or newer.

```bash
git clone https://github.com/katerynamois/redux-cake-cart.git
cd redux-cake-cart
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

Other commands:

| Command | What it does |
|---|---|
| `npm run build` | Builds the app for production into `dist/` |
| `npm run preview` | Runs the production build locally |

## Project structure

```
src/
├── components/
│   ├── Layout.jsx      # Navbar + the current page (<Outlet />)
│   ├── Navbar.jsx      # Menu links and cart button with count
│   ├── CakeList.jsx    # Fetches éclairs from the API and shows them
│   └── Cart.jsx        # Cart with + / − and totals (used as the /cart page)
├── pages/
│   ├── Home.jsx        # Profit and sell/buy buttons
│   ├── Shop.jsx
│   └── Checkout.jsx
├── redux/
│   ├── store.js
│   ├── cartSlice.js
│   └── profitSlice.js
├── App.jsx             # Routes
└── main.jsx            # Redux Provider + BrowserRouter
```

## Deployment

The app is deployed on [Vercel](https://vercel.com/). `vercel.json` sends every URL to `index.html`, so pages like `/shop` also work when you reload them.
