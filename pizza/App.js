import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <FontAwesome5 name="pizza-slice" size={24} color="#ffffff" />
        <Text style={styles.text}>Pizzaria Presunto</Text>
      </View>

      <ImageBackground
        source={require('./assets/pizza.jpg')}
        style={styles.imagem}
        resizeMode='stretch'>
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>A felicidade está a algumas fatias de distância!</Text>
        </View>
      </ImageBackground>

      <View style={[styles.botoes, { backgroundColor: '#d86316' }]}>
        <MaterialIcons name="delivery-dining" size={50} color="black" />
        <View style={styles.textGroup}>
          <Text style={styles.textBotao}>Delivery</Text>
          <Text style={styles.descBotao}>Faça seu pedido</Text>
        </View>
      </View>

      <View style={[styles.botoes, { backgroundColor: '#d86316' }]}>
        <MaterialIcons name="loyalty" size={50} color="black" />
        <View style={styles.textGroup}>
          <Text style={styles.textBotao}>Fidelidade</Text>
          <Text style={styles.descBotao}>Compre e ganhe</Text>
        </View>
      </View>

      <View style={[styles.botoes, { backgroundColor: '#d86316' }]}>
        <MaterialIcons name="menu-book" size={50} color="black" />
        <View style={styles.textGroup}>
          <Text style={styles.textBotao}>Cardápio</Text>
          <Text style={styles.descBotao}>Pizzas, Porções e Bebidas</Text>
        </View>
      </View>

      <View style={[styles.botoes, { backgroundColor: '#d86316' }]}>
        <MaterialIcons name="assessment" size={50} color="#black" />
        <View style={styles.textGroup}>
          <Text style={styles.textBotao}>Avalie-nos</Text>
          <Text style={styles.descBotao}>Queremos a sua opnião</Text>
        </View>
      </View>


      <View style={[styles.botoes, { backgroundColor: '#d86316' }]}>
        <MaterialIcons name="sms" size={50} color="black" />
        <View style={styles.textGroup}>
          <Text style={styles.textBotao}>Contato</Text>
          <Text style={styles.descBotao}>Manda um oi</Text>
        </View>
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
    paddingTop: 30,
    backgroundColor: '#9b0000',
  },

  text: {
    marginLeft: 10,
    fontSize: 24,
    color: 'white',
  },

  imagem: {
    width: '100%',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  botoes: {
    width: 350,
    height: 110,
    borderRadius: 20,
    margin: 5,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },

  textBotao: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',

  },

  descBotao: {
    fontSize: 16,
    marginLeft: 10,

  },

  textGroup: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#0000009f', // preto com transparência
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  overlayText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },


});
