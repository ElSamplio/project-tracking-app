import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import InputText from "@/components/inputtext";
import Button from "@/components/button";
import Password from "@/components/password";
import Dropdown from "@/components/dropdown";
import { useState } from "react";

const Login = () => {
  const data = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
    { label: "Option 5", value: 5 },
    { label: "Option 6", value: 6 },
    { label: "Option 7", value: 7 },
    { label: "Option 8", value: 8 },
    { label: "Option 9", value: 9 },
    { label: "Option 0", value: 0 },
  ];
  const [selectedItem, setSelectedItem] = useState();
  return (
    <View style={{ backgroundColor: "white", height: 300 }}>
      <Text style={{ fontFamily: "Poppins" }}>This is gonna be the login</Text>
      <InputText placeholder="Test" />
      <Link href="/main">View details</Link>
      <Button label="Login" />
      <Password placeholder="Password" />
      <Dropdown
        data={data}
        placeholder="Select an option"
        onSelect={setSelectedItem}
      />
      {selectedItem && (
        <Text style={styles.selectedText}>
          Selected: {selectedItem.label}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
  },
});


export default Login;
