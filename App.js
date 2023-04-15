import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from './screens/ProfileScreen'
import ContactScreen from './screens/ContactScreen'
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();//variable almacenar los componentes


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator

        initialRouteName="Login">

        <Stack.Screen name="Contacts" component={ContactScreen} options={{ title: 'Contáctenos' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil del usuario' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Iniciar sesión' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}