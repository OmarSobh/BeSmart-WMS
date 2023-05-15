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
            style={styles.image}
          />
          
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode:"cover"
       
      },
    });
    
    export default SplashScreen;
    