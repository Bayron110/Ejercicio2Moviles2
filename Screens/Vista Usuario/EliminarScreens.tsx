import {Alert, Button, StyleSheet, Text, TextInput, View, ImageBackground, SafeAreaView,} from 'react-native';
import React, { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../../Firebase/Config';

export default function EliminarScreens() {
    const [tareaId, setTareaId] = useState("");
    const [prioridad, setPrioridad] = useState("");
    const [categoria, setCategoria] = useState("");
    const [usuarios, setusuarios] = useState("");

    function eliminar() {
        if (!tareaId.trim() || !prioridad.trim() || !categoria.trim() || !usuarios.trim()) {
            Alert.alert("Campos incompletos", "Por favor completa todos los campos para eliminar la tarea.");
            return;
        }

        const referencia = ref(db, `${prioridad}/${categoria}/${usuarios}/${tareaId}`);

        remove(referencia)
            .then(() => {
                setTareaId("");
                setPrioridad("");
                setCategoria("");
                setusuarios("");
                Alert.alert("Éxito", "Tarea eliminada correctamente.");
            });
    }

    return (
        <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/7041768/pexels-photo-7041768.jpeg" }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.title}>Eliminar Tarea</Text>

                    <TextInput
                        placeholder="ID de la tarea"
                        onChangeText={setTareaId}
                        value={tareaId}
                        style={styles.input}
                        placeholderTextColor="#555"
                    />
                    <TextInput
                        placeholder="Prioridad (Alta, Media, Baja)"
                        onChangeText={setPrioridad}
                        value={prioridad}
                        style={styles.input}
                        placeholderTextColor="#555"
                    />
                    <TextInput
                        placeholder="Categoría"
                        onChangeText={setCategoria}
                        value={categoria}
                        style={styles.input}
                        placeholderTextColor="#555"
                    />
                    <TextInput
                        placeholder="Responsable"
                        onChangeText={setusuarios}
                        value={usuarios}
                        style={styles.input}
                        placeholderTextColor="#555"
                    />

                    <Button title="Eliminar" onPress={eliminar} />
                </SafeAreaView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "white",
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    input: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        fontSize: 16,
        marginVertical: 6,
        padding: 12,
        borderRadius: 8,
        borderColor: "#e74c3c",
        borderWidth: 1,
        color: "#2c3e50",
    },
});