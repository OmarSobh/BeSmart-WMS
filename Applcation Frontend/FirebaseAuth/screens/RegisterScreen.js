import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth, firestore } from "../Firebase"
import 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';


const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthday, setBirthday] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home");
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        
        setDoc(doc(firestore, 'users', user.uid), {
          fullName: fullName,
          email: email,
          birthday: birthday,
          // Add more fields as needed
        });
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    navigation.replace("Login")
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
     <Image
        source={require('../assets/BeSmart.png')}
        style={styles.logo}
      /> 
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
         <TextInput
        placeholder="Full Name"
        value={fullName}
        style={styles.input}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        placeholder="Birthday"
        value={birthday}
        style={styles.input}
        onChangeText={(text) => setBirthday(text)}
      />
      </View>

      <View style={styles.buttonContainer}>
      
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={handleLogin}
        >
          <Text style={styles.buttonOutlineText}>Already Have An Acount ?</Text>
        </TouchableOpacity>
        
      </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#C7C6FF',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#171F1D',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#171F1D',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#171F1D',
    fontWeight: '700',
    fontSize: 16,
  },
  logo: {
    width: '80%',
    height: '25%',
  }
})