import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🕹 My Item List 🕹</Text>
      <Text style={styles.subtitle}>Add your items below!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          placeholderTextColor="#A0A0A0"
          value={item}
          onChangeText={setItem}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>• {item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B', // dark retro background
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    color: '#00FF99',
    fontWeight: '900',
    textAlign: 'center',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
    textShadowColor: '#0f0',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  subtitle: {
    fontSize: 12,
    color: '#CCCCCC',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'monospace',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#00FF99',
    backgroundColor: '#000',
    color: '#00FF99',
    paddingHorizontal: 10,
    height: 40,
    fontFamily: 'monospace',
    textAlign: 'center',
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#FF0066',
    marginLeft: 8,
    borderWidth: 3,
    borderColor: '#FF66B2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 40,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontFamily: 'monospace',
    fontSize: 14,
  },
  listItem: {
    backgroundColor: '#222',
    borderWidth: 2,
    borderColor: '#00FF99',
    padding: 10,
    marginBottom: 8,
  },
  listItemText: {
    color: '#00FF99',
    fontSize: 14,
    fontFamily: 'monospace',
  },
});
