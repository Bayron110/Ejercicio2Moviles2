import { Alert, Button, StyleSheet, Text, TextInput, View, ImageBackground, SafeAreaView,} from 'react-native';
import React, { useState } from 'react';
import { db } from '../../Firebase/Config';
import { Picker } from '@react-native-picker/picker';
import { ref, set } from 'firebase/database';

export default function EditarScreens() {
    const [tareaId, setTareaId] = useState("");
    const [tarea, setTarea] = useState("");
    const [categoria, setCategoria] = useState("");
    const [fechaI, setFechaI] = useState("");
    const [fechaF, setFechaF] = useState("");
    const [prioridad, setPrioridad] = useState("Media");
    const [usuarios, setusuarios] = useState("");
    const [estado, setestado] = useState("PENDIENTE");

    function editar() {
        if (!tareaId.trim() || !usuarios.trim() || !categoria.trim() || !tarea.trim() || !fechaI.trim() || !fechaF.trim()) {
            Alert.alert("Campos incompletos", "Por favor completa todos los campos antes de guardar.");
            return;
        }

        const referencia = ref(db, `${prioridad}/${categoria}/${usuarios}/${tareaId}`);

        set(referencia, {
            id: tareaId,
            tarea: tarea,
            fechaI: fechaI,
            categoria: categoria,
            fechaF: fechaF,
            prioridad: prioridad,
            usuarios: usuarios,
            estado: estado
        }).then(() => {
            setTareaId("");
            setCategoria("");
            setFechaI("");
            setFechaF("");
            setTarea("");
            setPrioridad("Media");
            setusuarios("");
            setestado("PENDIENTE");
            Alert.alert("Aviso", "Tarea editada correctamente.");
        });
    }

    return (
        <ImageBackground
            source={{ uri: "https://images.pexels.com/photos/56759/pexels-photo-56759.jpeg?_gl=1*1ihn779*_ga*MTUwOTg1NjU5Ny4xNzM4Mjc1ODYy*_ga_8JE65Q40S6*czE3NTIxMTMzNzUkbzIwJGcxJHQxNzUyMTE0NjYyJGo0NyRsMCRoMA.." }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <SafeAreaView style={styles.container}>
                    <Text style={styles.title}>Editar Tarea</Text>

                    <TextInput
                        placeholder="Ingrese el ID de la tarea"
                        onChangeText={setTareaId}
                        value={tareaId}
                        style={styles.input}
                        placeholderTextColor="#555"
                    />

                    <TextInput
                        placeholder="Ingrese el responsable de la tarea"
                        onChangeText={setusuarios}
                        value={usuarios}
                        style={styles.input}
                        placeholderTextColor="#555"
                    />

                    <TextInput
                        placeholder="Ingrese la categoría de la tarea"
                        onChangeText={setCategoria}
                        value={categoria}
                        style={styles.input}
                        placeholderTextColor="#555"
                    />

                    <TextInput
                        placeholder="Ingresar el nombre de la tarea"
                        onChangeText={setTarea}
                        value={tarea}
                        style={styles.input}
                        placeholderTextColor="#555"
                    />

                    <TextInput
                        placeholder="Ingresar la fecha de inicio"
                        onChangeText={setFechaI}
                        value={fechaI}
                        style={styles.input}
                        placeholderTextColor="#555"
                    />

                    <TextInput
                        placeholder="Ingresar la fecha de fin"
                        onChangeText={setFechaF}
                        value={fechaF}
                        style={styles.input}
                        placeholderTextColor="#555"
                    />

                    <Text style={styles.label}>Selecciona Prioridad:</Text>
                    <Picker
                        selectedValue={prioridad}
                        style={styles.picker}
                        onValueChange={(itemValue) => setPrioridad(itemValue)}
                    >
                        <Picker.Item label="Alta" value="Alta" />
                        <Picker.Item label="Media" value="Media" />
                        <Picker.Item label="Baja" value="Baja" />
                    </Picker>

                    <Text style={styles.label}>Seleccione Estado:</Text>
                    <Picker
                        selectedValue={estado}
                        style={styles.picker}
                        onValueChange={(itemValue) => setestado(itemValue)}
                    >
                        <Picker.Item label="PENDIENTE" value="PENDIENTE" />
                        <Picker.Item label="TERMINADO" value="TERMINADO" />
                    </Picker>

                    <Button title="Editar" onPress={editar} />
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
        borderColor: "#58d68d",
        borderWidth: 1,
        color: "#2c3e50",
    },
    label: {
        fontSize: 16,
        marginVertical: 10,
        color: "white",
        fontWeight: "600",
    },
    picker: {
        height: 50,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderRadius: 8,
        marginBottom: 15,
    },
});