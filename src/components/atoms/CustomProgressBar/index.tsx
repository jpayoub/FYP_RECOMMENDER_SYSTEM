import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


const index = ({}) => {

  const pageNb = useSelector((state:RootState)=>state.user.pageNb);


  return (
    <View>
      <Progress.Bar style={styles.progressbar}
      progress={pageNb/18} 
      width={412}/>
    </View>
  )
}

export default index;

const styles = StyleSheet.create({
    progressbar: {
      width: '100%',
       marginTop: 35,
       color: 'rgba(255, 255, 255, 1)',
       borderColor: '#FFFFFF',
       borderWidth: 1,
    }
})