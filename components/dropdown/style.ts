import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: '100%',
    },
    dropdown: {
      padding: 12,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
    },
    selectedText: {
      fontSize: 16,
      color: '#000',
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    dropdownList: {
      width: '80%',
      backgroundColor: '#fff',
      borderRadius: 4,
      maxHeight: 250,
    },
    item: {
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    itemText: {
      fontSize: 16,
      color: '#000',
    },
  });

export default styles;
