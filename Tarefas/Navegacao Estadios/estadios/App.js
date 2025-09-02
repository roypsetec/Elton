import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    Fonte1: require('./assets/fonts/fonte1.ttf'),
    Fonte2: require('./assets/fonts/fonte2.ttf'),
    Fonte3: require('./assets/fonts/fonte3.otf'),

  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'orange', }, headerTintColor: 'white', }}>

        <Stack.Screen name="estadios" component={Estadios} options={{ title: "Estadios pelo Mundo" }} />
        <Stack.Screen name="jose" component={Jose} options={{ title:"" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Estadios({ navigation }) {
  return (
    <View style={styles.home}>
      <Text style={styles.bemvindo}>Bem-vindo ao Guia de Estádios pelo mundo</Text>

      <TouchableOpacity onPress={() => navigation.navigate('jose')}>
        <Image source={require('./assets/estadios/neo1.jpg')}></Image>
      </TouchableOpacity>

    </View>
  )
}

function Jose({ navigation }) {
  return (
    <View>
      <Text> Você acessou o app José </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    alignItems: 'center'
  },
  bemvindo: {
    fontSize: 17,
    fontFamily: 'Fonte2',
  },
});
