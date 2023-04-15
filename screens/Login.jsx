import { View, Text, Button, } from 'react-native'
import { styles } from '../assets/style/styles'
import React, { useState } from 'react'

export default function Login({navigation}) {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  

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



