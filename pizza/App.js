import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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

      <View style={[styles.botoes, {backgroundColor: '#ffeeac'}]}>
      <MaterialIcons name="delivery-dining" size={50} color="black" />
      <Text style={styles.textBotao}>Delivery</Text>
      </View>

      <View style={[styles.botoes, {backgroundColor: '#ffcd7b'}]}>
      <MaterialIcons name="loyalty" size={50} color="black" />
      <Text style={styles.textBotao}>Fidelidade</Text>
      </View>

      <View style={[styles.botoes, {backgroundColor: '#925927'}]}>
      <MaterialIcons name="menu-book" size={50} color="black" />
      <Text style={styles.textBotao}>Cardápio</Text>
      </View>

      <View style={[styles.botoes, {backgroundColor: '#c02e00'}]}>
      <MaterialIcons name="assessment" size={50} color="black" />
      <Text style={styles.textBotao}>Avalie-nos</Text>
      </View>

      <View style={[styles.botoes, {backgroundColor: '#ff8d42'}]}>
      <MaterialIcons name="sms" size={50} color="black" />
      <Text style={styles.textBotao}>Contato</Text>
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
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },

  botoes: {
    width: 350,
    height: 100,
    borderRadius: 20,
    margin: 5,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },

  textBotao: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',

  },
});
