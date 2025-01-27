import React, { useState } from "react";

const MyForm = ({ title = " Book an Appointment" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    classType: "boxing", // Default class selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 ">
      <h2 className="text-2xl font-bold text-start py-4">{title}</h2>
      <hr className="border-t-4 w-12 border-red-500 mb-6" />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Name*"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-sm"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Email*"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-sm"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone*"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-sm"
            />
          </div>

          {/* Age Input */}
          <div>
            <label htmlFor="age" className="block text-sm font-semibold mb-2">
              Age
            </label>
            <input
              type="number"
              placeholder="Age"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-sm"
            />
          </div>

          {/* Select Class Dropdown */}
          <div className="md:col-span-2">
            <label
              htmlFor="classType"
              className="block text-sm font-semibold mb-2"
            >
              Class Type
            </label>
            <select
              id="classType"
              placeholder="Select Class"
              name="classType"
              value={formData.classType}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-sm"
            >
              <option value="boxing">Boxing</option>
              <option value="fitness">Fitness</option>
              <option value="gym">Gym</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className=" bg-red-500 px-10 text-white py-3  hover:bg-red-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
