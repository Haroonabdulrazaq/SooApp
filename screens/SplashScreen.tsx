import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type SplashScreenProps = {
  navigation: NavigationProp<any>;
};

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('@/assets/images/splash-image.png')} style={{ flex:1, justifyContent: 'center', width: '100%', height: '100%' }}>
        <LinearGradient 
        colors={['transparent', 'rgba(0, 0, 0, 1)']}
        style={styles.gradient}
        >
          <View style={styles.subContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Soo</Text>
              <Text style={styles.text}>and Carrots</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('SignUp')}
              >
                <View style={{ flexDirection: "row",  justifyContent: "flex-start"}}>
                  <Icon name="login" size={20} color="white" />
                  <Text style={styles.buttonText}>Sign up for free</Text>
                </View>
                <View>
                  <Image 
                    source={require('@/assets/images/arrow-right-circle.png')} 
                    style={{ width: 30, height: 30, tintColor: 'white' }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('SignUp')}
              >
                <View style={{ flexDirection: "row",  justifyContent: "flex-start"}}>
                  <Icon name="email" size={20} color="white" />
                  <Text style={styles.buttonText}>Continue with Email</Text>
                </View>
                <View>
                  <Image 
                    source={require('@/assets/images/arrow-right-circle.png')} 
                    style={{ width: 30, height: 30, tintColor: 'white' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    fontFamily: 'Poppins',
  },
    subContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 50,
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingLeft: 40,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#253BFF',
    borderRadius: 25,
    paddingVertical: 15,
    paddingLeft: 30,
    paddingRight: 10,
    marginVertical: 10,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
});