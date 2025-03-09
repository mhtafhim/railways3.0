# Railway E-Service Frontend

## Overview
This React-based frontend application serves as the user interface for the Railway E-Service system. It provides a comprehensive platform for users to search, book, and manage train tickets, while also offering administrative capabilities for train scheduling and system management.

## Features

### For Users
- **Train Schedule Viewing:** Browse available trains and their schedules.
- **User Registration/Login:** Create accounts and authenticate using email verification.
- **Ticket Booking:** Search for trains by origin, destination, and date.
- **Seat Selection:** Choose from Economy, Business, or First Class seating.
- **Payment Integration:** Multiple payment methods including Bkash, Nagad, Rocket, Visa, and MasterCard.
- **Live Location Tracking:** Track train locations in real-time (requires API key setup).

### For Administrators
- **Dashboard:** Visualize ticket sales, customer counts, and revenue metrics.
- **Train Management:** Add and update train schedules.
- **Customer Information:** Access user booking details and reports.
- **Sales Reports:** View detailed reports on ticket sales.

## Technology Stack
- **React.js:** Frontend library for building user interfaces.
- **React Router:** For navigation between different components.
- **Axios:** For API requests to the backend server.
- **Recharts:** For data visualization in the admin dashboard.
- **React Icons:** For UI icons throughout the application.
- **Google Maps API:** For live location tracking functionality.

## Project Structure

The application is organized into the following main directories:
```
/components       # Contains all React components
  /Admin         # Administrative interfaces and dashboards
  /Assets        # Images and static resources
  /Hero          # Hero section components
  /Navbar        # Navigation components
  /Pages         # Main page components like booking, login, etc.
```

```
railways3.0/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
│
├── src/
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   │
│   ├── Components/
│   │   ├── Admin/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AddTrain.jsx
│   │   │   ├── ManageSchedule.jsx
│   │   │   ├── SalesReport.jsx
│   │   │   ├── CustomerList.jsx
│   │   │   └── AdminLayout.jsx
│   │   │
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── OTPVerification.jsx
│   │   │
│   │   ├── Booking/
│   │   │   ├── SearchTrains.jsx
│   │   │   ├── TrainList.jsx
│   │   │   ├── TrainDetails.jsx
│   │   │   ├── SeatSelection.jsx
│   │   │   ├── PassengerInfo.jsx
│   │   │   ├── PaymentOptions.jsx
│   │   │   └── BookingConfirmation.jsx
│   │   │
│   │   ├── User/
│   │   │   ├── MyBookings.jsx
│   │   │   ├── UserProfile.jsx
│   │   │   ├── EditProfile.jsx
│   │   │   └── UserDashboard.jsx
│   │   │
│   │   ├── Pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── LocationTracker.jsx
│   │   │   └── FAQ.jsx
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── HeroStyles.css
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── NavbarStyles.css
│   │   │
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── FooterStyles.css
│   │   │
│   │   └── Common/
│   │       ├── Loader.jsx
│   │       ├── ErrorPage.jsx
│   │       ├── Button.jsx
│   │       └── Card.jsx
│   │
│   ├── Assets/
│   │   ├── images/
│   │   │   ├── logo.png
│   │   │   ├── hero-bg.jpg
│   │   │   └── train-icons/
│   │   │
│   │   └── icons/
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useBooking.js
│   │   └── useAPI.js
│   │
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── BookingContext.js
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── bookingService.js
│   │   └── trainService.js
│   │
│   └── utils/
│       ├── dateFormatter.js
│       ├── validations.js
│       ├── localStorage.js
│       └── constants.js
│
├── .gitignore
├── package.json
├── README.md
└── .env
```

## Getting Started

### Prerequisites
- Node.js (version 14.0.0 or above)
- npm or yarn package manager

### Installation

#### Clone the Repository
```sh
git clone https://github.com/mhtafhim/railways3.0.git
cd railways3.0
```

#### Install Dependencies
```sh
npm install
```

#### Start the Development Server
```sh
npm start
```
The application will be available at [http://localhost:3000](http://localhost:3000).

## Configuration
To enable live location tracking, you need to add your Google Maps API key in the `LocationTracker.jsx` file:
```jsx
<LoadScript googleMapsApiKey="YOUR_API_KEY">
```

## API Integration
The frontend connects to a RESTful API for data retrieval and storage. The main API endpoints include:

- **Authentication:** `/api/Reg/login`, `/api/Reg/sign_up`, `/api/Reg/send_otp`
- **Train Schedule:** `/api/Train_Schedule/show_train_schedule`
- **Booking:** `/api/Booking/get_available_trains`, `/api/Booking/add_booking`, `/api/Booking/get_fare`

## Building for Production
To create a production build:
```sh
npm run build
```
This will generate optimized files in the `build` directory.

## Contributing
1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit your changes:** `git commit -m 'Add some amazing feature'`
4. **Push to the branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**
