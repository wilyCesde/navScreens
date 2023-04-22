
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from'./ContactScreen';
import ProfileScreen from "./ProfileScreen";
import ContactScreen from "./ContactScreen";
const tab = createBottomTabNavigator();

//esto es un cintenedor tab.Navigator
export default function HomeTabs() {
  return (
    <tab.Navigator
    
    initialRouteName="Home"
    screenOptions={{headerShown:false}}
    >
      <tab.Screen name="Home" component={HomeScreen} />
      <tab.Screen name="Prorofile" component={ProfileScreen} />
      <tab.Screen name="Contacts" component={ContactScreen} />
    </tab.Navigator>
  );
}