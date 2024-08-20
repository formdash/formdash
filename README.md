## FORMDASH

### ContactForm React Component

A customizable and easy-to-use contact form component for React applications. This package provides a fully functional contact form with validation and Tailwind CSS styling.

## Features

- **Customizable**: Show or hide form fields (name, email, phone, message).
- **Validation**: Simple validation for required fields and email format.
- **Tailwind CSS**: Styled with Tailwind CSS for a clean and modern look.
- **Easy Integration**: Simple integration with your React app.

## Installation

To install the `formdash` package, use npm or yarn:

```bash
npm install formdash
```
or

```bash
yarn add formdash
```

## Screenshots

<img src="https://res.cloudinary.com/dsu2aidfp/image/upload/v1724164667/formdash/ovwcgsetaqzhzuozul4v.png" alt="App Screenshot" width="200px" />


## Examples

Once installed, you can import and use the ContactForm component in your React application.

```javasript
import { ContactForm } from 'formdash';
```
Here is an example of how to use the ContactForm component:

```javascript
import { ContactForm } from 'formdash';

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
        onSubmit={handleFormData}
      />
    </div>
  );
};

export default App;
```

## Props

#### Get all items

| Parameter | Type     | default | description |
| :-------- | :------- | :------ | :---------------|
| `name` | `boolean` | true | default true |
| `phone` | `boolean` | false | default false |
| `email` | `boolean` | true | default true |
| `message` | `boolean` | true | default true |
| `onSubmit` | `function` | required| A callback function that will be called with the form data when the form is successfully submitted. |
| `public_key` | `string` | `null` | Your API key |
| `api_key` | `string` | `null` | Your API key |



## Summary

With these changes, the `ContactForm` component will accept `publicKey` and `apiKey` for authentication. Users of your package will need to provide these keys and handle the form data accordingly. The `README.md` will guide them on how to integrate and use the component in their projects.



## Author
[@rajib-sadhu](https://www.github.com/rajib-sadhu)