import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Button } from "react-native";

const Stack = createNativeStackNavigator();//variable almacenar los componentes


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator

        initialRouteName="Home">

        <Stack.Screen name="Contacts" component={ContactScreen} options={{ title: 'Contáctenos' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil del usuario' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Estamos en Home</Text>
      <Button
        onPress={() => {
          navigation.navigate('Profile')
        }}
        title="Ir al perfil de usuario"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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