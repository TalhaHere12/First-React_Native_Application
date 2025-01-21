import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, FlatList, StyleSheet } from 'react-native';

const Create = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleAddItem = () => {
    if (itemName.trim() && itemQuantity.trim()) {
      setItems([...items, { name: itemName, quantity: parseInt(itemQuantity, 10) }]);
      setItemName('');
      setItemQuantity('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Items</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        keyboardType="numeric"
        value={itemQuantity}
        onChangeText={setItemQuantity}
      />
      <Pressable style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.addButtonText}>Add Item</Text>
      </Pressable>

      <Pressable
        style={[styles.navigateButton, styles.allItemsButton]}
        onPress={() => navigation.navigate('AllItems', { items })}
      >
        <Text style={styles.navigateButtonText}>View All Items</Text>
      </Pressable>
      <Pressable
        style={[styles.navigateButton, styles.lowStockButton]}
        onPress={() => navigation.navigate('LowStock', { items })}
      >
        <Text style={styles.navigateButtonText}>View Low Stock</Text>
      </Pressable>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigateButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  navigateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  allItemsButton: {
    backgroundColor: '#6c757d',
  },
  lowStockButton: {
    backgroundColor: '#dc3545',
  },
});
