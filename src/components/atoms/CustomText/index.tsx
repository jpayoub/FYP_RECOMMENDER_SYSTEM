import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const index = ({text, type}) => {
  return (
    <View>
    <Text style={styles[`text_${type}`]}> {text} </Text>
    </View>
  )
}

export default index;

const styles = StyleSheet.create({
    text_Title1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    text_Title2:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 30,
    },

    
});