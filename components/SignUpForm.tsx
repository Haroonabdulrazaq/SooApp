import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Modal, Image } from 'react-native';
import { Formik } from 'formik';
import { SignupSchema } from '@/validation/SignupValidation';


const SignupForm = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
    <ScrollView contentContainerStyle={styles.container}>
      {modalVisible && (
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={()=>setModalVisible(false)}
            presentationStyle="pageSheet"
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalWrapper}>
                <View style={styles.modalIconWrapper}>
                  <Image
                    source={require('@/assets/images/star-icon.png')}
                    style={{ width: 50, height: 50 }}
                  />
                  <TouchableOpacity onPress={()=> setModalVisible(false)}>
                    <Image 
                      source={require('@/assets/images/close-icon.png')}
                      style={{ width: 50, height: 50}}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={{fontSize: 20, marginBottom: 10}}>Welcome to Soo</Text>
                  <Text style={{fontSize: 16, marginBottom: 10}}>Great to have you with us!</Text>
                </View>
                <TouchableOpacity style={styles.submitButton} onPress={()=>setModalVisible(false)}>
                  <Text style={styles.submitButtonText}>Got it</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
      )}
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
          console.log("values", values);

          //TODO: Clean form values implementation
          //TODO: Send form values to BE implementation
          // TODO: Reset Form
          // TODO: Redirect to another screen
          resetForm();
          setModalVisible(true);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <View style={styles.inputContainer}>
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
            </View>
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
                {/* <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                /> */}
                <Text style={styles.label}>By signing up, I agree to Cloit's{' '}</Text>
                <Text style={styles.linkText}>Terms & Conditions</Text> and{' '}
                <Text style={styles.linkText}>Privacy Policy</Text>.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.submitButton} onPress={()=> handleSubmit()}>
              <Text style={styles.submitButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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
    height: "100%",
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalWrapper: {
    justifyContent: 'space-around',
    width: '80%',
    height: '40%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20
  },
  modalIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  // {backgroundColor: '#fff', padding: 20, borderRadius: 20, width: '80%', height: "40%"}
});
