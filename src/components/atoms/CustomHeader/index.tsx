import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomProgressBar from '../CustomProgressBar';

const index = ({pageNb}) => {
  return (
    <View>
      <View style = {styles.container}>
        <Text style={styles.progressnumber}>{pageNb}/ <Text style={styles.totalprogress}>17</Text> </Text>
      </View>
      <CustomProgressBar 
          progress={pageNb/17} />
    </View>
  )
}

export default index;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    progressnumber: {
        fontSize:20,
        color: 'white',
    },
    totalprogress : {
        fontSize: 20,
        color: 'grey',
    }
})