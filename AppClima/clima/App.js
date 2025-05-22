import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, Image, ScrollView } from 'react-native';
import styles from './css';
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';

export default function App() {
  return (

    <ImageBackground source={require('./assets/fundo.jpg')} style={styles.fundo}>

      <View style={styles.container}>

        <View style={styles.navbar}>
          <Ionicons name="menu" size={32} color="white" />
          <Text style={styles.textNavBar}>Votuporanga</Text>
          <Ionicons name="location-sharp" size={20} color="white" />
        </View>
        <View style={styles.hoje}>
          <Text style={styles.textAgora}>Agora</Text>
          <View style={styles.clima}>
            <Text style={{ color: 'white', fontSize: 60, paddingTop: 10, }}>33°</Text>
            <Image source={require('./assets/sol.png')} style={styles.sol} />
          </View>
          <Text style={{ color: 'white', fontSize: 15, paddingTop: 10, }}>Máxima: 34º / Mínima: 17º</Text>
        </View>

        <View style={styles.alerta}>
          <Foundation name="alert" size={40} color="#d29599" />
          <Text style={{ color: '#d29599', paddingLeft: 20, }}>Alerta Laranja, Baixa Umidade</Text>
        </View>

        <View style={styles.conteudo}>

          <Text style={styles.textAgora}>Previsão do tempo de hora em hora</Text>

          <ScrollView style={styles.climaHorizontal} horizontal>
            <View style={styles.umclima}>
              <Text style={styles.textClima}>33º</Text>
              <Image source={require('./assets/sol.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>Agora</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>31º</Text>
              <Image source={require('./assets/nublado.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>14:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>29º</Text>
              <Image source={require('./assets/nublado.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>15:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>27º</Text>
              <Image source={require('./assets/chuva.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>16:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>27º</Text>
              <Image source={require('./assets/chuva.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>17:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>26º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>18:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>25º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>19:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>25º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>20:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>25º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>21:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>23º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>22:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>23º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>23:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>22º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>00:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>22º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>01:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>21º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>02:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>20º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>03:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>19º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>04:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>20º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>05:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>23º</Text>
              <Image source={require('./assets/lua.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>06:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>24º</Text>
              <Image source={require('./assets/nublado.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>07:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>24º</Text>
              <Image source={require('./assets/nublado.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>08:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>25º</Text>
              <Image source={require('./assets/nublado.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>09:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>26º</Text>
              <Image source={require('./assets/sol.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>10:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>26º</Text>
              <Image source={require('./assets/sol.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>11:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>27º</Text>
              <Image source={require('./assets/sol.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>12:00</Text>
            </View>

            <View style={styles.umclima}>
              <Text style={styles.textClima}>27º</Text>
              <Image source={require('./assets/sol.png')} style={styles.iconeClima} />
              <Text style={styles.textClima}>13:00</Text>
            </View>
          </ScrollView>
          
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

