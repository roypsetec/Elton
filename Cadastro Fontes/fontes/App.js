import { Text, SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    Fonte1: require('./assets/fonts/fonte1.ttf'),

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
          placeholder="Nome"
          placeholderTextColor="#aaa"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Telefone"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
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
    color: '#8B4513'
  },
  subtxt: {
    color: '#F5F5DC'
  },
  input: {
    backgroundColor: "#00000050",
    padding: 12,
    marginVertical: 15,
    borderRadius: 10,
    fontSize: 16,
    height: 50
  },
});
