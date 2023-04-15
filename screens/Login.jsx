import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';

export default function Login({ navigation }) {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const Login = () => {

    if (user === 'example' && password === 'password' && role === 'admin') {
      navigation.navigate('Home')

    }
  }
  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />

  )
}



