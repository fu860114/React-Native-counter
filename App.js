import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName]=useState('')
const [count, setCount]=useState(0)

useEffect(()=>{
  const myCount =setInterval(()=>{
    setCount(count+1)
  },1000)
  return()=>{
    clearInterval(myCount)
  }
},[count])
  // useEffect(()=>{
  //   return  // unmount effect
  //   console.log('useEffect',name)
  // },[name])

// const changeName=()=>{
//   console.log('changeName',name)
//   setName('jacabe')
//   console.log('after changeName',name)
// }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/* {console.log('render',name)} */}
    <Text>{count}</Text>
    {console.log('render',count)}
    {/* <Button
    title={'change name'}
    onPress={()=>changeName()}
    /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
