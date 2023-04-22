import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import HomeTabs from "./screens/HomeTabs";

const Stack = createNativeStackNavigator(); //variable almacenar los componentes

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home tabs"
          component={HomeTabs}
          options={{ title: "Sistema Demo" }}
        />
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil del usuario' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Iniciar sesión' }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

