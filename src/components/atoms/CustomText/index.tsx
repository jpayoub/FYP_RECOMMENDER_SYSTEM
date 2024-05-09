import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const index = ({text, type}) => {
  return (
    <View style={styles.container}>
    <Text style={styles[`text_${type}`]}> {text} </Text>
    </View>
  )
}

export default index;

const styles = StyleSheet.create({
  container: {
  },
    text_Title1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',

    },
    text_Title2:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        textAlign: 'center',
        lineHeight: 35,

    },
    text_grades:{
      fontSize: 20,
        fontWeight: 'bold',
        color: 'grey',
        marginBottom: 30,
        textAlign: 'center',
        lineHeight: 35,
    },
    text_questDesc: {
      textAlign: 'center',
      marginBottom: 30,
    }

    
});