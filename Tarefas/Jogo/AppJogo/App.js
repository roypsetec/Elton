import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuPrincipal" screenOptions={{ headerShown: false}}>

        <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
        <Stack.Screen name="SelecaoNivel" component={SelecaoNivel} />
        <Stack.Screen name="Personagens" component={Personagens} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MenuPrincipal({ navigation }) {
  return (
    <View style={styles.home}>
    
    </View>
  )
}

function SelecaoNivel({ navigation }) {
  return (
    <View style={styles.home}>
    
    </View>
  )
}

function Personagens({ navigation }) {
  return (
    <View style={styles.home}>
    
    </View>
  )
}

function Configuracoes({ navigation }) {
  return (
    <View style={styles.home}>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
