import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);
      // Here you would typically send the form data to a server
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center font-display text-coffee-900 dark:text-white mb-8">
        Get in Touch
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          {isSubmitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold font-display text-coffee-800 dark:text-white mb-4">
                Thank You!
              </h2>
              <p className="font-body text-gray-600 dark:text-gray-300">
                Your message has been sent successfully. We'll get back to you
                soon.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold font-display text-coffee-800 dark:text-white mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-body"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-coffee-500 focus:border-coffee-500"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-body"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-coffee-500 focus:border-coffee-500"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 font-body"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-coffee-500 focus:border-coffee-500"
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-coffee-800 text-white py-3 rounded-lg font-bold hover:bg-coffee-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coffee-500"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
        <div
          className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center"
          role="application"
          aria-label="Map showing our location"
        >
          <p className="text-gray-500 dark:text-gray-400 font-body">
            Map Placeholder
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
