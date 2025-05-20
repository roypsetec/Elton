import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View } from 'react-native';
import styles from './css';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>

      <ImageBackground source={require('./assets/fundo.jpg')}></ImageBackground>


      <View style={styles.navbar}>
      <Ionicons name="menu" size={32}color="white" />
      <Text style={styles.textNavBar}>Votuporanga</Text>
      <Ionicons name="location-sharp" size={20} color="white" />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}