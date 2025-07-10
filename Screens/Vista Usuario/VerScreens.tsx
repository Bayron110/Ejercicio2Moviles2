import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Button, SafeAreaView, ImageBackground, } from "react-native";
import { onValue, ref, update, off } from "firebase/database";
import { db } from "../../Firebase/Config";

interface Tarea {
    id: string;
    tarea: string;
    fechaI: string;
    fechaF: string;
    categoria: string;
    prioridad: string;
    usuarios: string;
    estado: string;
    path: string;
}

export default function VerScreens() {
    const [tareas, setTareas] = useState<Tarea[]>([]);

    useEffect(() => {
        const referencia = ref(db);

        const listener = onValue(referencia, (snapshot) => {
            const data = snapshot.val();
            const tareasArray: Tarea[] = [];

            if (data) {
                for (const prioridad in data) {
                    for (const categoria in data[prioridad]) {
                        for (const usuario in data[prioridad][categoria]) {
                            for (const id in data[prioridad][categoria][usuario]) {
                                const tarea = data[prioridad][categoria][usuario][id];
                                const path = `${prioridad}/${categoria}/${usuario}/${id}`;

                                if (
                                    tarea &&
                                    tarea.tarea &&
                                    tarea.fechaI &&
                                    tarea.fechaF &&
                                    tarea.categoria &&
                                    tarea.prioridad &&
                                    tarea.usuarios &&
                                    tarea.estado
                                ) {
                                    tareasArray.push({
                                        id,
                                        tarea: tarea.tarea,
                                        fechaI: tarea.fechaI,
                                        fechaF: tarea.fechaF,
                                        categoria: tarea.categoria,
                                        prioridad: tarea.prioridad,
                                        usuarios: tarea.usuarios,
                                        estado: tarea.estado,
                                        path,
                                    });
                                }
                            }
                        }
                    }
                }
            }

            setTareas(tareasArray);
        });

        return () => {
            off(referencia);
        };
    }, []);

    const cambiar = (item: Tarea) => {
        const nuevoEstado =
            item.estado === "Pendiente" ? "Terminado" : "Pendiente";
        const referencia = ref(db, item.path);
        update(referencia, { estado: nuevoEstado });
    };

    return (
        <ImageBackground
            source={{ uri: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514" }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Tareas Guardadas</Text>
                        <FlatList
                            data={tareas}
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    <Text style={styles.text}>Nombre de la Tarea: {item.tarea}</Text>
                                    <Text style={styles.text}>
                                        Fecha: {item.fechaI} hasta {item.fechaF}
                                    </Text>
                                    <Text style={styles.text}>
                                        Categoria y Prioridad: {item.categoria} | {item.prioridad}
                                    </Text>
                                    <Text style={styles.text}>Encargado: {item.usuarios}</Text>
                                    <Text style={styles.estado}>Estado: {item.estado}</Text>
                                    <Button
                                        title={
                                            item.estado === "Pendiente"
                                                ? "Marcar como Terminado"
                                                : "Marcar como Pendiente"
                                        }
                                        onPress={() => cambiar(item)}
                                        color={item.estado === "Pendiente" ? "#28B463" : "#F39C12"}
                                    />
                                </View>
                            )}
                            ListEmptyComponent={
                                <Text style={styles.empty}>
                                    No hay tareas registradas o completas en Firebase.
                                </Text>
                            }
                        />
                    </View>
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
        alignItems: "center",
    },
    safeArea: {
        flex: 1,
        width: "100%",
    },
    container: {
        flex: 1,
        width: "90%",
        maxWidth: 500,
        padding: 20,
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
    card: {
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        padding: 18,
        marginVertical: 10,
        borderRadius: 12,
        borderLeftWidth: 5,
        borderLeftColor: "#58d68d",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    text: {
        fontSize: 16,
        color: "#2c3e50",
        marginBottom: 6,
        lineHeight: 22,
    },
    label: {
        fontWeight: "bold",
        color: "#1a5276",
    },
    estado: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "bold",
        color: "#d35400",
        textTransform: "uppercase",
        letterSpacing: 0.5,
    },
    empty: {
        textAlign: "center",
        marginTop: 50,
        fontSize: 16,
        color: "#666",
        fontStyle: "italic",
    },
});
