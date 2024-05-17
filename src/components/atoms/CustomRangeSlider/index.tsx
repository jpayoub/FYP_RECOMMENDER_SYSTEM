import { View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import CustomText from '../CustomText'
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestion1, updateQuestion10, updateQuestion11, updateQuestion12, updateQuestion13, updateQuestion14, updateQuestion15, updateQuestion16, updateQuestion2, updateQuestion3, updateQuestion4, updateQuestion5, updateQuestion6, updateQuestion7, updateQuestion8, updateQuestion9 } from '../../../redux/slices/questionSlice';
import { RootState } from '../../../redux/store';

//https://www.npmjs.com/package/@react-native-community/slider



const index = () => {
  const[chosenRange,setChosenRange] = useState(1);

  const pageNb = useSelector((state:RootState)=>state.user.pageNb);

   useEffect(() => {setChosenRange(1)},[pageNb])


  const dispatch = useDispatch(); 

  const handleRangeChange = (chosenRange: number) => {
    switch (pageNb) {
      case 1: 
      dispatch(updateQuestion1(chosenRange));
      break;
      case 2: 
      dispatch(updateQuestion2(chosenRange));
      break;
      case 3: 
      dispatch(updateQuestion3(chosenRange));
      break;
      case 4: 
      dispatch(updateQuestion4(chosenRange));
      break;
      case 5: 
      dispatch(updateQuestion5(chosenRange));
      break;
      case 6: 
      dispatch(updateQuestion6(chosenRange));
      break;
      case 7: 
      dispatch(updateQuestion7(chosenRange));
      break;
      case 8: 
      dispatch(updateQuestion8(chosenRange));
      break;
      case 9: 
      dispatch(updateQuestion9(chosenRange));
      break;
      case 10: 
      dispatch(updateQuestion10(chosenRange));
      break;
      case 11: 
      dispatch(updateQuestion11(chosenRange));
      break;
      case 12: 
      dispatch(updateQuestion12(chosenRange));
      break;
      case 13: 
      dispatch(updateQuestion13(chosenRange));
      break;
      case 14: 
      dispatch(updateQuestion14(chosenRange));
      break;
      case 15: 
      dispatch(updateQuestion15(chosenRange));
      break;
      case 16: 
      dispatch(updateQuestion16(chosenRange));
      break;
      // case 17: 
      // dispatch(updateQuestion17(chosenRange));
      // break;
      default: chosenRange = 1;
      break;
    }

  }

    

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
      onValueChange={(value)=>{setChosenRange(value); handleRangeChange(chosenRange);}}
      minimumTrackTintColor="blue"
      maximumTrackTintColor="blue"
      value={chosenRange}
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