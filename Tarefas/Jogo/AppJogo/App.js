import React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert, Switch, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18n } from 'i18n-js';
import en from './translations/en.json';
import ptBR from './translations/pt-BR.json';

// Configuração do i18n
const i18n = new I18n({ en, 'pt-BR': ptBR });
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
        <Stack.Screen name="TelaPenalti">
          {(props) => <TelaPenalti {...props} key={locale} />}
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
    <View style={styles.telaMenu}>
      <Text style={styles.logoText}>FUTEBOL MANIA</Text>
      <Text style={styles.logoSubText}>BRASIL EDITION</Text>
      <View style={styles.buttonGroup}>
        <Button
          title={i18n.t('play')}
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
    </View>
  );
}

// ------------------------------------------
// 2. TELA: PERSONAGENS
// ------------------------------------------
function Personagens({ navigation }) {
  const selectPlayerAndGo = (playerNameKey) => {
    const playerName = i18n.t(playerNameKey);
    navigation.navigate('SelecaoNivel', { player: playerName });
  };

  return (
    <View style={styles.telaPersonagem}>
      <Text style={styles.tituloTela}>{i18n.t('choosePlayer')}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.personagensScrollView}>
        <View style={styles.opcoes}>
          <TouchableOpacity onPress={() => selectPlayerAndGo('playerDepay')}>
            <Image source={require('./assets/personagens/memphis.png')} style={styles.imgPersonagem} />
          </TouchableOpacity>
          <Text style={styles.txtPersonagem}>{i18n.t('playerDepay')}</Text>
        </View>
        <View style={styles.opcoes}>
          <TouchableOpacity onPress={() => selectPlayerAndGo('playerRomero')}>
            <Image source={require('./assets/personagens/romero.png')} style={styles.imgPersonagem} />
          </TouchableOpacity>
          <Text style={styles.txtPersonagem}>{i18n.t('playerRomero')}</Text>
        </View>
        <View style={styles.opcoes}>
          <TouchableOpacity onPress={() => selectPlayerAndGo('playerYuri')}>
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
// 3. TELA: SELEÇÃO DE ESTÁDIO
// ------------------------------------------
function SelecaoNivel({ route, navigation }) {
  const { player } = route.params;

  const selectStadiumAndPlay = (stadiumNameKey) => {
    const stadiumName = i18n.t(stadiumNameKey);
    navigation.navigate('TelaPenalti', { player: player, stadium: stadiumName });
  };

  return (
    <View style={styles.levelScreen}>
      <Text style={styles.tituloTela}>{i18n.t('chooseStadium')}</Text>
      <TouchableOpacity style={styles.levelCard} onPress={() => selectStadiumAndPlay('stadiumMirassol')}>
        <Image source={require('./assets/niveis/mirassol.png')} style={styles.levelImage} />
        <Text style={styles.levelText}>{i18n.t('stadiumMirassol')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.levelCard} onPress={() => selectStadiumAndPlay('stadiumCorinthians')}>
        <Image source={require('./assets/niveis/corinthians.png')} style={styles.levelImage} />
        <Text style={styles.levelText}>{i18n.t('stadiumCorinthians')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.levelCard} onPress={() => selectStadiumAndPlay('stadiumBayern')}>
        <Image source={require('./assets/niveis/bayern.png')} style={styles.levelImage} />
        <Text style={styles.levelText}>{i18n.t('stadiumBayern')}</Text>
      </TouchableOpacity>
      <View style={styles.botaoVoltarFixo}>
        <Button title={i18n.t('back')} color="#6c757d" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

// ------------------------------------------
// 4. TELA: JOGO DE PÊNALTIS (COM LÓGICA)
// ------------------------------------------
function TelaPenalti({ route, navigation }) {
  const { player, stadium } = route.params;
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [kicks, setKicks] = useState(0);
  const [resultMessage, setResultMessage] = useState('');
  const [goalkeeperPos, setGoalkeeperPos] = useState('center'); // 'left', 'center', 'right'

  const handleShot = (shotDirection) => {
    if (resultMessage) return; // Impede novo chute enquanto a mensagem é exibida

    const directions = ['left', 'center', 'right'];
    const gkJump = directions[Math.floor(Math.random() * 3)];
    setGoalkeeperPos(gkJump);
    
    let goal = true;
    if (shotDirection === gkJump) {
        goal = false;
    }

    if (goal) {
        setPlayerScore(playerScore + 1);
        setResultMessage(i18n.t('goal'));
    } else {
        setCpuScore(cpuScore + 1);
        setResultMessage(i18n.t('save'));
    }
    setKicks(kicks + 1);

    // Limpa a mensagem e reseta o goleiro após um tempo
    setTimeout(() => {
        setResultMessage('');
        setGoalkeeperPos('center');
    }, 1500);
  };
  
  // Estilo dinâmico para a posição do goleiro
  const goalkeeperStyle = {
      ...styles.goalkeeper,
      left: goalkeeperPos === 'left' ? '5%' : (goalkeeperPos === 'right' ? '65%' : '35%'),
  };

  return (
    <ImageBackground source={require('./assets/game/goal.png')} style={styles.penaltyScreen} resizeMode="contain">
        <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>{i18n.t('score')}: {playerScore} X {cpuScore}</Text>
        </View>
        
        <View style={styles.goalArea}>
            <ImageBackground source={require('./assets/game/trave.png')} style={styles.traveImage} resizeMode="contain">
                <View style={styles.goalTargets}>
                    <TouchableOpacity style={styles.target} onPress={() => handleShot('left')} />
                    <TouchableOpacity style={styles.target} onPress={() => handleShot('center')} />
                    <TouchableOpacity style={styles.target} onPress={() => handleShot('right')} />
                </View>
                <Image source={require('./assets/game/goalkeeper.png')} style={goalkeeperStyle} />
            </ImageBackground>
        </View>

        {resultMessage && <Text style={styles.resultMessage}>{resultMessage}</Text>}

        <Image source={require('./assets/game/ball.png')} style={styles.ball} />
        
        <View style={styles.botaoVoltarFixo}>
            <Button title={i18n.t('exitMatch')} color="#c83e3e" onPress={() => navigation.popToTop()} />
        </View>
    </ImageBackground>
  );
}

// ------------------------------------------
// 5. TELA: CONFIGURAÇÕES
// ------------------------------------------
function Configuracoes({ navigation, setLocale }) {
    // ... (código da tela de configurações permanece o mesmo)
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isDifficultyHard, setIsDifficultyHard] = useState(false);

  return (
    <View style={styles.settingsContainer}>
      <Text style={styles.headerTitle}>{i18n.t('settings')}</Text>
        <View style={styles.settingsOptionsContainer}>
            <View style={styles.configOption}>
                <Text style={styles.configText}>{i18n.t('sound')}</Text>
                <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isSoundEnabled ? "#f5dd4b" : "#f4f3f4"} onValueChange={() => setIsSoundEnabled(previousState => !previousState)} value={isSoundEnabled}/>
            </View>
            <View style={styles.configOption}>
                <Text style={styles.configText}>{i18n.t('difficulty')}</Text>
                 <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isDifficultyHard ? "#f5dd4b" : "#f4f3f4"} onValueChange={() => setIsDifficultyHard(previousState => !previousState)} value={isDifficultyHard}/>
            </View>
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
// ESTILOS (COM ADIÇÕES PARA A TELA DE PÊNALTI)
// ------------------------------------------
const styles = StyleSheet.create({
  tituloTela: { fontSize: 28, fontWeight: 'bold', color: '#343a40', marginBottom: 30, textAlign: 'center' },
  botaoVoltarFixo: { position: 'absolute', bottom: 40, width: '80%', alignSelf: 'center' },
  telaMenu: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00bfff', },
  logoText: { fontSize: 32, fontWeight: '900', color: 'yellow', marginBottom: 5, textShadowColor: 'black', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 3, },
  logoSubText: { fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 50, },
  buttonGroup: { width: '70%', },
  levelScreen: { flex: 1, backgroundColor: '#82c08c', paddingTop: 50, },
  levelCard: { width: '90%', alignSelf: 'center', elevation: 5, marginVertical: 10, backgroundColor: '#e4e4e4', borderRadius: 12, },
  levelImage: { width: '100%', height: 140, borderTopLeftRadius: 12, borderTopRightRadius: 12, },
  levelText: { fontSize: 18, fontWeight: 'bold', padding: 10, textAlign: 'center', color: '#343a40' },
  telaPersonagem: { flex: 1, backgroundColor: '#82c08c', alignItems: 'center', paddingTop: 50, },
  personagensScrollView: { maxHeight: 350, flexGrow: 0, },
  opcoes: { marginHorizontal: 20, alignItems: 'center', justifyContent: 'center' },
  imgPersonagem: { width: 200, height: 300, borderRadius: 10, },
  txtPersonagem: { fontSize: 18, fontWeight: 'bold', marginTop: 10, backgroundColor: '#000000ce', color: 'white', borderRadius: 4, textAlign: 'center', paddingVertical: 2, paddingHorizontal: 10, },
  settingsContainer: { flex: 1, paddingTop: 60, backgroundColor: '#f8f9fa', alignItems: 'center', },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#343a40', marginBottom: 30 },
  settingsOptionsContainer: { width: '90%' },
  configOption: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, marginVertical: 8, backgroundColor: '#ffffff', borderRadius: 8, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1.5, },
  configText: { color: '#343a40', fontSize: 18, fontWeight: '600', },
  penaltyScreen: { flex: 1, justifyContent: 'space-between' },
  scoreContainer: { paddingTop: 50, alignItems: 'center', padding: 10, backgroundColor: 'rgba(0,0,0,0.4)' },
  scoreText: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  goalArea: {
    width: '100%',
    
    
  },
  traveImage: {
    width: '100%',
    height: 200, // Ajuste a altura conforme sua imagem
    
    
  },
  goalTargets: {
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      position: 'absolute',
  },
  target: {
      flex: 1,
      // backgroundColor: 'rgba(255,0,0,0.3)', // Remova ou comente para tornar invisível
  },
  goalkeeper: {
      width: '30%',
      height: '70%',
      resizeMode: 'contain',
      position: 'absolute',
      bottom: '10%',
  },
  ball: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginBottom: 60,
  },
  resultMessage: {
    position: 'absolute',
    top: '45%',
    alignSelf: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'yellow',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  }
});

