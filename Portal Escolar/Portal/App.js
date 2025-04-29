import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.navBar}>

        <MaterialIcons name="menu" size={32} color="black" />
        <Text style={styles.textNav}>Área de Trabalho</Text>
        <Image source={require('./assets/LogoPerfil.png')} style={styles.logoPerfil}
        resizeMode='center'></Image>

      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  navBar: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    paddingTop: 50,
  },

  textNav: {
    fontSize: 16,
  },

  logoPerfil: {
    borderRadius: 30,
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: 'blue',
  }
});
