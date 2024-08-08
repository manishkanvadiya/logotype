// src/MyCountryCodePicker.js
import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const MyCountryCodePicker = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const selectCountry = (val) => {
    setCountry(val);
    setRegion(""); // Reset region when country changes
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  return (
    <div>
      <h2>Select a Country and Region</h2>
      <CountryDropdown value={country} onChange={(val) => selectCountry(val)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => selectRegion(val)}
      />
      {country && (
        <div>
          <h3>Selected Country: {country}</h3>
        </div>
      )}
      {region && (
        <div>
          <h3>Selected Region: {region}</h3>
        </div>
      )}
    </div>
  );
};

export default MyCountryCodePicker;
