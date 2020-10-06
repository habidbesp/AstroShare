import React from "react";

export default function SearchBar({ startDate, endDate, dateChange }) {
  function handleChange(event) {
    let newValue = event.target.value;
    let name = event.target.name;
    console.log(newValue, name);
    dateChange(newValue, name);
  }

  return (
    <div>
      <form action="">
        <label>Enter a date after 1995-06-16</label>
        <input
          type="date"
          name="startDateQuery"
          min="1995-06-16"
          max="2025-12-31"
          value={startDate}
          onChange={handleChange}
        />

        <input
          type="date"
          name="finishDateQuery"
          min="1995-06-16"
          max="2025-12-31"
          value={endDate}
          onChange={handleChange}
        />
        <button type="submit">Find your pictures</button>
      </form>
    </div>
  );
}
