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
import {Formik, FormikHelpers, FormikValues} from 'formik';
import * as Yup from 'yup';

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

const index = ({ nextpage }) => {

  const navigation = useNavigation();

  const navigatetoGrades = () => {
      navigation.navigate(nextpage, {});    
  }

  const dispatch = useDispatch();

  const [gradesSubmitted, setGradesSubmitted] = useState(false);

  const gradesSchema = Yup.object().shape({
    Maths: Yup.number().min(0, 'Grade must be at least 0').max(20, 'Grade cannot exceed 20').required('Maths grade is required'),
    Physics: Yup.number().min(0, 'Grade must be at least 0').max(20, 'Grade cannot exceed 20').required('Physics grade is required'),
    Chemistry: Yup.number().min(0, 'Grade must be at least 0').max(20, 'Grade cannot exceed 20').required('Chemistry grade is required'),
    Biology: Yup.number().min(0, 'Grade must be at least 0').max(20, 'Grade cannot exceed 20').required('Biology grade is required'),
    Economics: Yup.number().min(0, 'Grade must be at least 0').max(20, 'Grade cannot exceed 20').required('Economics grade is required'),
    Sociology: Yup.number().min(0, 'Grade must be at least 0').max(20, 'Grade cannot exceed 20').required('Sociology grade is required'),
    History: Yup.number().min(0, 'Grade must be at least 0').max(20, 'Grade cannot exceed 20').required('History grade is required'),
    Geography: Yup.number().min(0, 'Grade must be at least 0').max(20, 'Grade cannot exceed 20').required('Geography grade is required'),
    Literature: Yup.number().min(0, 'Grade must be at least 0').max(20, 'Grade cannot exceed 20').required('Literature grade is required'),
  });

  return (
    <View style={styles.container}>
      <Formik 
        initialValues={{
          Maths: '',
          Physics: '',
          Chemistry: '',
          Biology: '',
          Economics: '',
          Sociology: '',
          History: '',
          Geography: '',
          Literature: '',
        }} 
        onSubmit={(values) => {
          Object.entries(values).forEach(([subject, grade]) => {
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
        }} 
        validationSchema={gradesSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
          <>
          {errors.Maths && (
                <Text style={styles.errorText}> {errors.Maths} </Text>
              )}
            <View style={styles.row}>
              <Text style={styles.cell}>Maths</Text>
              <TextInput
                style={styles.input}
                value={values.Maths}
                onChangeText={handleChange('Maths')}
                onBlur={handleBlur('Maths')}
                keyboardType='numeric'
                placeholder='Enter your grade'
              />
              
            </View>

            {errors.Physics && (
                            <Text style={styles.errorText}> {errors.Physics} </Text>
                          )}
            <View style={styles.row}>
              <Text style={styles.cell}>Physics</Text>
              <TextInput
                style={styles.input}
                value={values.Physics}
                onChangeText={handleChange('Physics')}
                onBlur={handleBlur('Physics')}
                keyboardType='numeric'
                placeholder='Enter your grade'
              />
              
            </View>

              {errors.Chemistry && (
                              <Text style={styles.errorText}> {errors.Chemistry} </Text>
                            )}
            <View style={styles.row}>
              <Text style={styles.cell}>Chemistry</Text>
              <TextInput
                style={styles.input}
                value={values.Chemistry}
                onChangeText={handleChange('Chemistry')}
                onBlur={handleBlur('Chemistry')}
                keyboardType='numeric'
                placeholder='Enter your grade'
              />
              
            </View>

            {errors.Biology && (
                <Text style={styles.errorText}> {errors.Biology} </Text>
              )}
            <View style={styles.row}>
              <Text style={styles.cell}>Biology</Text>
              <TextInput
                style={styles.input}
                value={values.Biology}
                onChangeText={handleChange('Biology')}
                onBlur={handleBlur('Biology')}
                keyboardType='numeric'
                placeholder='Enter your grade'
              />
              
            </View>

            {errors.Economics && (
                <Text style={styles.errorText}> {errors.Economics} </Text>
              )}
            <View style={styles.row}>
              <Text style={styles.cell}>Economics</Text>
              <TextInput
                style={styles.input}
                value={values.Economics}
                onChangeText={handleChange('Economics')}
                onBlur={handleBlur('Economics')}
                keyboardType='numeric'
                placeholder='Enter your grade'
              />
             
            </View>

            {errors.Sociology && (
                <Text style={styles.errorText}> {errors.Sociology} </Text>
              )}
            <View style={styles.row}>
              <Text style={styles.cell}>Sociology</Text>
              <TextInput
                style={styles.input}
                value={values.Sociology}
                onChangeText={handleChange('Sociology')}
                onBlur={handleBlur('Sociology')}
                keyboardType='numeric'
                placeholder='Enter your grade'
              />
              
            </View>

            {errors.History && (
                <Text style={styles.errorText}> {errors.History} </Text>
              )}
            <View style={styles.row}>
              <Text style={styles.cell}>History</Text>
              <TextInput
                style={styles.input}
                value={values.History}
                onChangeText={handleChange('History')}
                onBlur={handleBlur('History')}
                keyboardType='numeric'
                placeholder='Enter your grade'
              />
              
            </View>

            {errors.Geography && (
                <Text style={styles.errorText}> {errors.Geography} </Text>
              )}
            <View style={styles.row}>
              <Text style={styles.cell}>Geography</Text>
              <TextInput
                style={styles.input}
                value={values.Geography}
                onChangeText={handleChange('Geography')}
                onBlur={handleBlur('Geography')}
                keyboardType='numeric'
                placeholder='Enter your grade'
              />
              
            </View>

            {errors.Literature && (
                <Text style={styles.errorText}> {errors.Literature} </Text>
              )}
            <View style={styles.row}>
              <Text style={styles.cell}>Literature</Text>
              <TextInput
                style={styles.input}
                value={values.Literature}
                onChangeText={handleChange('Literature')}
                onBlur={handleBlur('Literature')}
                keyboardType='numeric'
                placeholder='Enter your grade'
              />
              
            </View>

           

            <CustomButton 
                  type={(values.Maths && values.Physics && values.Chemistry && values.Biology && values.Economics && values.Sociology && values.History && values.Geography && values.Literature && isValid) ? "TERTIARY" : "DISABLED"}
                  onPress={(values.Maths && values.Physics && values.Chemistry && values.Biology && values.Economics && values.Sociology && values.History && values.Geography && values.Literature && isValid) ? handleSubmit: null} 
                  text={"SUBMIT GRADES"}  />


            {gradesSubmitted && (
              <CustomButton 
                text="Next"
                type='NEXT'
                onPress={navigatetoGrades} />
            )}
          </>
        )}
      </Formik>
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
    borderRadius: 12,
    marginBottom: 15,
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
  errorText: {
    fontSize: 12,
    color: 'red',
  }
});

export default index;
