import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil del usuario' }} />
        <Stack.Screen name="Contacts" component={ContactScreen} options={{ title: 'Contáctenos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>Estamos en Home</Text>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>Estamos en Profile</Text>
    </View>
  )
}

function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>Estamos en Contact</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});