import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomButton from '../components/atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CustomItem from '../components/atoms/CustomItem';

const Home = () => {

    const navigation = useNavigation();

    const navigateToTest = () => {
            navigation.navigate("Question1");
    }

  return (
    <View style={styles.container}>
        <CustomButton
        onPress={navigateToTest}
        text="RECOMMENDER TEST"
        type='PRIMARY'
        />

        <CustomButton
        onPress={navigateToTest}
        text="NEWS"
        type='PRIMARY'
        />

        <CustomButton
        onPress={navigateToTest}
        text="PROFILE"
        type='PRIMARY'
        />

        
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    
})