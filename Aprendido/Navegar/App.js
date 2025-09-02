import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'orange',}, headerTintColor: 'white',}}>

        <Stack.Screen name="thiago" component={Thiago} options={{ headerShown: false}} />
        <Stack.Screen name="jose" component={Jose} options={{ title:"" }} />
        <Stack.Screen name="batista" component={Batista} options={{ title:"Não é meu filho." }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Thiago({ navigation }) {
  return (
    <View>
      <Text> Bem-vindo ao app Thiago. </Text>
      <Button title="Entrar no José" onPress={() => navigation.navigate('jose')}></Button>
      <Button title="Entrar no Batista" onPress={() => navigation.navigate('batista')}></Button>
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

function Batista({ navigation }) {
  return (
    <View>
      <Text> Você acessou o app Batista </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
