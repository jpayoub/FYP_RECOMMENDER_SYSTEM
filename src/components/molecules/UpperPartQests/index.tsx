import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../../atoms/CustomText'

const index = ({text, type}) => {
  return (
    <View style={styles.FirstPart}>
            
    <CustomText
        text={text}
        type={type} />
        
    
</View>
  )
}

export default index;

const styles = StyleSheet.create({
    
    FirstPart: {
        backgroundColor: 'blue',
        width: 'auto',
        height: '30%',
        alignItems: 'center',
        padding: 30,
    }
});