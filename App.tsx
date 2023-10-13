import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [colorbg,setcolorbg]=useState('yellow');
  const backgroundgenerator = ()=>{
    const hexadec = "123456789abcdef";
    let result = '#';
    for(let i=0;i<6;i++){
      result+=hexadec[Math.floor(Math.random()*16)];
    }
    setcolorbg(result);
  }
  return (
    <>
      <Text style={styles.header}>Colour Generator</Text>
      <View style={[styles.container,{backgroundColor:colorbg}]}>
        <TouchableOpacity onPress={()=>(
          backgroundgenerator()
        )}>
          <View style={styles.primary}>
          <Text style={styles.subhead}>Change the Background color</Text>
          </View>
        </TouchableOpacity>
      </View>

    </>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
,
  header:{
    fontSize:24,
  },
  subhead:{
    fontSize:23,
    color:'black',
    textAlign:'center',
    fontWeight:'bold'
  },
  primary:{
    backgroundColor:'white',
    borderRadius:7,
    padding:5
  },





})