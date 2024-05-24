import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegisterLib = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (payload) => {
    console.log({ payload });

    try {
      const response = await fetch(
        "https://dev-api.eskoops.com/api/v1/moderators/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: payload.name,
            email: payload.email,
            password: payload.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(JSON.stringify(data));
    } catch (error) {
      console.error("Error:", error);
    }

    // axios
    //   .post(
    //     "https://dev-api.eskoops.com/api/v1/moderators/register",
    //     {
    //       fullname: payload.name,
    //       email: payload.email,
    //       password: payload.password,
    //     },
    //     {
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[60%] border py-4 px-4">
        <h1 className="text-center font-bold uppercase py-4">Register Users</h1>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="space-y-2 flex flex-col"
        >
          <label>First Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className=" bg-gray-100 border-none pl-2 py-1"
          />
          {errors.fname && (
            <p className="text-red-700">First name is required</p>
          )}

          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className=" bg-gray-100 border-none pl-2 py-1"
          />
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className=" bg-gray-100 border-none pl-2 py-1"
          />
          <label>Phone Number</label>
          <input
            type="text"
            {...register("phone", { required: true })}
            className=" bg-gray-100 border-none pl-2 py-1"
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

export default RegisterLib;
