import {Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const index = ({onPress = null, text, type = "PRIMARY"}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
    <Text style={styles[`text_${type}`]}> {text} </Text>
  </TouchableOpacity>
  )
}

export default index;

const styles = StyleSheet.create({

    container: {

        width: '100%',
        padding: 12, 
        paddingHorizontal:50,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 20,
    },

    container_DISABLED: {
        backgroundColor: '#A5C9CA',
    },

    container_PRIMARY: {
        backgroundColor: 'blue',

    },
    container_NEXT: {
        backgroundColor: 'blue',
        width: 'auto',
        paddingHorizontal: 70,
    },

    container_TERTIARY: {
        borderColor: 'blue',
        borderWidth: 1,
    },
    text_NEXT: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    text_DISABLED: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },

    text_PRIMARY: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },

    text_TERTIARY: {
        color: 'blue',
    },
    container_AIRECOM: {
        borderColor: 'white',
        borderWidth: 1,
        fontSize:20,
    },
    text_AIRECOM: {
        color: 'white',
    }
});