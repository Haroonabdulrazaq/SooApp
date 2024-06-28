import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "@/screens/SplashScreen";
import SignUpScreen from "@/screens/SignUpScreen";
import CompetitionScreen from "@/screens/CompetitionScreen";

export default function TabLayout() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerStyle: { backgroundColor: '#f5f5f5' },
        headerTitleStyle: { fontFamily: 'Poppins', color: 'black'},
        headerTintColor: 'black',
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Competition" component={CompetitionScreen} />
    </Stack.Navigator>
  );
}
