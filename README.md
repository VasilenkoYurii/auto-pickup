# Auto Pickup

Auto Pickup is a web application that allows users to search for cars based on various criteria and perform local pagination. It also provides functionality for managing the car list, including adding, editing, and deleting cars.

---

### Technologies Used

#### Frontend

- React: A JavaScript library for building user interfaces.
- React Router: A library for routing in React applications.
- Redux: A predictable state container for managing application state.
- React Redux: Official React bindings for Redux.
- Redux Toolkit: A package that simplifies Redux development.
- Axios: A library for making HTTP requests.
- Ant Design: A UI library with pre-designed components.
- Emotion: A library for writing CSS styles with JavaScript.
- React Icons: A library of icons for React applications.

#### Backend

- Express: A fast and minimalist web application framework for Node.js.
- Mongoose: An object data modeling (ODM) library for MongoDB and Node.js.
- MongoDB: A popular NoSQL database for storing and retrieving data.
- CORS: A package for enabling Cross-Origin Resource Sharing.
- dotenv: A package for loading environment variables from a .env file.

---

#### Frontend Setup

- Install Node.js and npm (Node Package Manager) if you haven't already.
- Navigate to the project directory `cd client`.
- Run `npm install` to install the project dependencies.
- You need to go to `redux/operations.js` and change axios.defaults.baseURL = ${window.location.origin} to axios.defaults.baseURL = `http://localhost:3001`.
- Run `npm start` to start the development server.
- Open your browser and go to `http://localhost:3000` to access the application.

#### Backend Setup

- Install Node.js and npm (Node Package Manager) if you haven't already.
- Navigate to the project directory `cd server`.
- Run `npm install` to install the project dependencies.
- Run `npm star`t to start the server in production mode or `npm run start:dev` for development mode.

---

### Functionality

Auto Pickup provides the following features:

1. Search for cars based on the following criteria:

- Company
- Model
- VIN
- Color
- Year
- Price
- Availability

2. Local pagination of the car list.
3. Customizable number of cars to display per page.
4. Create, update, and delete cars in the list.
5. Custom API for handling requests and asynchronous actions.
6. Integration with MongoDB for data storage.
7. Feel free to explore the application and use its features to find and manage cars according to your preferences.
