import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegistroScreens from "../Screens/PaginasPrincipales/RegistroScreens";
import HomeScreens from "../Screens/PaginasPrincipales/HomeScreens";
import LoginScreens from "../Screens/PaginasPrincipales/LoginScreens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AgregarNuevaT from "../Screens/Vista Usuario/AgregarNuevaT";
import VentanaPrincipal from "../Screens/Vista Usuario/VentanaPrincipal";

const Stack = createStackNavigator()
function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreens} />
            <Stack.Screen name="Login" component={LoginScreens} />
            <Stack.Screen name="Registro" component={RegistroScreens} />
            <Stack.Screen name="MyTab" component={MyTabs}/>
        </Stack.Navigator>
    )
}

    const Tab = createBottomTabNavigator();

    function MyTabs() {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Principal" component={VentanaPrincipal}/>
                <Tab.Screen name="Nueva Tarea" component={AgregarNuevaT} />
            </Tab.Navigator>
        );

    }
    export default function NavegadorPrincipal() {
        return (
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        )
    }
