### THIS IS FORMDASH PACKAGE

# ContactForm React Component

A customizable and easy-to-use contact form component for React applications. This package provides a fully functional contact form with validation and Tailwind CSS styling.

## Features

- **Customizable**: Show or hide form fields (name, email, phone, message).
- **Validation**: Simple validation for required fields and email format.
- **Tailwind CSS**: Styled with Tailwind CSS for a clean and modern look.
- **Easy Integration**: Simple integration with your React app.

## Installation

To install the `contact-form-react` package, use npm or yarn:

```bash
npm install contact-form-react

or

yarn add contact-form-react

Once installed, you can import and use the ContactForm component in your React application.

import { ContactForm } from 'contact-form-react';


Here is an example of how to use the ContactForm component:

import React from 'react';
import { ContactForm } from 'contact-form-react';

const App = () => {
  // Function to handle form data when the form is submitted
  const handleFormData = (data) => {
    console.log("Form Data Received:", data);
    // Process or display the data as needed
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm
        phone={true}
        email={true}
        name={true}
        message={true}
        onSubmit={handleFormData}
      />
    </div>
  );
};

export default App


Props

The `ContactForm`` component accepts the following props:

* phone: (boolean, default true) Show or hide the phone number field.
* name: (boolean, default true) Show or hide the name field.
* email: (boolean, default true) Show or hide the email field.
* message: (boolean, default true) Show or hide the message field.
* onSubmit: (function, required) A callback function that will be called with the form data when the form is successfully submitted.

