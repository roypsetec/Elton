import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
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
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#809630', }, headerTintColor: 'white', }}>

        <Stack.Screen name="estadios" component={Estadios} options={{ title: "Estadios pelo Mundo" }} />
        <Stack.Screen name="neoquimica" component={Neo} options={{ title: "Neo Química Arena" }} />
        <Stack.Screen name="allianz" component={Allianz} options={{ title: "Allianz Arena" }} />
        <Stack.Screen name="emirates" component={Emirates} options={{ title: "Emirates Stadium" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Estadios({ navigation }) {
  return (
    <View style={styles.home}>
      <Text style={styles.bemvindo}>Bem-vindo ao Guia de Estádios pelo mundo</Text>

      <TouchableOpacity onPress={() => navigation.navigate('neoquimica')} style={styles.viewEstadios}>
        <Image source={require('./assets/estadios/neo/neo1.jpg')} style={styles.imgEstadios}></Image>
        <Text style={styles.txtEstadios}>Neo Química Arena</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('allianz')} style={styles.viewEstadios}>
        <Image source={require('./assets/estadios/bayer/bay1.jpg')} style={styles.imgEstadios}></Image>
        <Text style={styles.txtEstadios}>Neo Química Arena</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('emirates')} style={styles.viewEstadios}>
        <Image source={require('./assets/estadios/arsenal/arse1.jpg')} style={styles.imgEstadios}></Image>
        <Text style={styles.txtEstadios}>Neo Química Arena</Text>
      </TouchableOpacity>



    </View>
  )
}

function Neo({ navigation }) {
  return (
    <ScrollView style={styles.neoquimica}>
      <Image source={require('./assets/estadios/neo/neo1.jpg')} style={styles.imgGrande}></Image>


      <View style={styles.imagens}>

        <Text style={styles.txtApresenta}>No coração de São Paulo, pulsa a alma do Timão.</Text>

        <Image source={require('./assets/estadios/neo/neo2.jpg')} style={styles.imgPequena}></Image>

        <Image source={require('./assets/estadios/neo/neo3.jpg')} style={styles.imgPequena}></Image>

        <Image source={require('./assets/estadios/neo/neo4.jpeg')} style={styles.imgPequena}></Image>

        <Image source={require('./assets/estadios/neo/neo5.jpg')} style={styles.imgPequena}></Image>
      </View>

    </ScrollView>
  )
}

function Allianz({ navigation }) {
  return (
    <ScrollView style={styles.neoquimica}>
      <Image source={require('./assets/estadios/bayer/bay1.jpg')} style={styles.imgGrande}></Image>


      <View style={styles.imagens}>

        <Text style={styles.txtApresenta}>Na Allianz, o Bayern respira sua força e união.</Text>

        <Image source={require('./assets/estadios/bayer/bay2.jpg')} style={styles.imgPequena}></Image>

        <Image source={require('./assets/estadios/bayer/bay3.jpg')} style={styles.imgPequena}></Image>

        <Image source={require('./assets/estadios/bayer/bay4.jpg')} style={styles.imgPequena}></Image>

        <Image source={require('./assets/estadios/bayer/bay5.jpg')} style={styles.imgPequena}></Image>
      </View>

    </ScrollView>
  )
}

function Emirates({ navigation }) {
  return (
    <ScrollView style={styles.neoquimica}>
      <Image source={require('./assets/estadios/arsenal/arse1.jpg')} style={styles.imgGrande}></Image>


      <View style={styles.imagens}>

        <Text style={styles.txtApresenta}>No Emirates, o Arsenal veste sua história.</Text>

        <Image source={require('./assets/estadios/arsenal/arse2.jpg')} style={styles.imgPequena}></Image>

        <Image source={require('./assets/estadios/arsenal/arse3.jpg')} style={styles.imgPequena}></Image>

        <Image source={require('./assets/estadios/arsenal/arse4.jpg')} style={styles.imgPequena}></Image>

        <Image source={require('./assets/estadios/arsenal/arse5.jpg')} style={styles.imgPequena}></Image>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#82c08c',
    alignItems: 'center'
  },
  bemvindo: {
    fontSize: 17,
    fontFamily: 'Fonte2',
    marginTop: 10,
    marginBottom: 20,
  },
  viewEstadios: {
    width: '90%',
    elevation: 5,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  imgEstadios: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  txtEstadios: {
    padding: 7,
    fontWeight: 'bold'
  },
  imgGrande: {
    width: '100%',
    height: 250
  },
  txtApresenta: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 40
  },
  neoquimica: {
  },
  imgPequena: {
    width: '90%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  imagens: {
    alignItems: 'center',
  },
});
