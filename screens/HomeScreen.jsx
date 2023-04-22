import { View, Text } from "react-native";
import { styles } from "../assets/style/styles";
import { TextInput, Button } from "react-native-paper";
import { useState } from "react";

let users = [
  { username: "Alejo", name: "Alejandro", password: "07", role: 1 },
  { username: "Pedro", name: "Pedrito", password: "08", role: 2 },
];

function HomeScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errormess, setErrormess] = useState("");
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
        Inicio de Sesión
      </Text>
      <TextInput
        style={{ marginTop: 10 }}
        label="Usuario"
        mode="outlined"
        left={<TextInput.Icon icon="account" color="grey" />}
        onChangeText={(username) => setUsername(username)}
        value={username}
      />
      <TextInput
        style={{ marginTop: 10 }}
        label="Contraseña"
        mode="outlined"
        left={<TextInput.Icon icon="eye" color="grey" />}
        onChangeText={(password) => setPassword(password)}
        value={password}
        secureTextEntry
      />
      <Button
        style={{ marginTop: 20 }}
        icon="login"
        mode="contained"
        onPress={() => {}}
      >
        Inciar Sesión
      </Button>
      <Text style={{ color: "red" }}>{errormess}</Text>
    </View>
  );
}

export default HomeScreen;