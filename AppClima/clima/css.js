import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    paddingLeft: 10,
    paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textNavBar: {
    color: 'white',
    paddingLeft: 20,
    fontSize: 18,
    paddingRight: 2,
  },
  fundo: {
    width: '100%',
    height: '100%',
  },
  hoje: {
    padding: 20,
    paddingTop: 40,
  },
  textAgora: {
    color: 'white',
    fontSize: 15,
  },
  clima: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sol: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  alerta: {
    width: 380,
    height: 70,
    backgroundColor: '#930000',
    borderRadius: 10,
    paddingLeft: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  conteudo: {
    padding: 15,
  },
  climaHorizontal: {
    width: '100%',
    height: 120,
    backgroundColor: '#00000046',
    borderRadius: 15,
    marginTop: 20,
  },
  umclima: {
    padding: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconeClima: {
    width: 50,
    height: 40,
    marginTop: 5,
    marginBottom: 5,
  },
  textClima: {
    color: 'white',
    fontSize: 16,

  }

});

export default styles;