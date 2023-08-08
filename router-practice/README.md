# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Contact Management App

This is a contact management app built using React and React Router. It allows users to manage a list of contacts, including adding new contacts, viewing contact details, editing existing contacts, and deleting contacts.
Instructions

Follow the steps below to set up and run the contact management app:

    Create a new React project:
    dsconfig

npm create vite@latest name-of-your-project -- --template react

Install and configure React Router DOM:

React Router DOM is used for routing and navigation in the app. Install it using the following command:

cd <your new project directory>
npm install react-router-dom localforage match-sorter sort-by

Configure React Router in your app by wrapping the root component with a BrowserRouter in the index.js file.

Build the contact management app:

    Create the necessary components for the different routes:
        Home.js - Displays a list of contacts.
        ContactDetails.js - Displays details for a single contact.
        AddContact.js - Form to add a new contact.
        EditContact.js - Form to edit an existing contact.

    Use React Router's Link components for navigation between routes.

    Load contact data on the different routes using React Router loader functions. For example, fetch the contact list in the Home component and pass it as props to the child components.

    Implement create, read, update, and delete functionality for the contacts data. Use appropriate API calls or data management techniques to perform these operations.

    Handle navigation between routes using React Router while maintaining state. For example, after adding or editing a contact, redirect the user to the contact details page.

Run the app:

Start the development server and run the contact management app using the following command:

    npm run dev

    The app will be accessible at http://localhost:3000.

    Push the app to GitHub:

    Push the finished app to your GitHub repository to share it with others.

Dependencies

The contact management app uses the following dependencies:

    React
    React Router DOM

These dependencies are automatically installed when setting up the app using Create React App.
