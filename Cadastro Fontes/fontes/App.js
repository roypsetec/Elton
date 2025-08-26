import { Text, SafeAreaView, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

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

    <SafeAreaView style={styles.container}>
      <View style={styles.bola}>
        <Text style={styles.icone}>🦍</Text>
      </View>

      <View style={styles.cadastro}>
        <Text style={styles.txtcadastro}>Cadastre-se</Text>
        <Text style={styles.subtxt}>Insira seus dados para garantir essa experiência</Text>

        <Text style={styles.txtcampos}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.txtcampos}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu@email.com"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />

        <Text style={styles.txtcampos}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="(00) 00000-0000"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />

        <Text style={styles.txtcampos}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="*****"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <Text style={styles.txtcampos}>Confirmar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="*****"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao} onPress={() => alert('Você criou sua conta!')} >
          <Text style={styles.txtcriar}>Criar conta</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.logar}>
        <Text style={styles.txtja}>
          Já tem uma conta?{' '}
          <Text style={styles.txtlogin} onPress={() => alert('Página em desenvolvimento!')} >
            Login
          </Text>
        </Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B4332',

  },
  bola: {
    borderBottomRightRadius: "100%",
    borderBottomLeftRadius: "100%",
    height: 140,
    width: "100%",
    padding: 20,
    backgroundColor: '#a1b915',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  },
  icone: {
    fontSize: 50,
  },
  cadastro: {
    marginHorizontal: 20
  },
  txtcadastro: {
    fontSize: 50,
    fontFamily: 'Fonte1',
    color: '#da7127'
  },
  subtxt: {
    color: '#b1b1ae',
    marginBottom: 25,
    fontSize: 16
  },
  input: {
    backgroundColor: "#00000050",
    padding: 12,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 10,
    fontSize: 16,
    height: 60,
    color: "white",
    fontFamily: 'Fonte3'
  },
  txtcampos: {
    color: 'white',
  },
  botao: {
    backgroundColor: '#da7127',
    widht: '100%',
    height: 70,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  txtcriar: {
    fontSize: 36,
    color: '#1B4332',
    fontFamily: 'Fonte2',
  },
  logar: {
    alignItems: 'center',
  },
  txtja: {
    color: '#b1b1ae',
  },
  txtlogin: {
    color: '#ffffff'
  },

});
