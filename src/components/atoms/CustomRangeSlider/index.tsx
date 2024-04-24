import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import CustomText from '../CustomText'
//https://www.npmjs.com/package/@react-native-community/slider

const index = () => {

    const[chosenRange,setChosenRange] = useState(1);

  return (
    <View style={styles.container}>

        <CustomText
        text={chosenRange}
        type="Title2" />
        
      <Slider 
      style={styles.slider}
      minimumValue={1}
      maximumValue={5}
      lowerLimit={1}
      upperLimit={5}
      onValueChange={(value)=>setChosenRange(value)}
      step={1}
      />
    </View>
  )
}

export default index;

const styles = StyleSheet.create({
   container : {
    alignItems: 'center',
   },
    slider: {
        width: 300,
        height: 79,
        marginBottom: 30,
    },
   
})