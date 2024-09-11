import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  //creates and sets the dice value
  const [diceValue, setDiceValue] = useState(1)

  const [rollHistory, setRollHistory] = useState([]);

  //rolls the dice
  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 20) + 1;
    setDiceValue(newValue);
    setRollHistory([newValue, ...rollHistory])
  }

  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
        <Text style={styles.diceText}>{diceValue}</Text>
      </View>
      <Button
      title="Roll the Dice"
      onPress={rollDice}>
      </Button>
      <FlatList
        data={rollHistory}
        renderItem={({ item, index }) => (
          <Text style={styles.historyItem}>
            Roll {index + 1}: {item}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  diceContainer: {
    top: 340,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderWidth: 4,
    borderColor: 'black',
    
  },
  diceText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  historyTitle: {
    fontSize: 24,
    marginTop: 20,
  },
  historyItem: {
    top: 500,
    fontSize: 18,
  },
});
