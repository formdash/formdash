import React, { useState } from "react";

const ContactForm = ({ phone, name = true, email = true, message = true }) => {
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    formData,
  });

  const [errors, setErrors] = useState({});
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (name && formDetails.name.trim() === "") {
      newErrors.name = "Please fill in your name";
    }

    if (email && formDetails.email.trim() === "") {
      newErrors.email = "Please fill in your email";
    } else if (email && !/\S+@\S+\.\S+/.test(formDetails.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (phone && formDetails.phone.trim() === "") {
      newErrors.phone = "Please fill in your phone number";
    }

    if (message && formDetails.message.trim() === "") {
      newErrors.message = "Please fill in your message";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (formData) formData(formDetails);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <div className="bg-slate-300">
      <div className="bg-red-500 p-1"></div>
      <h1 className="text-center py-3 text-3xl font-semibold">Contact Form</h1>
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        {name && (
          <div className="flex flex-col gap-2">
            <label className="md:text-lg text-base font-medium">
              Full Name:
            </label>
            <div>
              <input
                type="text"
                name="name"
                value={formDetails.name}
                className="px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black w-full"
                placeholder="Enter your name"
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-700 text-sm">*{errors.name}</p>
              )}
            </div>
          </div>
        )}

        {email && (
          <div className="flex flex-col gap-2">
            <label className="md:text-lg text-base font-medium">Email:</label>
            <div>
              <input
                type="text"
                name="email"
                value={formDetails.email}
                className="px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black w-full"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-700 text-sm">*{errors.email}</p>
              )}
            </div>
          </div>
        )}

        {phone && (
          <div className="flex flex-col gap-2">
            <label className="md:text-lg text-base font-medium">Phone:</label>
            <div>
              <input
                type="number"
                name="phone"
                value={formDetails.phone}
                className="px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black w-full"
                placeholder="Enter your phone number"
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-700 text-sm">*{errors.phone}</p>
              )}
            </div>
          </div>
        )}

        {message && (
          <div className="flex flex-col gap-2">
            <label className="md:text-lg text-base font-medium">Message:</label>
            <div>
              <textarea
                name="message"
                value={formDetails.message}
                className="px-2 pb-2 pt-1 outline-none focus:bg-slate-200 bg-transparent border-b border-black min-h-32 w-full"
                placeholder="Write your message"
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-700 text-sm">*{errors.message}</p>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md text-lg hover:bg-red-700 duration-150"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="px-4 mt-10 text-center">
        <p className="border-t border-slate-500 pt-2 pb-4 text-sm">
          This contact form is neither created nor endorsed by{" "}
          <a href="#" className="font-medium text-nowrap">
            Formdash
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
