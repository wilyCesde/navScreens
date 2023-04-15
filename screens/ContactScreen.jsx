

import { View, Text, Button, } from 'react-native'
import { styles } from '../assets/style/styles'

export default function ContactScreen({ route }) {

  const { email, phone } = route.params   //desestructurado

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' }}>Estamos en Contact</Text>
      <Text>Email:{route.params.email}</Text>
      <Text>Telefono:{phone}</Text>
    </View>
  )
}

