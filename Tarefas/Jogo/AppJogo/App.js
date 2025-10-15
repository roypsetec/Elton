import React, { useState, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert, Switch, ImageBackground, Animated } from 'react-native';
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

// --- NOSSO "BANCO DE DADOS" DE JOGADORES (ATUALIZADO) ---
const PLAYERS = {
  ronaldo: {
    id: 'ronaldo',
    nameKey: 'playerRonaldo',
    selectionImage: require('./assets/personagens/ronaldo.png'),
    kickerImage: require('./assets/game/ronaldo_kicker.png'),
    kickPosition: 'left', // Destro
  },
  messi: {
    id: 'messi',
    nameKey: 'playerMessi',
    selectionImage: require('./assets/personagens/messi.png'),
    kickerImage: require('./assets/game/messi_kicker.png'),
    kickPosition: 'right', // Canhoto
  },
  neymar: {
    id: 'neymar',
    nameKey: 'playerNeymar',
    selectionImage: require('./assets/personagens/neymar.png'),
    kickerImage: require('./assets/game/neymar_kicker.png'),
    kickPosition: 'left', // Destro
  },
};

export default function App() {
  const [locale, setLocale] = useState('pt-BR');
  const [isDifficultyHard, setIsDifficultyHard] = useState(false);
  i18n.locale = locale;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuPrincipal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MenuPrincipal">{(props) => <MenuPrincipal {...props} key={locale} />}</Stack.Screen>
        <Stack.Screen name="SelecaoModo">{(props) => <SelecaoModo {...props} key={locale} />}</Stack.Screen>
        <Stack.Screen name="Personagens">{(props) => <Personagens {...props} key={locale} />}</Stack.Screen>
        <Stack.Screen name="Configuracoes">{(props) => <Configuracoes {...props} setLocale={setLocale} isDifficultyHard={isDifficultyHard} setIsDifficultyHard={setIsDifficultyHard} key={locale} />}</Stack.Screen>
        <Stack.Screen name="TelaPenalti">{(props) => <TelaPenalti {...props} isDifficultyHard={isDifficultyHard} key={locale} />}</Stack.Screen>
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
      <Image source={require('./assets/logo.png')} style={{ width: 150, height: 150, marginBottom: 10 }} />
      <Text style={styles.logoText}>FUTEBOL MANIA</Text>
      <Text style={styles.logoSubText}>BRASIL EDITION</Text>
      <View style={styles.buttonGroup}>
        <Button title={i18n.t('play')} color="#007bff" onPress={() => navigation.navigate('Personagens')} />
        <View style={{ marginVertical: 10 }} />
        <Button title={i18n.t('settings')} color="#007bff" onPress={() => navigation.navigate('Configuracoes')} />
      </View>
    </ImageBackground>
  );
}

// ------------------------------------------
// 2. TELA: PERSONAGENS (FUNDO ATUALIZADO)
// ------------------------------------------
function Personagens({ navigation }) {
  const selectPlayerAndGo = (playerId) => {
    navigation.navigate('SelecaoModo', { playerId: playerId });
  };

  return (
    <ImageBackground source={require('./assets/fundo.png')} style={styles.telaPersonagem}>
      <Text style={styles.tituloTela}>{i18n.t('choosePlayer')}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.personagensScrollView}>
        {Object.values(PLAYERS).map((player) => (
          <View style={styles.opcoes} key={player.id}>
            <TouchableOpacity onPress={() => selectPlayerAndGo(player.id)}>
              <Image source={player.selectionImage} style={styles.imgPersonagem} />
            </TouchableOpacity>
            <Text style={styles.txtPersonagem}>{i18n.t(player.nameKey)}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.botaoVoltarFixo}>
        <Button title={i18n.t('back')} color="#6c757d" onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  );
}

// ------------------------------------------
// 3. TELA: SELEÇÃO DE MODO DE JOGO (FUNDO ATUALIZADO)
// ------------------------------------------
function SelecaoModo({ route, navigation }) {
  const { playerId } = route.params;

  const selectModeAndPlay = (gameMode) => {
    navigation.navigate('TelaPenalti', { playerId: playerId, mode: gameMode });
  };

  return (
    <ImageBackground source={require('./assets/fundo.png')} style={styles.modeScreen}>
      <Text style={styles.tituloTela}>{i18n.t('chooseMode')}</Text>

      <TouchableOpacity style={styles.modeCard} onPress={() => selectModeAndPlay('free')}>
        <Image source={require('./assets/modos/treino.png')} style={styles.modeImage} />
        <View style={styles.modeTextContainer}>
          <Text style={styles.modeTitle}>{i18n.t('modeFree')}</Text>
          <Text style={styles.modeDescription}>{i18n.t('modeFreeDesc')}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.modeCard} onPress={() => selectModeAndPlay('shootout')}>
        <Image source={require('./assets/modos/disputa.png')} style={styles.modeImage} />
        <View style={styles.modeTextContainer}>
          <Text style={styles.modeTitle}>{i18n.t('modeShootout')}</Text>
          <Text style={styles.modeDescription}>{i18n.t('modeShootoutDesc')}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.modeCard} onPress={() => selectModeAndPlay('suddenDeath')}>
        <Image source={require('./assets/modos/desafio.png')} style={styles.modeImage} />
        <View style={styles.modeTextContainer}>
          <Text style={styles.modeTitle}>{i18n.t('modeSuddenDeath')}</Text>
          <Text style={styles.modeDescription}>{i18n.t('modeSuddenDeathDesc')}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.botaoVoltarFixo}>
        <Button title={i18n.t('back')} color="#6c757d" onPress={() => navigation.goBack()} />
      </View>
    </ImageBackground>
  );
}


// ------------------------------------------
// 4. TELA: JOGO DE PÊNALTIS
// ------------------------------------------
function TelaPenalti({ route, navigation, isDifficultyHard }) {
  const { playerId, mode } = route.params;
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [kicksTaken, setKicksTaken] = useState(0);
  const [resultMessage, setResultMessage] = useState('');
  const [goalkeeperPos, setGoalkeeperPos] = useState('center');
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState('');
  const [isPaused, setIsPaused] = useState(false);

  const ballAnimation = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const selectedPlayer = PLAYERS[playerId];
  const kickerImageSource = selectedPlayer?.kickerImage || require('./assets/game/cobrador.png');

  const resetGame = () => {
    setPlayerScore(0);
    setCpuScore(0);
    setKicksTaken(0);
    setIsGameOver(false);
    setGameOverMessage('');
    setResultMessage('');
    ballAnimation.setValue({ x: 0, y: 0 });
  };

  const handleShot = (shotDirection) => {
    if (resultMessage || isGameOver || isPaused) return;

    let targetX = 0;
    if (shotDirection === 'left') targetX = -100;
    if (shotDirection === 'right') targetX = 80;

    let gkJump = 'center';
    const directions = ['left', 'center', 'right'];
    if (isDifficultyHard) {
      const randomChance = Math.random();
      if (randomChance < 0.66) {
        gkJump = shotDirection;
      } else {
        const otherDirections = directions.filter(dir => dir !== shotDirection);
        gkJump = otherDirections[Math.floor(Math.random() * otherDirections.length)];
      }
    } else {
      gkJump = directions[Math.floor(Math.random() * 3)];
    }

    Animated.timing(ballAnimation, {
      toValue: { x: targetX, y: -200 },
      duration: 400,
      useNativeDriver: false,
    }).start(() => {
      setGoalkeeperPos(gkJump);
      let goal = shotDirection !== gkJump;
      const newKicksTaken = kicksTaken + 1;

      let newPlayerScore = playerScore;
      let newCpuScore = cpuScore;

      if (goal) {
        newPlayerScore++;
        setPlayerScore(newPlayerScore);
        setResultMessage(i18n.t('goal'));
      } else {
        newCpuScore++;
        setCpuScore(newCpuScore);
        setResultMessage(i18n.t('save'));
      }
      setKicksTaken(newKicksTaken);

      setTimeout(() => {
        let gameHasEnded = false;

        if (mode === 'shootout' && newKicksTaken === 5) {
          gameHasEnded = true;
          if (newPlayerScore > newCpuScore) setGameOverMessage(i18n.t('playerWin'));
          else if (newCpuScore > newPlayerScore) setGameOverMessage(i18n.t('cpuWin'));
          else setGameOverMessage(i18n.t('draw'));
        } else if (mode === 'suddenDeath' && !goal) {
          gameHasEnded = true;
          setGameOverMessage(i18n.t('finalScore', { score: newPlayerScore }));
        }

        if (gameHasEnded) {
          setIsGameOver(true);
        } else {
          setResultMessage('');
          setGoalkeeperPos('center');
          ballAnimation.setValue({ x: 0, y: 0 });
        }
      }, 1500);
    });
  };

  const goalkeeperStyle = { ...styles.goalkeeper, left: goalkeeperPos === 'left' ? '5%' : (goalkeeperPos === 'right' ? '65%' : '35%'), };

  const kickerStyle = [
    styles.kickerImage,
    selectedPlayer.kickPosition === 'right'
      ? { right: '-70%' }
      : { left: '0%' }
  ];

  return (
    <ImageBackground source={require('./assets/game/campo.png')} style={styles.penaltyScreen}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{mode === 'suddenDeath' ? `${i18n.t('score')}: ${playerScore}` : `${i18n.t('score')}: ${playerScore} X ${cpuScore}`}</Text>
      </View>

      {!isGameOver && (
        <TouchableOpacity style={styles.pauseButtonContainer} onPress={() => setIsPaused(true)}>
          <Image source={require('./assets/game/pause_icon.png')} style={styles.pauseIcon} />
        </TouchableOpacity>
      )}

      <View style={styles.traveArea}>
        <ImageBackground source={require('./assets/game/trave.png')} style={styles.traveImage} resizeMode="contain">
          <View style={styles.goalTargets}>
            <TouchableOpacity style={styles.target} onPress={() => handleShot('left')} disabled={isGameOver || isPaused} />
            <TouchableOpacity style={styles.target} onPress={() => handleShot('center')} disabled={isGameOver || isPaused} />
            <TouchableOpacity style={styles.target} onPress={() => handleShot('right')} disabled={isGameOver || isPaused} />
          </View>
          <Image source={require('./assets/game/goleiro.png')} style={goalkeeperStyle} />
        </ImageBackground>
      </View>

      {resultMessage && !isGameOver && <Text style={styles.resultMessage}>{resultMessage}</Text>}

      <View style={styles.kickingArea}>
        <Image source={kickerImageSource} style={kickerStyle} />
        <Animated.Image source={require('./assets/game/ball.png')} style={[styles.ballImage, ballAnimation.getLayout()]} />
      </View>

      {isGameOver && (
        <View style={styles.gameOverOverlay}>
          <Text style={styles.gameOverText}>{gameOverMessage}</Text>
          <View style={styles.gameOverButtons}>
            <Button title={i18n.t('playAgain')} onPress={resetGame} />
            <View style={{ marginVertical: 10 }} />
            <Button title={i18n.t('backToMenu')} color="#6c757d" onPress={() => navigation.popToTop()} />
          </View>
        </View>
      )}

      {isPaused && (
        <View style={styles.pauseOverlay}>
          <Text style={styles.pauseTitle}>PAUSADO</Text>
          <View style={styles.pauseButtons}>
            <Button title={i18n.t('resumeGame')} onPress={() => setIsPaused(false)} />
            <View style={{ marginVertical: 10 }} />
            <Button title={i18n.t('exitMatch')} color="#c83e3e" onPress={() => navigation.popToTop()} />
          </View>
        </View>
      )}
    </ImageBackground>
  );
}

// ------------------------------------------
// 5. TELA: CONFIGURAÇÕES (FUNDO ATUALIZADO)
// ------------------------------------------
function Configuracoes({ navigation, setLocale, isDifficultyHard, setIsDifficultyHard }) {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  return (
    <ImageBackground source={require('./assets/fundo.png')} style={styles.settingsContainer}>
      <Text style={styles.headerTitle}>{i18n.t('settings')}</Text>
      <View style={styles.settingsOptionsContainer}>
        <View style={styles.configOption}>
          <Text style={styles.configText}>{i18n.t('sound')}</Text>
          <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isSoundEnabled ? "#f5dd4b" : "#f4f3f4"} onValueChange={() => setIsSoundEnabled(previousState => !previousState)} value={isSoundEnabled} />
        </View>
        <View style={styles.configOption}>
          <Text style={styles.configText}>{i18n.t('difficulty')}</Text>
          <Switch trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isDifficultyHard ? "#f5dd4b" : "#f4f3f4"} onValueChange={() => setIsDifficultyHard(previousState => !previousState)} value={isDifficultyHard} />
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
    </ImageBackground>
  )
}

// ------------------------------------------
// ESTILOS
// ------------------------------------------
const styles = StyleSheet.create({
  tituloTela: { fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 30, textAlign: 'center', textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 },
  botaoVoltarFixo: { position: 'absolute', bottom: 40, width: '80%', alignSelf: 'center' },
  telaMenu: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoText: { fontSize: 32, fontWeight: '900', color: 'yellow', marginBottom: 5, textShadowColor: 'black', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 3, },
  logoSubText: { fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 50, },
  buttonGroup: { width: '70%', },
  telaPersonagem: { flex: 1, paddingTop: 50 },
  personagensScrollView: { maxHeight: 350, paddingHorizontal: 20, marginTop: 50},
  opcoes: { marginHorizontal: 20, alignItems: 'center', justifyContent: 'center' },
  imgPersonagem: { width: 200, height: 300, borderRadius: 10, },
  txtPersonagem: { fontSize: 18, fontWeight: 'bold', marginTop: 10, backgroundColor: '#000000ce', color: 'white', borderRadius: 4, textAlign: 'center', paddingVertical: 2, paddingHorizontal: 10, },
  modeScreen: { flex: 1, paddingTop: 50, paddingHorizontal: 20 },
  modeCard: { flexDirection: 'row', width: '100%', backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 12, elevation: 4, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, shadowOffset: { width: 0, height: 2 }, marginBottom: 20, overflow: 'hidden' },
  modeImage: { width: 100, height: 100, },
  modeTextContainer: { flex: 1, padding: 15, justifyContent: 'center' },
  modeTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  modeDescription: { fontSize: 14, color: '#666', marginTop: 4 },
  settingsContainer: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 30, textAlign: 'center', textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 },
  settingsOptionsContainer: { width: '100%' },
  configOption: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, marginVertical: 8, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 8, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1.5, },
  configText: { color: '#343a40', fontSize: 18, fontWeight: '600', },
  penaltyScreen: { flex: 1, },
  scoreContainer: { paddingTop: 50, alignItems: 'center', padding: 10, backgroundColor: 'rgba(0,0,0,0.4)' },
  scoreText: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  traveArea: { width: '100%', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '53%' },
  traveImage: { width: '100%', height: 200, justifyContent: 'center', alignItems: 'center' },
  goalTargets: { flexDirection: 'row', width: '100%', height: '100%', position: 'absolute' },
  target: { flex: 1 },
  goalkeeper: { width: '30%', height: '70%', resizeMode: 'contain', position: 'absolute', bottom: '10%' },
  resultMessage: { position: 'absolute', top: '45%', alignSelf: 'center', fontSize: 50, fontWeight: 'bold', color: 'yellow', textShadowColor: 'black', textShadowOffset: { width: 2, height: 2 }, textShadowRadius: 3, },
  kickingArea: { position: 'absolute', bottom: 10, width: '100%', height: 270, },
  kickerImage: { width: 150, height: 250, resizeMode: 'contain', },
  ballImage: { width: 40, height: 40, position: 'absolute', bottom: 20, marginLeft: 185, marginTop: 135 },
  gameOverOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' },
  gameOverText: { fontSize: 40, fontWeight: 'bold', color: 'white', marginBottom: 30, textAlign: 'center' },
  gameOverButtons: { width: '60%' },
  pauseButtonContainer: { position: 'absolute', top: 40, right: 10, zIndex: 10 },
  pauseIcon: { width: 60, height: 60, tintColor: 'white' },
  pauseOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', alignItems: 'center' },
  pauseTitle: { fontSize: 40, fontWeight: 'bold', color: 'white', marginBottom: 30 },
  pauseButtons: { width: '60%' }
});

