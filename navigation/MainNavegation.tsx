import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, Platform, StatusBar } from "react-native";

import RegistroScreens from "../Screens/PaginasPrincipales/RegistroScreens";
import HomeScreens from "../Screens/PaginasPrincipales/HomeScreens";
import LoginScreens from "../Screens/PaginasPrincipales/LoginScreens";
import AgregarNuevaT from "../Screens/Vista Usuario/AgregarNuevaT";
import VentanaPrincipal from "../Screens/Vista Usuario/VentanaPrincipal";
import VerScreens from "../Screens/Vista Usuario/VerScreens";
import EditarScreens from "../Screens/Vista Usuario/EditarScreens";
import EliminarScreens from "../Screens/Vista Usuario/EliminarScreens";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreens} />
            <Stack.Screen name="Login" component={LoginScreens} />
            <Stack.Screen name="Registro" component={RegistroScreens} />
            <Stack.Screen name="MyTab" component={MyTabs} />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Principal" component={VentanaPrincipal} />
            <Tab.Screen name="Nueva Tarea" component={AgregarNuevaT} />
            <Tab.Screen name="Ver Tareas" component={VerScreens} />
            <Tab.Screen name="Editar Tarea" component={EditarScreens}/>
            <Tab.Screen name="Cancelar Tarea" component={EliminarScreens}/>
        </Tab.Navigator>
    );
}

export default function NavegadorPrincipal() {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
                backgroundColor: "#fff",
            }}
        >
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        </SafeAreaView>
    );
}
