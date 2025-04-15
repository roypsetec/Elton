import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
      <FontAwesome5 name="pizza-slice" size={20} color="#ffffff" />
      <Text style={styles.text}>Pizzaria Presunto</Text>
      </View>

      <ImageBackground
      source={require('./assets/pizza.jpg')} 
      style={styles.imagem}
      resizeMode='stretch'>
      </ImageBackground>

      <View style={[styles.botoes, {backgroundColor: 'red'}]}>
      </View>

      <View style={[styles.botoes, {backgroundColor: 'red'}]}>
      </View>

      <View style={[styles.botoes, {backgroundColor: 'red'}]}>
      </View>

      <View style={[styles.botoes, {backgroundColor: 'red'}]}>
      </View>

      <View style={[styles.botoes, {backgroundColor: 'red'}]}>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff00',
    alignItems: 'center',
  },

  logo: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#9b0000',
  },

  text: {
    marginLeft: 10,
    fontSize: 20,
    color: 'white',
  },

  imagem: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botoes: {
    width: 350,
    height: 100,
    borderRadius: 20,
    margin: 10
  }
});
