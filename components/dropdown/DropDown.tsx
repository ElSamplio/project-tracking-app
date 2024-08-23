import React, { FC, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from "react-native";

import styles from "./style";

interface DropdownProps {
  data: any;
  onSelect: any;
  placeholder: any;
}

const Dropdown: FC<DropdownProps> = ({ data, onSelect, placeholder }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleSelect = (item: any) => {
    setSelectedItem(item);
    onSelect(item);
    toggleDropdown();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
        <Text style={styles.selectedText}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
      </TouchableOpacity>

      <Modal visible={isVisible} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={toggleDropdown}>
          <View style={styles.dropdownList}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.value.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Dropdown;
