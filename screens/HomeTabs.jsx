
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons'//iconos material desing
import HomeScreen from './ContactScreen';
import ProfileScreen from "./ProfileScreen";
import ContactScreen from "./ContactScreen";


const tab = createBottomTabNavigator();

//esto es un cintenedor tab.Navigator
export default function HomeTabs() {
  return (
    <tab.Navigator

      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
        tabBarActiveBackgroundColor: 'orange',
        tabBarInactiveBackgroundColor: 'gray'
      }}
    >
      <tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: () => (<MaterialIcons name='home' size={22} />)
      }} />
      <tab.Screen name="Prorofile" component={ProfileScreen} options={{
        tabBarIcon: () => (<MaterialIcons name='person' size={22} />)
      }} />
      <tab.Screen name="Contacts" component={ContactScreen} options={{
        tabBarIcon: () => (<MaterialIcons name='phone' size={22} />)
      }} />
    </tab.Navigator>
  );
}