// GradeTable.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { 
  updateMaths, 
  updatePhysics, 
  updateBiology, 
  updateChemistry, 
  updateEconomics, 
  updateGeography, 
  updateHistory, 
  updateLiterature, 
  updateSociology 
} from '../../../redux/slices/questionSlice';
import CustomButton from '../CustomButton';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const subjects = [
  'Maths',
  'Physics',
  'Chemistry',
  'Biology',
  'Economics',
  'Sociology',
  'History',
  'Geography',
  'Literature',
];

const index = ({nextpage}) => {

  const navigation = useNavigation();

  const navigatetoGrades = () => {

      navigation.navigate(nextpage, {});    
  }
  


  const dispatch = useDispatch();

  const [grades, setGrades] = useState(
    subjects.reduce((acc, subject) => ({ ...acc, [subject]: '' }), {})
  );

  const [gradesSubmitted, setGradesSubmitted] = useState(false);

  const handleGradeChange = (subject: string, grade: string) => {
    setGrades((prevGrades: any) => ({
      ...prevGrades,
      [subject]: grade,
    }));
  };

  const handleSubmit = () => {
    Object.entries(grades).forEach(([subject, grade]) => {
      switch (subject) {
        case 'Maths':
          dispatch(updateMaths(grade));
          break;
        case 'Physics':
          dispatch(updatePhysics(grade));
          break;
        case 'Biology':
          dispatch(updateBiology(grade));
          break;
        case 'Chemistry':
          dispatch(updateChemistry(grade));
          break;
        case 'Economics':
          dispatch(updateEconomics(grade));
          break;
        case 'Geography':
          dispatch(updateGeography(grade));
          break;
        case 'History':
          dispatch(updateHistory(grade));
          break;
        case 'Literature':
          dispatch(updateLiterature(grade));
          break;
        case 'Sociology':
          dispatch(updateSociology(grade));
          break;
        default:
          break;
      }
    });
    setGradesSubmitted(true);
  };

  

  return (
    <View style={styles.container}>
      {subjects.map((subject) => (
        
        <View key={subject} style={styles.row}>
          <Text style={styles.cell}>{subject}</Text>
          <TextInput
            style={styles.input}
            value={grades[subject]}
            onChangeText={(grade) => handleGradeChange(subject, grade)}
            keyboardType='numeric'
            placeholder='Enter your grade'
          />
        </View>
      ))}
      <CustomButton onPress={handleSubmit} text={"SUBMIT GRADES"} type='TERTIARY' />

      {gradesSubmitted && (
        <CustomButton 
          text="Next"
          type='NEXT'
          onPress={navigatetoGrades} />
      )}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius:12,
    marginBottom:15,
    backgroundColor: 'white',
  },
  cell: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: 'black',
  },
  input: {
    flex: 2,
    height: 40,
    borderLeftWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
});

export default index;
