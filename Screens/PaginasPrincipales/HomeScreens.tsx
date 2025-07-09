import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function HomeScreens({ navigation }: any) {
  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/8085943/pexels-photo-8085943.jpeg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.introText}>
          Organiza tus tareas fácilmente, agrega pendientes y márcalos como completados. Tu productividad, en una sola app.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.taskButton}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Registro")}
          style={styles.taskButton}
        >
          <Text style={styles.buttonText}>Registro</Text>
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
    gap: 20,
    paddingHorizontal: 20,
  },
  introText: {
    color: '#3E2A20',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  taskButton: {
    backgroundColor: 'rgba(255, 185, 120, 0.85)',
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D28A5E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#3E2A20',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.7,
  },
})