# Food-App

Food-App is a simple React application that allows users to browse meals, add them to a cart, and proceed to checkout. This app demonstrates the use of React context, custom hooks, and state management with `useReducer,useState,useEffect,useCallBack..`.

## Features

- Browse a list of meals
- Add meals to the cart
- View cart items and total price
- Proceed to checkout and submit an order
- Clear the cart after successful order submission

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbdelhaliemAdham/food-app.git
   cd food-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

- `src/components`: Contains React components such as `Cart`, `CheckOut`, `Meal`, `Meals`, `Modal`, etc.
- `src/store`: Contains context providers for managing cart and progress state.
- `src/hook`: Contains custom hooks like `useHttp` for handling HTTP requests.
- `src/utils`: Contains utility functions like `currencyFormatter`.

## Usage

1. **Browse Meals**: The `Meals` component fetches and displays a list of meals from the server.
2. **Add to Cart**: Click the "Add To Cart" button on a meal to add it to the cart.
3. **View Cart**: Click the cart icon in the header to view the cart items and total price.
4. **Checkout**: Click the "Checkout" button in the cart to proceed to the checkout form.
5. **Submit Order**: Fill out the checkout form and submit the order. The cart will be cleared upon successful submission.

## API Endpoints

- **Meals**: `GET http://localhost:3000/meals`
- **Orders**: `POST http://localhost:3000/orders`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
