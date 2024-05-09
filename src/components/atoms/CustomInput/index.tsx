import { View, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const index = ({value, setValue, placeholder, secureTextEntry = false}) => {
  return (
    <View style = {styles.container} >
        <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder} 
        secureTextEntry={secureTextEntry}
        style ={styles.input} />
    </View>
  )
}

export default index;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: 'e8e8e8',
        borderWidth: 0.5,
        borderRadius: 12,

        paddingHorizontal: 10,
        marginVertical: 10,


    },
    input: {},
});