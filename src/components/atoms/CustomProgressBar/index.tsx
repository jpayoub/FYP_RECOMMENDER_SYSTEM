import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import * as Progress from 'react-native-progress';

const index = ({progress}) => {
  return (
    <View>
      <Progress.Bar style={styles.progressbar}
      progress={progress} 
      width={412}/>
    </View>
  )
}

export default index;

const styles = StyleSheet.create({
    progressbar: {
        width: '100%',
       marginTop: 48,
       color: 'white',
    }
})