import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const AllItems = ({ route }) => {
  const { items } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Items</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.name} - {item.quantity}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default AllItems;

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
