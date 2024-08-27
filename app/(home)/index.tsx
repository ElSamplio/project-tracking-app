import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import InputText from "@/components/inputtext";
import Button from "@/components/button";
import Password from "@/components/password";
import Dropdown from "@/components/dropdown";
import { useState } from "react";
import { SelectorOption } from "@/types/selectors";
import { InputWithIcon } from "@/components/common";

const Login = () => {
  const data: SelectorOption<number>[] = [
    { label: "Aption 1", value: 1 },
    { label: "Bption 2", value: 2 },
    { label: "Cption 3", value: 3 },
    { label: "Dption 4", value: 4 },
    { label: "Eption 5", value: 5 },
    { label: "Fption 6", value: 6 },
    { label: "Gption 7", value: 7 },
    { label: "Hption 8", value: 8 },
    { label: "Jption 9", value: 9 },
    { label: "Kption 0", value: 0 },
  ];
  const [selectedItem, setSelectedItem] = useState<SelectorOption<number>>();
  const [ddOptions, setDdOptions] = useState<SelectorOption<number>[]>([
    ...data,
  ]);

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = data.filter((elem) =>
        elem.label.toLowerCase().includes(query.toLowerCase())
      );
      setDdOptions([...filtered]);
    } else {
      setDdOptions([...data]);
    }
  };

  return (
    <View style={{ backgroundColor: "white", height: 300 }}>
      <Text style={{ fontFamily: "Poppins" }}>This is gonna be the login</Text>
      <InputText placeholder="Test" />
      <Link href="/main">View details</Link>
      <Button label="Login" />
      <Password placeholder="Password" />
      <View style={{ marginTop: 10 }} />
      <Dropdown
        data={ddOptions}
        placeholder="Select an option"
        onSelect={setSelectedItem}
        keyExtractor={(item: SelectorOption<number>) => item.value.toString()}
        onSearch={handleSearch}
      />
      {selectedItem && (
        <Text style={styles.selectedText}>Selected: {selectedItem.value}</Text>
      )}
      <InputWithIcon iconName="key" iconColor="#03FAC7" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default Login;
