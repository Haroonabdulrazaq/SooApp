import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Formik } from 'formik';
import { SignupSchema } from '@/validation/SignupValidation';
import CustomModal from './CustomModal';
import { useNavigation } from 'expo-router';
import CompetionModal from './CompetionModal';
// import {useNavigation} from "@react"


const SignupForm = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isSelectionOpen, setIsSelectionOpen] = useState(false);

    return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <CompetionModal isSelectionOpen={isSelectionOpen} setIsSelectionOpen={setIsSelectionOpen}/>
      <Formik
        initialValues={{
          competition: '',
          email: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, {resetForm}) => {
          console.log(values); // so that value variable is used
          //TODO: Clean form values
          //TODO: Send form values to BE
          // TODO: Reset Form
          // TODO: Redirect to another screen or show a modal
          resetForm();
          setModalVisible(true);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
          >
            <View style={styles.inputContainer}>
              <TouchableOpacity style={styles.input} onPress={() => setIsSelectionOpen(true)}>
                <Text>Competition to sign up * </Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Competition to sign up *"
                onChangeText={handleChange('competition')}
                onBlur={handleBlur('competition')}
                value={values.competition}
              />
              {errors.competition && touched.competition && (
                <Text style={styles.errorText}>{errors.competition}</Text>
              )}
            </View> */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="First Name in English *"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Last Name in English *"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )}
            </View>
            <TouchableOpacity style={styles.checkboxContainer}>
              <Text style={styles.checkboxText}>
                <Text style={styles.label}>By signing up, I agree to Cloit's </Text>
                <Text style={styles.linkText}>Terms & Conditions</Text> and{' '}
                <Text style={styles.linkText}>Privacy Policy</Text>.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitButton} onPress={()=> handleSubmit()}>
              <Text style={styles.submitButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </ScrollView>
  );
}
export default SignupForm;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
    height: "110%",
    backgroundColor: '#fff',
    fontFamily: 'Poppins',
  },
  inputContainer:{
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 2,
    borderRadius: 15,
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: '#555',
  },
  linkText: {
    color: '#1E2A78',
    textDecorationLine: 'underline',
  },
  submitButton: {
    backgroundColor: '#253BFF',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  }
});
