import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginSplashScreen from './screens/LoginSplashScreen';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SpplashScreen" options={{headerShown:false}} component={SplashScreen}/>
        <Stack.Screen  name="Login" options={{headerShown:false}} component={LoginScreen} />
        <Stack.Screen  name="Register" options={{headerShown:false}} component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginSplashScreen" options={{headerShown:false}}  component={LoginSplashScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;