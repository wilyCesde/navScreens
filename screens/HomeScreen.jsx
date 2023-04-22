
import {View,Text,Button}from 'react-native'
import {styles} from '../assets/style/styles'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Estamos en Home</Text>
      {/* <Button
        onPress={() => {
          navigation.navigate('Profile')
        }}
        title="Ir al perfil de usuario"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
    </View>
  )
}

