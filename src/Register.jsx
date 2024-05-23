import React, { useState } from "react";
import InputBox from "./components/InputBox";

const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered User:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[60%] border py-4 px-4">
        <h1 className="text-center font-bold uppercase py-4">Register Users</h1>
        <form onSubmit={handleSubmit} className="space-y-2">
          <InputBox
            label="First Name"
            type="text"
            name="fname"
            value={formData.fname}
            placeholder="Enter first name."
            onChange={handleChange}
          />
          <InputBox
            label="Last Name"
            type="text"
            name="lname"
            value={formData.lname}
            placeholder="Enter last name."
            onChange={handleChange}
          />
          <InputBox
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter email address"
            onChange={handleChange}
          />
          <InputBox
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            placeholder="Enter password"
            onChange={handleChange}
          />
          <InputBox
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Enter phone number"
            onChange={handleChange}
          />
          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-green-800 text-white px-6 py-1 rounded-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
