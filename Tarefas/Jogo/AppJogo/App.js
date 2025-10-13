import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuPrincipal" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
        <Stack.Screen name="SelecaoNivel" component={SelecaoNivel} />
        <Stack.Screen name="Personagens" component={Personagens} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MenuPrincipal({ navigation }) {
  // Apenas layout e botões de navegação
  return (
    <View style={styles.mainMenuContainer}>
      <Text style={styles.logoText}>ADVENTURE LAND 2</Text>
      <Text style={styles.logoSubText}>DELUXE EDITION</Text>

      <View style={styles.buttonGroup}>
        <Button
          title="Jogar"
          color="#007bff"
          onPress={() => navigation.navigate('SelecaoNivel')} // Navega para a tela SelecaoNivel
        />
        <View style={{ marginVertical: 10 }} />
        <Button
          title="Personagens"
          color="#007bff"
          onPress={() => navigation.navigate('Personagens')} // Navega para a tela Personagens
        />
        <View style={{ marginVertical: 10 }} />
        <Button
          title="Configurações"
          color="#007bff"
          onPress={() => navigation.navigate('Configuracoes')} // Navega para a tela Configuracoes
        />
      </View>
    </View>
  );
}

function SelecaoNivel({ setScreen }) {
  return (
    <ScrollView style={styles.levelScreen}>
      <Text style={styles.headerTitle}>Escolha o Nível</Text>

      {/* Nível 1 - Floresta */}
      <View style={styles.levelCard}>
        <View style={styles.levelImagePlaceholder}><Text>Imagem Floresta</Text></View>
        <Text style={styles.levelText}>Nível 1 - Floresta</Text>
      </View>

      {/* Nível 2 - Praia */}
      <View style={styles.levelCard}>
        <View style={styles.levelImagePlaceholder}><Text>Imagem Praia</Text></View>
        <Text style={styles.levelText}>Nível 2 - Praia</Text>
      </View>

      {/* Nível 3 - Deserto */}
      <View style={styles.levelCard}>
        <View style={styles.levelImagePlaceholder}><Text>Imagem Deserto</Text></View>
        <Text style={styles.levelText}>Nível 3 - Deserto</Text>
      </View>

      {/* Botão Voltar: Simplesmente volta para o MenuPrincipal */}
      <View style={{ margin: 20 }}>
        <Button
          title="Voltar"
          color="#6c757d"
          onPress={() => setScreen('MenuPrincipal')}
        />
      </View>
    </ScrollView>
  );
}

function Personagens({ navigation }) {
  return (
    <View style={styles.telaPersonagem}>
      <Text style={styles.tituloPersonagem}>Escolha seu Personagem</Text>

      <ScrollView horizontal style={styles.personagens}>

        <View style={styles.opcoes}>
          <Image source={require('./assets/personagens/barbosa.png')} style={styles.imgPersonagem} />
          <Text style={styles.txtPersonagem}>Barbosa Palmeirense</Text>
        </View>

        <View style={styles.opcoes}>
          <Image source={require('./assets/personagens/guilherme2.png')} style={styles.imgPersonagem} />
          <Text style={styles.txtPersonagem}>Guilherme Corinthiano</Text>
        </View>

      </ScrollView>

      <Button title="Voltar para o Menu" color="#6c757d" onPress={() => navigation.goBack()} />
    </View >
  );
}

function Configuracoes({ navigation }) {
  return (
    <View style={styles.home}>

    </View>
  )
}

const styles = StyleSheet.create({
  // Estilos Gerais de Container
  telaPersonagem: {
    flex: 1,
    backgroundColor: '#3d7ebe',
    alignItems: 'center',
  },
  tituloPersonagem: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 70,
    marginTop: 50,
  },

  // Estilos do Menu Principal
  mainMenuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bfff',
  },
  logoPlaceholder: {
    marginBottom: 50,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  logoText: {
    fontSize: 32,
    fontWeight: '900',
    color: 'yellow',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  logoSubText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  buttonGroup: {
    width: '80%',
  },

  // Estilos de Seleção de Nível
  levelScreen: {
    flex: 1,
    backgroundColor: '#e9ecef',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  levelCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  levelImagePlaceholder: {
    height: 150,
    backgroundColor: '#adb5bd',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    color: '#343a40',
  },

  // Estilos de Personagens
  personagens: {
    height: 500
  },

  txtPersonagem: {
    fontSize: 18,
    backgroundColor: '#000000ce',
    color: 'white',
    borderRadius: 4,

  },
  seta: {
    width: 100,
    height: 100,
    marginTop: 70,
  },
  imgPersonagem: {
    width: 200,
    height: 350,
  },
  opcoes: {
    marginHorizontal: 50
  },

});
