import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Image, Dimensions, Switch, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Removidos imports não utilizados: StatusBar, TouchableOpacity, useFonts

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

// ------------------------------------------
// 1. TELA: MENU PRINCIPAL
// ------------------------------------------
function MenuPrincipal({ navigation }) {
  return (
    <View style={styles.telaMenu}>
      <Text style={styles.logoText}>ADVENTURE LAND 2</Text>
      <Text style={styles.logoSubText}>DELUXE EDITION</Text>
      <View style={styles.buttonGroup}>
        <Button title="Jogar" color="#007bff" onPress={() => navigation.navigate('SelecaoNivel')} />
        <View style={{ marginVertical: 10 }} />
        <Button title="Personagens" color="#007bff" onPress={() => navigation.navigate('Personagens')} />
        <View style={{ marginVertical: 10 }} />
        <Button title="Configurações" color="#007bff" onPress={() => navigation.navigate('Configuracoes')} />
      </View>
    </View>
  );
}

// ------------------------------------------
// 2. TELA: SELEÇÃO DE NÍVEL (Corrigido o Voltar)
// ------------------------------------------
function SelecaoNivel({ navigation }) { // Recebe navigation
  return (
    <View style={styles.levelScreen}>

      <Text style={styles.tituloTela}>Escolha o Estadio</Text>

      <View style={styles.levelCard}>
        <Image source={require('./assets/niveis/mirassol.png')} style={styles.levelImage} />
        <Text style={styles.levelText}>Mirassol - Maião</Text>
      </View>

      <View style={styles.levelCard}>
        <Image source={require('./assets/niveis/corinthians.png')} style={styles.levelImage} />
        <Text style={styles.levelText}>Corinthians - Neo Química</Text>
      </View>

      <View style={styles.levelCard}>
        <Image source={require('./assets/niveis/bayern.png')} style={styles.levelImage} />
        <Text style={styles.levelText}>Bayern - Allianz Arena</Text>
      </View>

      <View style={styles.botaoVoltar}>
        <Button title="Voltar" color="#6c757d" onPress={() => navigation.goBack()} />
      </View>

    </View>
  );
}

// ------------------------------------------
// 3. TELA: PERSONAGENS (COM SCROLLVIEW PARA VISUALIZAÇÃO)
// ------------------------------------------
function Personagens({ navigation }) {
  return (
    <View style={styles.telaPersonagem}>
      <Text style={styles.tituloTela}>Escolha seu Jogador</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.personagensScrollView} >

        <View style={styles.opções}>
          <TouchableOpacity onPress={() => Alert.alert("Seleção", 'Você selecionou Memphis Depay! Volte ao Menu e comece a jogar.',)}>
            <Image source={require('./assets/personagens/memphis.png')} style={styles.imgPersonagem} />
          </TouchableOpacity>
          <Text style={styles.txtPersonagem}>Memphis Depay</Text>
        </View>

        <View style={styles.opções}>
          <TouchableOpacity onPress={() => Alert.alert("Seleção", 'Você selecionou Ángel Romero! Volte ao Menu e comece a jogar.',)}>
            <Image source={require('./assets/personagens/romero.png')} style={styles.imgPersonagem} />
          </TouchableOpacity>
          <Text style={styles.txtPersonagem}>Ángel Romero</Text>
        </View>

        <View style={styles.opções}>
          <TouchableOpacity onPress={() => Alert.alert("Seleção", 'Você selecionou Yuri Alberto! Volte ao Menu e comece a jogar.',)}>
            <Image source={require('./assets/personagens/yuri.png')} style={styles.imgPersonagem} />
          </TouchableOpacity>
          <Text style={styles.txtPersonagem}>Yuri Alberto</Text>
        </View>
      </ScrollView>

      <View style={styles.botaoVoltar}>
        <Button title="Voltar" color="#6c757d" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

// ------------------------------------------
// 4. TELA: CONFIGURAÇÕES (Com Funcionalidade Mínima)
// ------------------------------------------
function Configuracoes({ navigation }) {
  // Funcionalidade Mínima: Usa useState
  const [isSoundOn, setIsSoundOn] = useState(true);
  const toggleSound = () => setIsSoundOn(previousState => !previousState);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.tituloTela}>Configurações</Text>

      <View style={styles.configOption}>
        <Text style={styles.configText}>Som: {isSoundOn ? 'Ligado' : 'Desligado'}</Text>
        <Switch onValueChange={toggleSound} value={isSoundOn} />
      </View>

      <View style={styles.configOption}>
        <Text style={styles.configText}>Dificuldade: Médio</Text>
      </View>
      <View style={styles.configOption}>
        <Text style={styles.configText}>Idioma: Português</Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <Button title="Voltar" color="#6c757d" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

// ------------------------------------------
// ESTILOS (Styles) - Ajustados
// ------------------------------------------
const styles = StyleSheet.create({
//style geral
  tituloTela: { fontSize: 28, fontWeight: 'bold', color: '#343a40', marginBottom: 30, textAlign: 'center' },
  botaoVoltar: { marginTop: 40, width: '60%' },






 //style menu
  telaMenu: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00bfff', },
  logoText: { fontSize: 32, fontWeight: '900', color: 'yellow', marginBottom: 5, textShadowColor: 'black', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 3, },
  logoSubText: { fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 50, },
  buttonGroup: { width: '70%', },






  //style nivel
  levelScreen: {
    flex: 1,
    backgroundColor: '#82c08c',
    alignItems: 'center',
    paddingTop: 50,
  },

  levelCard: {
    width: '90%',
    elevation: 5,
    marginVertical: 10,
    backgroundColor: '#e4e4e4',
    borderRadius: 12,
  },

  levelImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  levelText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    color: '#343a40'
  },





  //style personagem
  telaPersonagem: {
    flex: 1,
    backgroundColor: '#82c08c',
    alignItems: 'center',
    paddingTop: 50,
  },

  personagensScrollView: {
    flexGrow: 0,
    height: '50%',
    marginVertical: 100
  },

  opções: {
    marginHorizontal: 40,
  },

  imgPersonagem: {
    width: 200,
    height: 300,
  },

  txtPersonagem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: '#000000ce',
    color: 'white',
    borderRadius: 4,
    textAlign: 'center',
    paddingHorizontal: 10,
  },





  //style configuracao
  configOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#495057',
    borderRadius: 8,
  },

  configText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },

});
