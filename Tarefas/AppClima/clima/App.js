import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, Image, ScrollView } from 'react-native';
import styles from './css';
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';

export default function App() {
  return (

    <ImageBackground source={require('./assets/fundo.jpg')} style={styles.fundo}>

      <ScrollView style={styles.container}>

        <View style={styles.navbar}>
          <Ionicons name="menu" size={32} color="white" />
          <Text style={styles.textNavBar}>Votuporanga</Text>
          <Ionicons name="location-sharp" size={20} color="white" />
        </View>
        <View style={styles.hoje}>
          <Text style={styles.textAgora}>Agora</Text>
          <View style={styles.clima}>
            <Text style={{ color: 'white', fontSize: 60, }}>33°</Text>
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

          <Text style={[styles.textAgora, { paddingTop: 20 }]}>Previsão do tempo para 7 dia(s)</Text>

          <View style={styles.climaVertical}>
            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Hoje</Text>
              <Image source={require('./assets/sol.png')} style={[styles.iconeVertical, { marginLeft: 150 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>34º / 17º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Terça-Feira</Text>
              <Image source={require('./assets/sol.png')} style={[styles.iconeVertical, { marginLeft: 106 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>35º / 17º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Quarta-Feira</Text>
              <Image source={require('./assets/nublado.png')} style={[styles.iconeVertical, { marginLeft: 100 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>29º / 20º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Quinta-Feira</Text>
              <Image source={require('./assets/chuva.png')} style={[styles.iconeVertical, { marginLeft: 102 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>24º / 17º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Sexta-Feira</Text>
              <Image source={require('./assets/chuva.png')} style={[styles.iconeVertical, { marginLeft: 106 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>23º / 17º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Sabádo</Text>
              <Image source={require('./assets/nublado.png')} style={[styles.iconeVertical, { marginLeft: 130 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>28º / 21º</Text>
            </View>

            <View style={styles.dia}>
              <Text style={styles.nomeDia}>Domingo</Text>
              <Image source={require('./assets/sol.png')} style={[styles.iconeVertical, { marginLeft: 122 }]} />
              <Text style={[styles.nomeDia, { marginLeft: 70 }]}>30º / 25º</Text>
            </View>
          </View>


          <View style={styles.informacoes}>
            <View style={styles.infoClima}>
              <Text style={styles.textInfo}>Vento</Text>
              <Text style={styles.numeroInfo}>8 km/h</Text>
              <Text style={styles.textInfo}>Leve • Do leste</Text>
            </View>

            <View style={styles.infoClima}>
            <Text style={styles.textInfo}>Umidade</Text>
              <Text style={styles.numeroInfo}>19%</Text>
              <Text style={styles.textInfo}>Ponto de condensação 3%</Text>
            </View>
          </View>

        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </ImageBackground>
  );
}

