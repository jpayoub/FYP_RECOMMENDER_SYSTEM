import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const index = ({onPress, text, type = "PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
    <Text style={styles[`text_${type}`]}> {text} </Text>
  </Pressable>
  )
}

export default index;

const styles = StyleSheet.create({

    container: {

        width: 'auto',
        padding: 12, 
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: 'blue',

    },

    container_TERTIARY: {
        borderColor: 'blue',
        borderWidth: 1,
    },

    text_PRIMARY: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },

    text_TERTIARY: {
        color: 'blue',
    },
});