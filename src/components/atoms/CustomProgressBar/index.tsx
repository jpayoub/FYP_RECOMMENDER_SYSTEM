import { View, StyleSheet } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';


const index = ({}) => {

  const pageNb = useSelector((state:RootState)=>state.user.pageNb);
  const { result, questions } = useSelector((state:RootState) => state.questions);


  return (
    <View>
      <Progress.Bar style={styles.progressbar}
        progress={result ? pageNb / questions.length : pageNb / 18}      width={412}/>
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