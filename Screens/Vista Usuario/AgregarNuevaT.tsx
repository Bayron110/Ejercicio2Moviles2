import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { getDatabase, push } from "firebase/database";

// FIREBASE
import { onValue, ref, set } from "firebase/database";
import { db } from "../../Firebase/Config";
import { Picker } from "@react-native-picker/picker";


export default function AgregarNuevaT() {
    const [tarea, setTarea] = useState("");
    const [categoria, setCategoria] = useState("");
    const [fechaI, setFechaI] = useState("");
    const [fechaF, setFechaF] = useState("");
    const [prioridad, setPrioridad] = useState("Media");
    const [usuarios, setusuarios] = useState("")
    const [estado, setestado] = useState("PENDIENTE")


    function guardar() {
        const referencia = ref(db, `${prioridad}/${categoria}/${usuarios}`);
        push(referencia, {
            tarea: tarea,
            fechaI: fechaI,
            categoria: categoria,
            fechaF: fechaF,
            prioridad: prioridad,
            usuarios: usuarios,
            estado: estado
        }).then(() => {
            setCategoria("");
            setFechaI("");
            setFechaF("");
            setTarea("");
            setPrioridad("Media");
            setusuarios("");
            setestado("PENDIENTE")
            Alert.alert("Aviso", "Datos guardados con prioridad");
        });
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Guardar Nueva Tarea</Text>

            <TextInput
                placeholder="Ingrese El responsable de la Tarea"
                onChangeText={setusuarios}
                style={styles.input}
            />

            <TextInput
                placeholder="Ingrese la Categoria de la Tarea "
                onChangeText={setCategoria}
                value={categoria}
                style={styles.input}
            />
            <TextInput
                placeholder="Ingresar el Nombre de La Tarea"
                onChangeText={setTarea}
                value={tarea}
                style={styles.input}
            />
            <TextInput
                placeholder="Ingresar la fecha"
                onChangeText={setFechaI}
                style={styles.input}
            />
            <TextInput
                placeholder="Ingresar la fecha de fin"
                onChangeText={(texto) => setFechaF(texto)}
                style={styles.input}
            />
            <Text style={styles.label}>Selecciona Prioridad:</Text>
            <Picker
                selectedValue={prioridad}
                style={styles.picker}
                onValueChange={(itemValue) => setPrioridad(itemValue)}
            >
                <Picker.Item label="Alta " value="Alta" />
                <Picker.Item label="Media " value="Media" />
                <Picker.Item label="Baja " value="Baja" />
            </Picker>
            <Text style={styles.label}>Seleccione Estado:</Text>
            <Picker
                selectedValue={estado}
                style={styles.picker}
                onValueChange={(itemValue) => setestado(itemValue)}
            >
                <Picker.Item label="PENDIENTE " value="PENDIENTE" />
                <Picker.Item label="TERMINADO " value="TERMINADO" />
            </Picker>

            <Button title="Guardar" onPress={guardar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eafaf1",
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#2c3e50",
    },
    input: {
        backgroundColor: "#d5f5e3",
        fontSize: 18,
        marginVertical: 5,
        padding: 10,
        borderRadius: 8,
        borderColor: "#58d68d",
        borderWidth: 1,
    },
    label: {
        fontSize: 16,
        marginVertical: 10,
        color: "#34495e",
    },
    picker: {
        height: 50,
        width: "100%",
        backgroundColor: "#abebc6",
        borderRadius: 8,
        marginBottom: 15,
    },
});