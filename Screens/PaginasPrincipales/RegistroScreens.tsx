import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground, Alert } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../Firebase/Config'
import { ref, set } from 'firebase/database'

export default function RegistroScreens({navigation}:any) {
  const [cedula, setcedula] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [direccion, setDireccion] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function registrar() {
  if (!email || !password || !cedula || !nombre || !apellido || !direccion) {
    Alert.alert("Alerta","Por favor completa todos los campos antes de continuar.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      credenciales();
      navigation.navigate("Login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error en el registro:", errorMessage);
    });
}

  function credenciales(){
    set(ref(db, 'usuarios/' + cedula), {
    cedula: cedula,
    nombre: nombre,
    apellido: apellido,
    direccion: direccion,
    email: email,
  })
    .then(() => {
      console.log("Usuario guardado");
    })

  setcedula("");
  setNombre("");
  setApellido("");
  setDireccion("");
  setEmail("")
  }

  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/6914458/pexels-photo-6914458.jpeg?_gl=1*1yawhl4*_ga*MTUwOTg1NjU5Ny4xNzM4Mjc1ODYy*_ga_8JE65Q40S6*czE3NTIwMjg1NTQkbzE4JGcxJHQxNzUyMDI5OTk0JGo1MiRsMCRoMA..' }}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Crea tu cuenta</Text>

        <TextInput
          style={styles.input}
          placeholder="Cedula"
          placeholderTextColor="#999"
          value={cedula}
          onChangeText={setcedula}
        />

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#999"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Apellido"
          placeholderTextColor="#999"
          value={apellido}
          onChangeText={setApellido}
        />

        <TextInput
          style={styles.input}
          placeholder="Dirección"
          placeholderTextColor="#999"
          value={direccion}
          onChangeText={setDireccion}
        />

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
        onPress={()=>registrar()}
        style={styles.registerButton}>
          <Text style={styles.buttonText}>Registrarme</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 24,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3E2A20',
    textAlign: 'center',
    marginBottom: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 12,
    paddingVertical: 8,
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#DDC6B6',
    marginBottom: 16,
  },
  registerButton: {
    backgroundColor: '#FFB878',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#3E2A20',
    fontSize: 16,
    fontWeight: '700',
  },
})