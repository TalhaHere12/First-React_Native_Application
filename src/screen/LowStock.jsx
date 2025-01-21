import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const LowStock = ({ route }) => {
  const { items } = route.params;
  const lowStockItems = items.filter(item => item.quantity < 5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Low Stock Items</Text>
      {lowStockItems.length === 0 ? (
        <Text style={styles.noItemsText}>No items with low stock!</Text>
      ) : (
        <FlatList
          data={lowStockItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemText}>
                {item.name} - {item.quantity}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default LowStock;

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
  noItemsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
});
