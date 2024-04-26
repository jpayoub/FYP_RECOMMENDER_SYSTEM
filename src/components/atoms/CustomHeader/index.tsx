import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomProgressBar from '../CustomProgressBar';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const index = ({}) => {

  const pageNb = useSelector((state:RootState)=>state.user.pageNb);


  return (
    <View>
      <View style = {styles.container}>
        <Text style={styles.progressnumber}>{pageNb}/ <Text style={styles.totalprogress}>17</Text> </Text>
      </View>
      <CustomProgressBar />
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