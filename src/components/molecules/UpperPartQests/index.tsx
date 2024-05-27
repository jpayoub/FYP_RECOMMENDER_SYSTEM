import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import CustomText from '../../atoms/CustomText';
import CustomHeader from '../CustomHeader';
import { updatePageNb } from '../../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useNavigation } from '@react-navigation/native';




const index = ({text, type}) => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const pageNb = useSelector((state:RootState)=>state.user.pageNb);

  const handlePress = () => {
    const updatedPgNb = pageNb-1;
    dispatch(updatePageNb(updatedPgNb))   

  };

  const navigateHome = () => {
    
        navigation.navigate("Home",{});
    
    
}

  return (
    <View style={styles.FirstPart}>

      
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
      
      
      {pageNb === 1 ? (
          <TouchableOpacity onPress={navigateHome}>
          <Text style={{ color: 'white', marginLeft: 5 }}>Back</Text>
              </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handlePress}>
      <Text style={{ color: 'white', marginLeft: 5 }}>Prev</Text>
          </TouchableOpacity>
        )}
    </View>
    <CustomText text={text} type={type} />
    <CustomHeader />        
    
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