// CountryCodePicker.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CountryPicker, {
  getCallingCode,
} from "react-native-country-picker-modal";

const CountryCodePicker = () => {
  const [country, setCountry] = useState(null);
  const [countryCode, setCountryCode] = useState("US");
  const [callingCode, setCallingCode] = useState("");

  const onSelect = (country) => {
    setCountry(country);
    setCountryCode(country.cca2);
    getCallingCode(country.cca2).then((code) => setCallingCode(code));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Select a Country Code
      </Text>
      <CountryPicker
        countryCode={countryCode}
        withFilter
        withFlag
        withCallingCode
        withAlphaFilter
        onSelect={onSelect}
        visible
      />
      {country && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16 }}>Selected Country: {country.name}</Text>
          <Text style={{ fontSize: 16 }}>Country Code: +{callingCode}</Text>
        </View>
      )}
    </View>
  );
};

export default CountryCodePicker;
