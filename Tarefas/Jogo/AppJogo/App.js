import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert, Switch, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18n } from 'i18n-js';
import en from './translations/en.json';
import ptBR from './translations/pt-BR.json';

// Cria uma nova instância da I18n e entrega os dicionários
const i18n = new I18n({
  en,
  'pt-BR': ptBR,
});

// Define o português como idioma padrão
i18n.defaultLocale = 'pt-BR';
i18n.enableFallback = true;

const Stack = createStackNavigator();

export default function App() {
  const [locale, setLocale] = useState('pt-BR');
  i18n.locale = locale;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuPrincipal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MenuPrincipal">
          {(props) => <MenuPrincipal {...props} key={locale} />}
        </Stack.Screen>
        <Stack.Screen name="SelecaoNivel">
          {(props) => <SelecaoNivel {...props} key={locale} />}
        </Stack.Screen>
        <Stack.Screen name="Personagens">
          {(props) => <Personagens {...props} key={locale} />}
        </Stack.Screen>
        <Stack.Screen name="Configuracoes">
          {(props) => <Configuracoes {...props} setLocale={setLocale} key={locale} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ------------------------------------------
// 1. TELA: MENU PRINCIPAL
// ------------------------------------------
function MenuPrincipal({ navigation }) {
  return (
      <ImageBackground source={require('./assets/fundo.png')} style={styles.telaMenu}>
      <Text style={styles.logoText}>ADVENTURE LAND 2</Text>
      <Text style={styles.logoSubText}>DELUXE EDITION</Text>
      <Image source={require('./assets/logo.png')} style={styles.logoApp}></Image>
      <View style={styles.buttonGroup}>
        <Button
          title={i18n.t('play')}
          color="#007bff"
          onPress={() => navigation.navigate('SelecaoNivel')}
        />
        <View style={{ marginVertical: 10 }} />
        <Button
          title={i18n.t('characters')}
          color="#007bff"
          onPress={() => navigation.navigate('Personagens')}
        />
        <View style={{ marginVertical: 10 }} />
        <Button
          title={i18n.t('settings')}
          color="#007bff"
          onPress={() => navigation.navigate('Configuracoes')}
        />
      </View>
    </ImageBackground>
  );
}

// ------------------------------------------
// 2. TELA: SELEÇÃO DE NÍVEL
// ------------------------------------------
function SelecaoNivel({ navigation }) {
  return (
    <View style={styles.levelScreen}>

      <Text style={styles.tituloTela}>{i18n.t('chooseStadium')}</Text>

      <View style={styles.levelCard}>
        <Image source={require('./assets/niveis/mirassol.png')} style={styles.levelImage} />
        <Text style={styles.levelText}>{i18n.t('stadiumMirassol')}</Text>
      </View>

      <View style={styles.levelCard}>
        <Image source={require('./assets/niveis/corinthians.png')} style={styles.levelImage} />
        <Text style={styles.levelText}>{i18n.t('stadiumCorinthians')}</Text>
      </View>

      <View style={styles.levelCard}>
        <Image source={require('./assets/niveis/bayern.png')} style={styles.levelImage} />
        <Text style={styles.levelText}>{i18n.t('stadiumBayern')}</Text>
      </View>

      <View style={styles.botaoVoltarFixo}>
        <Button title={i18n.t('back')} color="#6c757d" onPress={() => navigation.goBack()} />
      </View>

    </View>
  );
}

// ------------------------------------------
// 3. TELA: PERSONAGENS
// ------------------------------------------
function Personagens({ navigation }) {
    // Função para mostrar o alerta traduzido
    const showSelectionAlert = (playerNameKey) => {
        const playerName = i18n.t(playerNameKey);
        const message = i18n.t('selectionAlertMessage', { playerName: playerName });
        Alert.alert(i18n.t('selectionAlertTitle'), message);
    }

  return (
    <View style={styles.telaPersonagem}>
      <Text style={styles.tituloTela}>{i18n.t('choosePlayer')}</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.personagensScrollView} >

        <View style={styles.opcoes}>
          <TouchableOpacity onPress={() => showSelectionAlert('playerDepay')}>
            <Image source={require('./assets/personagens/memphis.png')} style={styles.imgPersonagem} />
          </TouchableOpacity>
          <Text style={styles.txtPersonagem}>{i18n.t('playerDepay')}</Text>
        </View>

        <View style={styles.opcoes}>
          <TouchableOpacity onPress={() => showSelectionAlert('playerRomero')}>
            <Image source={require('./assets/personagens/romero.png')} style={styles.imgPersonagem} />
          </TouchableOpacity>
          <Text style={styles.txtPersonagem}>{i18n.t('playerRomero')}</Text>
        </View>

        <View style={styles.opcoes}>
          <TouchableOpacity onPress={() => showSelectionAlert('playerYuri')}>
            <Image source={require('./assets/personagens/yuri.png')} style={styles.imgPersonagem} />
          </TouchableOpacity>
          <Text style={styles.txtPersonagem}>{i18n.t('playerYuri')}</Text>
        </View>
      </ScrollView>

      <View style={styles.botaoVoltarFixo}>
        <Button title={i18n.t('back')} color="#6c757d" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

// ------------------------------------------
// 4. TELA: CONFIGURAÇÕES (VISUAL ATUALIZADO)
// ------------------------------------------
function Configuracoes({ navigation, setLocale }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isDifficultyHard, setIsDifficultyHard] = useState(false);

  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.headerTitle}>{i18n.t('settings')}</Text>

        <View style={styles.settingsOptionsContainer}>
            {/* Opção de Som */}
            <View style={styles.configOption}>
                <Text style={styles.configText}>{i18n.t('sound')}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isSoundEnabled ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={() => setIsSoundEnabled(previousState => !previousState)}
                    value={isSoundEnabled}
                />
            </View>

            {/* Opção de Dificuldade */}
            <View style={styles.configOption}>
                <Text style={styles.configText}>{i18n.t('difficulty')}</Text>
                 <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isDifficultyHard ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={() => setIsDifficultyHard(previousState => !previousState)}
                    value={isDifficultyHard}
                />
            </View>

            {/* Opção de Idioma */}
            <View style={styles.configOption}>
                 <Text style={styles.configText}>{i18n.t('selectLanguage')}</Text>
                 <View style={{ flexDirection: 'row' }}>
                    <Button title="EN" onPress={() => setLocale('en')} />
                    <View style={{ marginHorizontal: 2 }} />
                    <Button title="PT" onPress={() => setLocale('pt-BR')} />
                 </View>
            </View>
        </View>


      <View style={styles.botaoVoltarFixo}>
        <Button title={i18n.t('back')} color="#6c757d" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}


// ------------------------------------------
// ESTILOS
// ------------------------------------------
const styles = StyleSheet.create({
  //style geral
  tituloTela: { fontSize: 28, fontWeight: 'bold', color: '#343a40', marginBottom: 30, textAlign: 'center' },
  botaoVoltarFixo: { position: 'absolute', bottom: 40, width: '60%', alignSelf: 'center' },

  //style menu
  telaMenu: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00bfff', },
  logoText: { fontSize: 32, fontWeight: '900', color: 'yellow', marginBottom: 5, textShadowColor: 'black', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 3, },
  logoSubText: { fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 50, },
  buttonGroup: { width: '70%', },
  logoApp: { width: 150, height: 150, marginBottom: 30 },

  //style nivel
  levelScreen: {
    flex: 1,
    backgroundColor: '#82c08c',
    paddingTop: 50,
  },
  levelCard: {
    width: '90%',
    alignSelf: 'center',
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
    maxHeight: 350, 
    flexGrow: 0,
  },
  opcoes: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgPersonagem: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  txtPersonagem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    backgroundColor: '#000000ce',
    color: 'white',
    borderRadius: 4,
    textAlign: 'center',
    paddingVertical: 2,
    paddingHorizontal: 10,
  },

  //style configuracao
  settingsContainer: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  headerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#343a40',
      marginBottom: 30
  },
  settingsOptionsContainer: {
    width: '90%'
  },
  configOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  configText: {
    color: '#343a40',
    fontSize: 18,
    fontWeight: '600',
  },
});
