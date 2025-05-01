import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.navBar}>

        <TouchableOpacity>
        <MaterialIcons name="menu" size={32} color="black" />
        </TouchableOpacity>

        <Text style={styles.textNav}>Área de Trabalho</Text>

        <TouchableOpacity>
        <Image source={require('./assets/LogoPerfil.png')} style={styles.logoPerfil}
        resizeMode='center'></Image>
        </TouchableOpacity>

      </View>

      <ImageBackground source={require('./assets/LogoEscola.png')} 
      style={styles.imagemEscola} 
      resizeMode='stretch'
      />
      
      <View style={styles.botoesEscola}>
      <TouchableOpacity style={[styles.botoes, {backgroundColor: '#85008a',}]}>
      <FontAwesome5 name="blog" size={32} color="#ffffff" />
      <Text style={styles.textBotao}>Blog</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botoes, {backgroundColor: '#e6ac00',}]}>
      <Ionicons name="notifications" size={32} color="#ffffff" />
      <Text style={styles.textBotao}>Notificações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botoes, {backgroundColor: '#8e3dc3',}]}>
      <FontAwesome5 name="clock" size={32} color="#ffffff" />
      <Text style={styles.textBotao}>Notificações</Text>
      </TouchableOpacity>
      </View>





      <View style={styles.botoesEscola}>
      <TouchableOpacity style={[styles.botoes, {backgroundColor: '#cb3d42',}]}>
      <FontAwesome6 name="map-location-dot" size={32} color="#ffffff" />
      <Text style={styles.textBotao}>Localização</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botoes, {backgroundColor: '#007dc3',}]}>
      <MaterialIcons name="chat" size={32} color="#ffffff" />
      <Text style={styles.textBotao}>Mural</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botoes, {backgroundColor: '#149959',}]}>
      <FontAwesome6 name="list-check" size={32} color="#ffffff" />
      <Text style={styles.textBotao}>Comparecimento</Text>
      </TouchableOpacity>
      </View>





      <View style={styles.botoesEscola}>
      <TouchableOpacity style={[styles.botoes, {backgroundColor: '#c9bf00',}]}>
      <Entypo name="info-with-circle" size={32} color="#ffffff" />
      <Text style={styles.textBotao}>Informações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botoes, {backgroundColor: '#00b714',}]}>
      <MaterialIcons name="contacts" size={32} color="#ffffff" />
      <Text style={styles.textBotao}>Contatos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botoes, {backgroundColor: '#f04646',}]}>
      <Ionicons name="newspaper" size={32} color="#ffffff" />
      <Text style={styles.textBotao}>Notícias e Eventos</Text>
      </TouchableOpacity>
      </View>

      <Text style={styles.textAviso}>© Instituto Educacional Cristo Redentor</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b7d89',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navBar: {
    backgroundColor: '#707070',
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
    fontWeight: 'bold',
  },

  logoPerfil: {
    borderRadius: 30,
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: 'blue',
  },

  imagemEscola: {
    width: '100%',
    height: 300,

  },

  botoes: {
    width: '33.3%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'flex',
  },

  botoesEscola: {
    flexDirection: 'row',
  },

  textBotao: {
    fontSize: 15,
    color: '#ffffff',
    marginTop: 10,
  },

  textAviso: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
  },
});
