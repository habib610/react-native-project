import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {  ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [names, setName]= useState([
    {name: "Messi", id: 1 },
    {name: "Neymar", id: 2 },
    {name: "Ronaldo", id: 3 },
    {name: "Persi", id: 4 },
    {name: "Romero", id: 5 },
    {name: "Ceaser", id: 6 },
    {name: "MbAppe", id: 7 },
    {name: "Riyaz", id: 8 },
    {name: "Shabnur", id: 9 },
  ])



  return (
    <View style={styles.container}>
  <Text style={styles.boldText}>My Players List</Text>

<ScrollView>
    <View>
      {
        names.map(item=> <Text style={styles.name} key={item.id}>{item.name}</Text>)
      }
    </View>
    </ScrollView>

   


     

      <StatusBar style="auto"  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: "center",
    marginTop: 20,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 8,
    margin: 10,
    width: 300,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
  name: {
    backgroundColor: "pink",
    margin: 10,
    padding: 20,
    width: 300,
    fontSize: 50,
    fontWeight: "bold"
  }
 




});
