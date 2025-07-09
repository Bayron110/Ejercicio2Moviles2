import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/Config';

export default function LoginScreens({navigation}:any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function login(){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigation.navigate("MyTab")
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
    
    
  });
  

  }

  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?_gl=1*lx0jo3*_ga*MTUwOTg1NjU5Ny4xNzM4Mjc1ODYy*_ga_8JE65Q40S6*czE3NTIwMjg1NTQkbzE4JGcxJHQxNzUyMDMwMzUyJGo1OSRsMCRoMA..' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Inicio de Sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity 
        onPress={login}
        style={styles.loginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3E2A20',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 12,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#DDC6B6',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FFB878',
    paddingVertical: 14,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    elevation: 4,
  },
  buttonText: {
    color: '#3E2A20',
    fontSize: 16,
    fontWeight: '700',
  },
})