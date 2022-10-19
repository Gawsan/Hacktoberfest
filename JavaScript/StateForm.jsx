import React, { useState } from "react";

export default function StateForm() {
  const [data, Setdata] = useState({
    name: "",
    password: "",
    number: "",
    nothing: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    Setdata((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(e.target);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <input type="text" name="name" onChange={handleChange} />
        <h3>Password</h3>
        <input type="password" name="password" onChange={handleChange} />
        <h3>Number</h3>
        <input type="number" name="number" onChange={handleChange} />
        <h3>Nothing</h3>
        <input type="text" name="nothing" onChange={handleChange} />
        <br></br>
        <button type="Submit">Submit</button>

        <button>{data.name}</button>
      </form>
    </div>
  );
}
