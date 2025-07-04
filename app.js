// Application State
const appState = {
  currentSection: 'home',
  currentRestaurant: null,
  cart: [],
  deliveryOrders: [],
  studentOrders: [],
  myDeliveries: [],
  totalEarnings: 0,
  orderTimers: {}, 
  isCartOpen: false
};

// Yoda Quotes for loading screen
const yodaQuotes = [
  "Late, you are. 900 years, waited I have not. Refund, I seek.",
  "Thin crust, it must be. Pineapple? A path to the dark side, that is.",
  "Hmm… hungry, I am. Deliver, you must. Extra spice, no fear I have",
  "Warm it is, fresh it feels. Five stars, you must leave, hmm?"
];

// Restaurant Data
const restaurantData = {
  "restaurants": [
    {
      "id": "north-square",
      "name": "North Square",
      "image": "NorthSquare.jpg",
      "location": "Near AB1 & AB3",
      "hours": "10:00 AM - 10:00 PM",
      "menu": [
        {"id":"ns1","name":"Maggi","price":30,"prepTime":10,"image":"https://yummyindiankitchen.com/wp-content/uploads/2020/04/maggi-noodles-recipe-vegetable-maggi-noodles.jpg"},
        {"id":"ns2","name":"Samosa Chat","price":50,"prepTime":5,"image":"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/samosa.webp?updatedAt=1727156367955"},
        {"id":"ns3","name":"Softie","price":25,"prepTime":2,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfX6q4AiI2oIpZ2TlhhGqszLAcdb4y9KTevQ&s"},
        {"id":"ns4","name":"Cold Coffee","price":30,"prepTime":2,"image":"https://www.whiskaffair.com/wp-content/uploads/2021/03/Cold-Coffee-2-3-500x500.jpg"},
        {"id":"ns5","name":"Ice Tea","price":30,"prepTime":2,"image":"https://www.everydaycheapskate.com/wp-content/uploads/20240705-how-to-make-iced-tea-glass-with-ice-cubes-and-sliced-and-whole-lemons-500x500.png"},
        {"id":"ns6","name":"Shawarma","price":100,"prepTime":10,"image":"https://www.cookwell.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fg1s4qnmz%2Fproduction%2F86ea7cc20cf83221e5a00e50828bab494c12f011-1364x1125.png&w=3840&q=75"},
        {"id":"ns7","name":"Chicken Fried Rice","price":70,"prepTime":20,"image":"https://theyummydelights.com/wp-content/uploads/2024/03/schezwan-chicken-fried-rice.jpg"},
        {"id":"ns8","name":"White Sause Pasta","price":90,"prepTime":30,"image":"https://www.cookingwithsiddhi.com/wp-content/uploads/2017/12/white-sauce-pasta-1024x682.jpg"},
        {"id":"ns9","name":"Oreo","price":10,"prepTime":1,"image":"https://www.bbassets.com/media/uploads/p/l/277584_46-cadbury-oreo-creme-biscuit-vanilla-original.jpg"},
        {"id":"ns10","name":"Panner Wrap","price":60,"prepTime":2,"image":"https://www.indianhealthyrecipes.com/wp-content/uploads/2024/02/paneer-kathi-roll-recipe.jpg"}
      ]
    },
    {
      "id": "gazebo",
      "name": "Gazebo",
      "image": "Gazebo.jpg",
      "location": "Opp to Clock Court",
      "hours": "7:00 AM - 9:00 PM",
      "menu": [
        {"id":"gz1","name":"Veg Patty Wrap","price":80,"prepTime":5,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBAmbj4hDXaQSZCVyimh-KzmjMgCqL23RRA&s"},
        {"id":"gz2","name":"Chicken 65 Wrap","price":100,"prepTime":5,"image":"https://paradisefoodcourt.wordpress.com/wp-content/uploads/2015/03/ch-roll1.png"},
        {"id":"gz3","name":"Chicken Burger","price":80,"prepTime":7,"image":"https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg"},
        {"id":"gz4","name":"Chicken Sub","price":90,"prepTime":7,"image":"https://tastegreatfoodie.com/wp-content/uploads/2023/12/Easy-Grilled-Chicken-Sub-Sandwich.jpeg"},
        {"id":"gz5","name":"Sev Puri","price":60,"prepTime":5,"image":"https://i0.wp.com/sinfully-desilicious.com/wp-content/uploads/2020/09/8f.jpg?resize=525%2C528&ssl=1"},
        {"id":"gz6","name":"Bhel Puri","price":60,"prepTime":5,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReVP6b6W1DnTFoXHT8ur2LqEe09Q7h0h48oQ&s"},
        {"id":"gz7","name":"Cookies and Cream","price":70,"prepTime":7,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrUlgsUatyRYBrq4UG4VFb7RXXjeUa2XxKQg&s"},
        {"id":"gz8","name":"Lime Soda","price":30,"prepTime":5,"image":"https://createmindfully.com/wp-content/uploads/2016/05/easy-homemade-lemon-lime-soda-vertical.jpg"},
        {"id":"gz9","name":"Chicken Biryani","price":150,"prepTime":10,"image":"https://vaya.in/recipes/wp-content/uploads/2018/03/South-Indian-Chicken-Biryani.jpg"},
        {"id":"gz10","name":"Jim Jam","price":10,"prepTime":1,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFcPbjyby2tnVbDTevCPUW7y_dZjQ1XCcC2A&s"},
      ]
    },
    {
      "id": "dominos",
      "name": "Dominos",
      "image": "Dominos.jpg",
      "location": "Next to GymKhana",
      "hours": "11:00 AM - 11:00 PM",
      "menu": [
        {"id":"dm1","name":"Margherita Pizza","price":99,"prepTime":15,"image":"https://www.yumcurry.com/wp-content/uploads/2020/06/pizza-margherita-recipe.jpg"},
        {"id":"dm2","name":"Farmhouse Pizza","price":299,"prepTime":18,"image":"https://www.jvsfc.com/wp-content/uploads/2023/03/Farm-House-Pizza.jpg"},
        {"id":"dm3","name":"Peppy Paneer","price":369,"prepTime":18,"image":"https://www.dominos.co.in//files/items/Peppy_Paneer.jpg"},
        {"id":"dm4","name":"Chicken Dominator","price":399,"prepTime":20,"image":"https://5.imimg.com/data5/DM/ES/MY-29540739/chicken-dominator.png"},
        {"id":"dm5","name":"Mexican Green Wave","price":299,"prepTime":17,"image":"https://www.dominos.co.in//files/items/Mexican_Green_Wave.jpg"},
        {"id":"dm6","name":"Paneer Makhani","price":369,"prepTime":19,"image":"https://www.dominos.co.in//files/items/Paneer_Makhni.jpg"},
        {"id":"dm7","name":"Burger Pizza","price":129,"prepTime":10,"image":"https://www.dominos.co.in/files/items/160790_Burger_Pizza_427X298_Pixel.jpg"},
        {"id":"dm8","name":"Garlic Bread","price":99,"prepTime":8,"image":"https://myfoodstory.com/wp-content/uploads/2020/12/Dominos-Style-Garlic-Breadsticks-4.jpg"},
        {"id":"dm9","name":"Taco Mexicana","price":129,"prepTime":9,"image":"https://www.dominos.co.in//files/items/Main_Menu-VG.jpg"},
        {"id":"dm10","name":"Chocolate Lava Cake","price":99,"prepTime":6,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRErc15hSHUUqgmtnKVltUsI3hIFPGy1a062w&s"}
      ]
    },
    {
      "id": "gymkhana",
      "name": "GymKhana",
      "image": "GymKhana.jpg",
      "location": "Near D1 Hostel",
      "hours": "8:00 AM - 10:00 PM",
      "menu": [
        {"id":"gk1","name":"Chicken Biriyani","price":140,"prepTime":15,"image":"https://vaya.in/recipes/wp-content/uploads/2018/03/South-Indian-Chicken-Biryani.jpg"},
        {"id":"gk2","name":"Veg Cutlet","price":25,"prepTime":5,"image":"https://mayuris-jikoni.com/wp-content/uploads/2024/10/vegetable-cutlets-1-copy.jpg"},
        {"id":"gk3","name":"Butter Naan","price":35,"prepTime":10,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqBzo1FOVC7vilmZdIqrCWXg4uKsBNV_OjQ&s"},
        {"id":"gk4","name":"Vada Pav","price":40,"prepTime":5,"image":"https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav-1024x538.png"},
        {"id":"gk5","name":"Butter Milk","price":30,"prepTime":5,"image":"https://www.indianveggiedelight.com/wp-content/uploads/2023/01/masala-chaas-featured.jpg"},
        {"id":"gk6","name":"Vanilla Ice-cream","price":40,"prepTime":5,"image":"https://tarateaspoon.com/wp-content/uploads/2021/06/Vanilla-Ice-Cream-oh-horiz.jpg"},
        {"id":"gk7","name":"Kadai Chicken","price":130,"prepTime":15,"image":"https://i.ytimg.com/vi/AJHP0yKqM4Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDA5zDZoG-e4YjUGMpkE3ovapK43A"},
        {"id":"gk8","name":"Paneer Butter Masala","price":130,"prepTime":15,"image":"https://myfoodstory.com/wp-content/uploads/2021/07/Paneer-Butter-Masala-3.jpg"},
        {"id":"gk9","name":"Gobi Noodles","price":80,"prepTime":15,"image":"https://selfiefamily.com/wp-content/uploads/2023/04/Gobi-Noodles.jpg"},
        {"id":"gk10","name":"Mushroom Noodles","price":90,"prepTime":15,"image":"https://chiliinapod.com/wp-content/uploads/2021/12/117A1537-1-scaled.jpg"}
      ]
    }
  ],
  "deliveryLocations": ["Ab1","Ab2","Ab3","Ab4","Admin Building"],
  "optionalLocations": ["B1 Block","C1 Block","D1 Block"],
  "earningsPerOrderRange": [40,70]
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
  showSplashScreen();
  setupEventListeners();
  generateDeliveryOrders();
  updateLightsaber();
});

// Splash Screen Functions
function showSplashScreen() {
  const yodaQuoteElement = document.getElementById('yoda-quote');
  const randomQuote = yodaQuotes[Math.floor(Math.random() * yodaQuotes.length)];
  yodaQuoteElement.textContent = randomQuote;
  
  setTimeout(() => {
    const splashScreen = document.getElementById('splash-screen');
    splashScreen.style.opacity = '0';
    setTimeout(() => {
      splashScreen.style.display = 'none';
      initializeApp();
    }, 1000);
  }, 6000);
}

function initializeApp() {
  populateRestaurantCarousel();
  populateRestaurantsGrid();
  populateAvailableOrders();
  updateCartDisplay();
}

// Event Listeners
function setupEventListeners() {
  // Scroll event for lightsaber and header
  window.addEventListener('scroll', () => {
    updateLightsaber();
    updateHeaderOnScroll();
  });

  // Menu filters
  document.addEventListener('change', (e) => {
    if (e.target.id === 'sort-select') {
      sortMenuItems();
    }
  });

  document.addEventListener('input', (e) => {
    if (e.target.id === 'search-input') {
      filterMenuItems();
    }
  });
}

// Lightsaber Animation
function updateLightsaber() {
  const blade = document.getElementById('lightsaber-blade');
  const scrollPercent = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
  const maxHeight = 300;
  const currentHeight = scrollPercent * maxHeight;
  blade.style.height = currentHeight + 'px';
}

// Header Scroll Effect
function updateHeaderOnScroll() {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Navigation Functions
function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  
  // Show selected section
  const targetSection = document.getElementById(sectionName + '-section');
  if (targetSection) {
    targetSection.style.display = 'block';
    appState.currentSection = sectionName;
  }
  
  // Scroll to top
  window.scrollTo(0, 0);
}

function showOrdersTab(tabName) {
  document.querySelectorAll('.orders-content').forEach(el => el.style.display = 'none');
  document.getElementById(`${tabName}-orders`).style.display = 'block';
  
  document.querySelectorAll('.myorders-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.myorders-tabs .tab-btn[onclick="showOrdersTab('${tabName}')"]`).classList.add('active');
}


// Restaurant Functions
function populateRestaurantCarousel() {
  const carousel = document.getElementById('restaurant-carousel');
  carousel.innerHTML = '';
  
  restaurantData.restaurants.forEach(restaurant => {
    const card = createRestaurantCard(restaurant);
    carousel.appendChild(card);
  });
}

function populateRestaurantsGrid() {
  const grid = document.getElementById('restaurants-grid');
  grid.innerHTML = '';
  
  restaurantData.restaurants.forEach(restaurant => {
    const card = createRestaurantCard(restaurant);
    grid.appendChild(card);
  });
}

function createRestaurantCard(restaurant) {
  const card = document.createElement('div');
  card.className = 'restaurant-card';
  card.onclick = () => showRestaurantDetail(restaurant.id);
  
  card.innerHTML = `
    <img src="${restaurant.image}" alt="${restaurant.name}">
    <div class="restaurant-card-content">
      <h3>${restaurant.name}</h3>
      <p>${restaurant.location}</p>
    </div>
  `;
  
  return card;
}

function showRestaurantDetail(restaurantId) {
  const restaurant = restaurantData.restaurants.find(r => r.id === restaurantId);
  if (!restaurant) return;
  
  appState.currentRestaurant = restaurant;
  
  const detailContainer = document.getElementById('restaurant-detail');
  detailContainer.innerHTML = `
    <div class="restaurant-poster">
      <img src="${restaurant.image}" alt="${restaurant.name}">
    </div>
    <div class="restaurant-info">
      <h2>${restaurant.name}</h2>
      <p><strong>Location:</strong> ${restaurant.location}</p>
      <p><strong>Hours:</strong> ${restaurant.hours}</p>
      
      <div class="menu-filters">
        <input type="text" id="search-input" class="filter-input" placeholder="Search food items...">
        <select id="sort-select" class="filter-select">
          <option value="name">Sort by Name</option>
          <option value="price-low">Sort by Price (Low to High)</option>
          <option value="price-high">Sort by Price (High to Low)</option>
          <option value="time">Sort by Prep Time</option>
        </select>
      </div>
      
      <div class="menu-grid" id="menu-grid">
        ${restaurant.menu.map(item => createMenuItemHTML(item)).join('')}
      </div>
    </div>
  `;
  
  showSection('restaurant-detail');
}

function createMenuItemHTML(item) {
  return `
    <div class="menu-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="menu-item-content">
        <h4>${item.name}</h4>
        <div class="menu-item-details">
          <span class="menu-item-price">₹${item.price}</span>
          <span class="menu-item-time">${item.prepTime} mins</span>
        </div>
        <button class="add-to-cart-btn" onclick="addToCart('${item.id}')">Add to Cart</button>
      </div>
    </div>
  `;
}

function filterMenuItems() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    const itemName = item.querySelector('h4').textContent.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function sortMenuItems() {
  const sortBy = document.getElementById('sort-select').value;
  const menuGrid = document.getElementById('menu-grid');
  const items = Array.from(menuGrid.children);
  
  items.sort((a, b) => {
    const aName = a.querySelector('h4').textContent;
    const aPrice = parseInt(a.querySelector('.menu-item-price').textContent.replace('₹', ''));
    const aTime = parseInt(a.querySelector('.menu-item-time').textContent.replace(' mins', ''));
    
    const bName = b.querySelector('h4').textContent;
    const bPrice = parseInt(b.querySelector('.menu-item-price').textContent.replace('₹', ''));
    const bTime = parseInt(b.querySelector('.menu-item-time').textContent.replace(' mins', ''));
    
    switch(sortBy) {
      case 'name':
        return aName.localeCompare(bName);
      case 'price-low':
        return aPrice - bPrice;
      case 'price-high':
        return bPrice - aPrice;
      case 'time':
        return aTime - bTime;
      default:
        return 0;
    }
  });
  
  menuGrid.innerHTML = '';
  items.forEach(item => menuGrid.appendChild(item));
}

// Cart Functions
function addToCart(itemId) {
  const restaurant = appState.currentRestaurant;
  const item = restaurant.menu.find(menuItem => menuItem.id === itemId);
  
  if (!item) return;
  
  const existingItem = appState.cart.find(cartItem => cartItem.id === itemId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    appState.cart.push({
      ...item,
      quantity: 1,
      restaurantName: restaurant.name
    });
  }
  
  updateCartDisplay();
  showCartNotification();
}

function removeFromCart(itemId) {
  appState.cart = appState.cart.filter(item => item.id !== itemId);
  updateCartDisplay();
}

function updateCartQuantity(itemId, change) {
  const item = appState.cart.find(cartItem => cartItem.id === itemId);
  if (!item) return;
  
  item.quantity += change;
  
  if (item.quantity <= 0) {
    removeFromCart(itemId);
  } else {
    updateCartDisplay();
  }
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  const cartContent = document.getElementById('cart-content');
  const cartTotal = document.getElementById('cart-total');
  
  const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  cartCount.textContent = totalItems;
  cartTotal.textContent = totalPrice;
  
  if (appState.cart.length === 0) {
    cartContent.innerHTML = '<p style="text-align: center; color: #ccc; margin-top: 2rem;">Your cart is empty</p>';
  } else {
    cartContent.innerHTML = appState.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p style="color: #ccc; font-size: 0.9rem;">${item.restaurantName}</p>
          <div class="cart-item-price">₹${item.price * item.quantity}</div>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">-</button>
          <span style="color: #ffe81f; margin: 0 1rem;">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
    `).join('');
  }
}

function toggleCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartOverlay = document.getElementById('cart-overlay');
  
  appState.isCartOpen = !appState.isCartOpen;
  
  if (appState.isCartOpen) {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
  } else {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
  }
}

function showCartNotification() {
  // Simple notification - could be enhanced with toast
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #00ff00;
    color: #000;
    padding: 1rem;
    border-radius: 5px;
    z-index: 3000;
    font-weight: bold;
  `;
  notification.textContent = 'Item added to cart!';
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 2000);
}
function renderStudentOrders() {
    const activeContainer = document.getElementById('active-orders');
    const previousContainer = document.getElementById('previous-orders');

    activeContainer.innerHTML = '';
    previousContainer.innerHTML = '';

    if (appState.studentOrders.length === 0) {
        activeContainer.innerHTML = '<p style="margin-top: 1rem; color: #ccc;">No active orders yet.</p>';
        previousContainer.innerHTML = '<p style="margin-top: 1rem; color: #ccc;">No previous orders yet.</p>';
        return;
    }

    appState.studentOrders.forEach(order => {
        const html = `
          <div class="order-card">
            <h4>Order ID: ${order.id}</h4>
            <p><strong>Items:</strong> ${order.items.map(i => i.name).join(', ')}</p>
            <p><strong>Delivery:</strong> ${order.location}</p>
            <p><strong>Total:</strong> ₹${order.total}</p>
            <p><strong>Estimated Delivery:</strong> ${order.estimatedDelivery} minutes</p>
            <p><strong>Status:</strong> <span class="status-badge status-${order.status}">${order.status.replace(/-/g,' ')}</span></p>
            ${order.status === 'delivered' && order.rating === null ? `
              <div class="rating-area">
              <label for="rating-${order.id}">Rate this delivery:</label>
              <select id="rating-${order.id}" onchange="submitRating('${order.id}')">
                <option value="">Select</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
              </select>
            <textarea id="feedback-${order.id}" placeholder="Optional feedback"></textarea>
            <button class="btn btn--sm btn--secondary" onclick="submitRating('${order.id}')">Submit</button>
            </div>
            ` : order.rating !== null ? `
            <p><strong>Rating:</strong> ${'⭐'.repeat(order.rating)}</p>
            ${order.feedback ? `<p><strong>Feedback:</strong> ${order.feedback}</p>` : ''}
            ` : ''}

            ${
              (order.status === 'confirmed' || order.status === 'preparing') 
              ? `<button class="btn btn--secondary btn--sm" onclick="cancelOrder('${order.id}')">Cancel Order</button>`
              : ''
            }
          </div>
        `;
        

        if (['confirmed', 'preparing', 'ready', 'out-for-delivery'].includes(order.status)) {
          activeContainer.innerHTML += html;
        } else if (order.status === 'delivered') {
          previousContainer.innerHTML += html;
        }

    });
}

function submitRating(orderId) {
  const order = appState.studentOrders.find(o => o.id === orderId);
  if (!order) return;

  const ratingValue = document.getElementById(`rating-${orderId}`).value;
  const feedbackValue = document.getElementById(`feedback-${orderId}`).value;

  if (!ratingValue) {
    alert('Please select a star rating.');
    return;
  }

  order.rating = parseInt(ratingValue);
  order.feedback = feedbackValue || null;

  alert(`Thanks for rating your delivery with ${order.rating} star(s)!`);

  renderStudentOrders();
  updateDeliveryPersonProfile(order.rating);
}

function updateDeliveryPersonProfile(newRating) {
  appState.deliveryPersonProfile.totalDeliveries++;
  appState.deliveryPersonProfile.totalEarnings += 50; // or get actual order earnings
  appState.deliveryPersonProfile.ratings.push(newRating);
}

function cancelOrder(orderId) {
  if (appState.orderTimers[orderId]) {
    appState.orderTimers[orderId].forEach(tid => clearTimeout(tid));
    delete appState.orderTimers[orderId];
  }

  // remove from studentOrders
  appState.studentOrders = appState.studentOrders.filter(o => o.id !== orderId);

  // remove from delivery pool
  appState.deliveryOrders = appState.deliveryOrders.filter(o => o.id !== orderId);

  alert(`Your order ${orderId} has been cancelled.`);

  renderStudentOrders();
  populateAvailableOrders();
}


function orderNow() {
    if (appState.cart.length === 0) {
        alert('Your cart is empty, young Padawan!');
        return;
    }

    const selectedLocation = document.getElementById('delivery-location').value;
    if (!selectedLocation) {
        alert('Please select a delivery location before placing your order.');
        return;
    }

    // create the order
    const newOrder = {
        id: `order-${Date.now()}`,
        items: [...appState.cart],
        location: selectedLocation,
        total: appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        status: 'confirmed', // progress starts here
        estimatedDelivery: Math.floor(Math.random() * 25 + 20), // 20-45 min
        rating: null, // rating to be added later
        feedback: null
    };

    appState.studentOrders.push(newOrder);

    // ALSO push to delivery pool
    appState.deliveryOrders.push({
        id: newOrder.id,
        restaurantName: newOrder.items[0].restaurantName,
        itemName: newOrder.items.map(i => i.name).join(', '),
        pickupLocation: newOrder.items[0].restaurantName,
        dropLocation: newOrder.location,
        earnings: Math.floor(Math.random() * 30 + 40),
        isReady: false,
        status: 'available'
    });

    appState.cart = [];
    updateCartDisplay();
    toggleCart();
    alert(`May the forks be with you! Your order will be delivered to ${selectedLocation}.`);

    // kick off progress tracking timers
    trackOrderProgress(newOrder.id);

    renderStudentOrders();
}

function trackOrderProgress(orderId) {
    const order = appState.studentOrders.find(o => o.id === orderId);
    if (!order) return;

    appState.orderTimers[orderId] = [];

    const t1 = setTimeout(() => {
        order.status = 'preparing';
        renderStudentOrders();
    }, 5000);
    appState.orderTimers[orderId].push(t1);

    const t2 = setTimeout(() => {
        order.status = 'ready';
        renderStudentOrders();
    }, 15000);
    appState.orderTimers[orderId].push(t2);

    const t3 = setTimeout(() => {
        order.status = 'out-for-delivery';
        renderStudentOrders();
    }, 30000);
    appState.orderTimers[orderId].push(t3);

    const t4 = setTimeout(() => {
        order.status = 'delivered';
        renderStudentOrders();
    }, 50000);
    appState.orderTimers[orderId].push(t4);
}



// Delivery Functions
function generateDeliveryOrders() {
  const orders = [];
  const locations = [...restaurantData.deliveryLocations, ...restaurantData.optionalLocations];
  
  for (let i = 0; i < 8; i++) {
    const restaurant = restaurantData.restaurants[Math.floor(Math.random() * restaurantData.restaurants.length)];
    const menuItem = restaurant.menu[Math.floor(Math.random() * restaurant.menu.length)];
    const pickupLocation = restaurant.location;
    const dropLocation = locations[Math.floor(Math.random() * locations.length)];
    const earnings = Math.floor(Math.random() * (restaurantData.earningsPerOrderRange[1] - restaurantData.earningsPerOrderRange[0] + 1)) + restaurantData.earningsPerOrderRange[0];
    const isReady = Math.random() > 0.5;
    if (!isReady) {
      const randomTime = Math.floor(Math.random() * 20000) + 10000; // 10s to 30s
      setTimeout(() => {
        order.isReady = true;
        populateAvailableOrders(); // refresh the delivery page
      }, randomTime);
    }

    
    orders.push({
      id: `order-${i + 1}`,
      restaurantName: restaurant.name,
      itemName: menuItem.name,
      pickupLocation,
      dropLocation,
      earnings,
      isReady,
      status: 'available'
    });
  }
  
  appState.deliveryOrders = orders;
}

function populateAvailableOrders() {
  const grid = document.getElementById('available-orders-grid');
  grid.innerHTML = '';
  
  appState.deliveryOrders.forEach(order => {
    if (order.status === 'available') {
      const orderCard = createOrderCard(order);
      grid.appendChild(orderCard);
    }
  });
}

function createOrderCard(order) {
  const card = document.createElement('div');
  card.className = 'order-card';
  
  card.innerHTML = `
    <div class="order-info">
      <h4>${order.restaurantName}</h4>
      <p><strong>Item:</strong> ${order.itemName}</p>
      <div class="order-route">
        <strong>Route:</strong> ${order.pickupLocation} → ${order.dropLocation}
      </div>
      <div class="order-earnings">Earnings: ₹${order.earnings}</div>
      <div class="order-status">
        <span class="${order.isReady ? 'status-ready' : 'status-pending'}">
          ${order.isReady ? '✓ Food Ready' : '⏳ Preparing'}
        </span>
      </div>
    </div>
    <button class="accept-btn" onclick="acceptOrder('${order.id}')">Accept Order</button>
  `;
  
  return card;
}

function acceptOrder(orderId) {
  const order = appState.deliveryOrders.find(o => o.id === orderId);
  if (!order) return;
  
  order.status = 'accepted';
  order.currentStep = 'accepted';
  appState.myDeliveries.push(order);
  
  populateAvailableOrders();
  populateMyDeliveries();
  
  alert(`Order accepted! Pickup from ${order.pickupLocation} and deliver to ${order.dropLocation}`);
}

function populateMyDeliveries() {
  const grid = document.getElementById('my-orders-grid');
  grid.innerHTML = '';
  
  appState.myDeliveries.forEach(order => {
    const orderCard = createMyDeliveryCard(order);
    grid.appendChild(orderCard);
  });
}

function createMyDeliveryCard(order) {
  const card = document.createElement('div');
  card.className = 'order-card';
  
  const steps = ['accepted', 'picked', 'delivered'];
  const currentStepIndex = steps.indexOf(order.currentStep || 'accepted');
  
  card.innerHTML = `
    <div class="order-info">
      <h4>${order.restaurantName}</h4>
      <p><strong>Item:</strong> ${order.itemName}</p>
      <div class="order-route">
        <strong>Route:</strong> ${order.pickupLocation} → ${order.dropLocation}
      </div>
      <div class="order-earnings">Earnings: ₹${order.earnings}</div>
      <div class="order-status">
        <p><strong>Status:</strong> ${getStatusText(order.currentStep)}</p>
        <div style="margin-top: 1rem;">
          ${order.currentStep === 'accepted' ? `
            <button class="accept-btn" onclick="updateDeliveryStatus('${order.id}', 'picked')" 
                    ${!order.isReady ? 'disabled' : ''}>
              ${order.isReady ? 'Mark as Picked' : 'Waiting for Food'}
            </button>
          ` : ''}
          ${order.currentStep === 'picked' ? `
            <button class="accept-btn" onclick="updateDeliveryStatus('${order.id}', 'delivered')">
              Mark as Delivered
            </button>
          ` : ''}
          ${order.currentStep === 'delivered' ? `
            <div style="color: #00ff00; font-weight: bold;">✓ Completed - ₹${order.earnings} earned</div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
  
  return card;
}

function getStatusText(status) {
  switch(status) {
    case 'accepted': return 'Order Accepted';
    case 'picked': return 'Food Picked Up';
    case 'delivered': return 'Delivered';
    default: return 'Unknown';
  }
}

function updateDeliveryStatus(orderId, newStatus) {
  const order = appState.myDeliveries.find(o => o.id === orderId);
  if (!order) return;
  
  order.currentStep = newStatus;
  
  if (newStatus === 'delivered') {
    appState.totalEarnings += order.earnings;
    document.getElementById('total-earnings').textContent = appState.totalEarnings;
  }
  
  populateMyDeliveries();
}

function showDeliveryTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Show/hide content
  document.getElementById('available-orders').style.display = tabName === 'available' ? 'block' : 'none';
  document.getElementById('my-orders').style.display = tabName === 'my-orders' ? 'block' : 'none';
}