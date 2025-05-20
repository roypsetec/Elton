import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#906666',
        padding: 15,
    },
    barra: {
        width: '100%',
        height: 40,
        backgroundColor: 'red',
        marginVertical: 15,
    },
    titulo: {
        backgroundColor: 'green',
        height: 100,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    neymar: {
        height: 500,
    },
    melancia: {
        marginVertical: 10,
        borderWidth: 2,
        borderColor: 'blue',
    },
    quadro: {
        backgroundColor: 'yellow',
        width: 80,
        height: 80,
        margin: 5,
    },
});

export default styles;