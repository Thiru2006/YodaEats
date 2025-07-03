# YodaEats - A Campus Food Delivery Experience

Welcome to **YodaEats**, a themed campus food delivery web application inspired by Star Wars. YodaEats allows students to order food from campus restaurants, and lets others earn credits by delivering the orders.

## Features

- 🛒 **Cart system** with quantity management and total calculation
- 🚚 **Delivery orders** with earnings tracking for delivery staff
- 🍕 **Restaurant listings** and detailed menus
- 🌍 **Delivery location selection** with dropdown inside the cart
- 🎇 Engaging Star Wars themed animations, including lightsaber effects and an opening crawl
- Responsive and modern UI with Star Wars inspired colors and fonts

## Technologies Used

- **HTML** (structure)
- **CSS** (styling, including dark theme support)
- **JavaScript** (functionality and state management)

## Project Structure

```
.
├── index.html          # Main HTML file
├── style.css           # Styling and theming
├── app.js              # All JavaScript logic (state, events, rendering)
```

## Delivery Locations

The app supports selecting delivery locations in the cart from the following list:

- AB1
- AB2
- AB3
- AB4
- Admin Building
- A1 Block
- B1 Block
- C1 Block
- D1 Block

## How to Run

1. Clone the repository:

   ```
   git clone <repository_url>
   ```

2. Open `index.html` directly in your browser.

There is no server dependency; this is a static front-end project.

## Customization

- **Adding new restaurants**: You can edit the `restaurantData` array in `app.js` to add more menu items or restaurants.
- **Changing delivery earnings**: Adjust the `earningsPerOrderRange` in `app.js`.
- **Delivery location list**: Simply change the `<select>` options in the cart section of `index.html`.

## Screenshots

*(Add screenshots here to showcase the UI)*

## License

This project is for educational and personal demonstration purposes.

## Credits

Made with ❤️ by [Your Name]. Star Wars and Yoda references belong to their respective copyright owners.

