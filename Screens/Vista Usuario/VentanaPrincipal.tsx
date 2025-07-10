import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';

export default function VentanaPrincipal() {
    return (
        <ImageBackground
            source={{
                uri: 'https://images.pexels.com/photos/4098232/pexels-photo-4098232.jpeg?_gl=1*1m2x67e*_ga*MTUwOTg1NjU5Ny4xNzM4Mjc1ODYy*_ga_8JE65Q40S6*czE3NTIwMzI5ODMkbzE5JGcxJHQxNzUyMDMyOTkyJGo1MSRsMCRoMA..',
            }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.title}>Gestor de Tareas</Text>

                <View style={styles.functionBox}>
                    <Text style={styles.functionTitle}>➕ Agregar Nueva Tarea</Text>
                    <Text style={styles.functionText}>
                        Crea una nueva tarea manualmente, incluyendo título, descripción y fecha.
                    </Text>

                    <Text style={styles.functionTitle}>✏️ Editar Tarea</Text>
                    <Text style={styles.functionText}>
                        Modifica los datos de una tarea existente si necesitas actualizarla.
                    </Text>

                    <Text style={styles.functionTitle}>🔍 Ver Detalles</Text>
                    <Text style={styles.functionText}>
                        Consulta toda la información de una tarea seleccionada con solo un clic.
                    </Text>

                    <Text style={styles.functionTitle}>☑️ Marcar como Completada</Text>
                    <Text style={styles.functionText}>
                        Indica que has realizado la tarea para mantener tu lista organizada.
                    </Text>

                    <Text style={styles.functionTitle}>❌ Cancelar Tarea</Text>
                    <Text style={styles.functionText}>
                        Cancela tareas que ya no son necesarias o relevantes.
                    </Text>

                    <Text style={styles.finalNote}>
                        Todas estas funciones estarán disponibles desde el panel inferior de esta pantalla.
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 25,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    functionBox: {
        alignItems: 'center',
    },
    functionTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        textAlign: 'center',
    },
    functionText: {
        fontSize: 15,
        color: '#f0f0f0',
        textAlign: 'center',
        paddingHorizontal: 10,
        lineHeight: 20,
    },
    finalNote: {
        marginTop: 20,
        fontSize: 14,
        fontStyle: 'italic',
        color: '#ccc',
        textAlign: 'center',
    },
});