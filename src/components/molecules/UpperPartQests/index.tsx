import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomText from '../../atoms/CustomText'
import CustomHeader from '../../atoms/CustomHeader'

const index = ({text, type, pageNb}) => {
  return (
    <View style={styles.FirstPart}>

      
            
    <CustomText
        text={text}
        type={type} />

    <CustomHeader
      pageNb={pageNb} />        
    
</View>
  )
}

export default index;

const styles = StyleSheet.create({
    
    FirstPart: {
        backgroundColor: 'blue',
        width: '100%',
        height: '30%',
        padding: 30,
    }
});