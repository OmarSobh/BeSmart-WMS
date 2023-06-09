import React, { useEffect } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/core'


const SplashScreen = () => {
      const navigation = useNavigation()
      useEffect(() => {
        setTimeout(() => {
            navigation.replace("Login")
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
    });
    
    export default SplashScreen;
    