import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "@/screens/SplashScreen";
import SignUpScreen from "@/screens/SignUpScreen";
import CompetitionScreen from "@/screens/CompetitionScreen";
import CustomBackButton from "@/components/CustomBackButton";

export default function TabLayout() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={({ navigation }) => ({
          headerLeft: () => <CustomBackButton navigation={navigation} />,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
      })}
    >
      <Stack.Screen name="Splash" component={SplashScreen} options={{
        headerShown: false,}}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{
        headerTitle: 'Create Account',
        headerTitleStyle: { fontFamily: 'Poppins', fontWeight: 'bold', fontSize: 20},
      }} />
      <Stack.Screen name="Competition" component={CompetitionScreen} />
    </Stack.Navigator>
  );
}
