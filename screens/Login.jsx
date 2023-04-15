import { View, Text, Button, } from 'react-native'
import { styles } from '../assets/style/styles'

export default function Login({navigation}) {

  let user=''
  let password=''
  let role=''

  

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Iniciar sesion</Text>
      <Button
        onPress={() => {
          navigation.navigate('Login', { user: user, password: password, role: role })
        }}
        title="Iniciar sesion"
      />
    </View>
  )
}
