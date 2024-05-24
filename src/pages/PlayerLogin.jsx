import React, { useState } from "react";
import InputBox from "../components/InputBox";

const PlayerLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    code: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const joinPlayer = async (playerData) => {
    const response = await fetch("http://localhost:5001/api/v1/players/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerData),
    });

    if (!response.ok) {
      throw new Error("Failed to join player");
    }

    return response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Registered User:", formData);
    const { data } = await joinPlayer(formData);
    localStorage.setItem("playerInfo", JSON.stringify(data.data));
  };
  return (
    <div className="w-[50%] border p-4">
      <form onSubmit={handleSubmit}>
        <InputBox
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter name."
          onChange={handleChange}
          required={true}
        />

        <InputBox
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter email"
          onChange={handleChange}
          required={true}
        />

        <InputBox
          label="Code"
          type="text"
          name="code"
          value={formData.fname}
          placeholder="Enter code"
          onChange={handleChange}
          required={true}
        />

        <div className="text-center pt-6">
          <button
            type="submit"
            className="bg-green-800 text-white font-semibold px-6 py-1 rounded-sm"
          >
            JOIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlayerLogin;
