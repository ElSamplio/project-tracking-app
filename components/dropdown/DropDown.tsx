import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";

import styles from "./style";
import { SelectorOption } from "@/types/selectors";
import { InputWithIcon } from "../common";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "@/constants/Colors";
import Sizes from "@/constants/Sizes";

interface DropdownProps<T> {
  data: SelectorOption<T>[];
  onSelect: (item: SelectorOption<T>) => void;
  placeholder: string;
  keyExtractor: (item: SelectorOption<T>) => string;
  onSearch?: (query: string) => void;
}

const Dropdown = <T extends unknown>({
  data,
  onSelect,
  placeholder,
  keyExtractor,
  onSearch,
}: DropdownProps<T>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectorOption<T>>();
  const [searchValue, setSearchValue] = useState<string>();

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
    if (onSearch) {
      onSearch(searchValue || "");
    }
  };

  const handleSelect = (item: SelectorOption<T>) => {
    setSelectedItem(item);
    setSearchValue("");
    onSelect(item);
    toggleDropdown();
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const renderItem = ({ item }: { item: SelectorOption<T> }) => (
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
        <View style={styles.iconWrapper}>
          <FontAwesome
            name="circle"
            size={Sizes.DROPDOWN_ICON_BG_SIZE}
            color={Colors.LIGHT_GRAY}
            style={styles.iconBackground}
          />
          <FontAwesome
            name="chevron-down"
            size={Sizes.DROPDOWN_ICON_SIZE}
            color={Colors.CLICKABLE_PRIMARY_BG}
            style={styles.iconForeground}
          />
        </View>
      </TouchableOpacity>

      <Modal visible={isVisible} transparent={true} animationType="fade">
        <TouchableOpacity style={styles.modalOverlay} onPress={toggleDropdown}>
          <View style={styles.dropdownList}>
            {onSearch && (
              <InputWithIcon
                iconName="search"
                iconColor="gray"
                value={searchValue}
                onChangeText={handleSearch}
              />
            )}
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => keyExtractor(item)}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Dropdown;
