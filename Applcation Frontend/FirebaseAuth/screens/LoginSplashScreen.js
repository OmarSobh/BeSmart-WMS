import React, { useEffect } from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core'


const LoginSplashScreen = () => {
      const navigation = useNavigation()
      useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home")
        }, 1500);
      }, []);
    
      return (
            <View style={styles.container}>
          
          
            <Image
          source={require('../assets/splashScreen.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/BeSmart.png')}
            style={styles.splashlogo}
          />
           <Text style={styles.welcomeText}>Welcome back, user name</Text>
        </View>
          </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
      logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      splashlogo: {
        width: '80%',
         height: '25%',
        resizeMode: 'contain',
      },
      welcomeText: {
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 16,
            color: '#FFFFFF',
      }
    });
    

    
    
    export default LoginSplashScreen;
    