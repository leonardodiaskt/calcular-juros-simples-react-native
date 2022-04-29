import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';

export default function App() {

  const [capital, setCapital] = useState();
  const [juros, setJuros] = useState();
  const [tempo, setTempo] = useState();
  

  function calcularJuros(){
    const new_juros =  juros / 100;
    const resultado = capital* new_juros * tempo
    console.log(resultado)
    setJuros(resultado)
    setTempo('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Calcular Juros Simples</Text>
      <TextInput placeholder="Insira o capital"
                 style={styles.textArea} 
                 keyboardType={"numeric"}
                 onChangeText={capital => setCapital(capital)}>

      </TextInput>

      <TextInput placeholder="Insira o tempo" 
                 style={styles.textArea} 
                 keyboardType={"numeric"}
                 onChangeText={tempo => setTempo(tempo)}>

      </TextInput>

      <TextInput placeholder="Insira a taxa" 
                 style={styles.textArea} 
                 keyboardType={"numeric"}
                 onChangeText={taxa => setJuros(taxa)}>

      </TextInput>

      <Button title="Calcular"
              onPress={calcularJuros}>

      </Button>

      <Text style={{fontSize: 16}}>{juros ? `Resultado ${juros}`: ''}</Text>
      
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033c73',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    width: 250,
    height: 40,
    textAlign: "center",    
    backgroundColor: '#fff',
    marginBottom: 10,
    color: 'white'
  },
  texts: {
    fontSize: 30,
    fontFamily: 'arial',
    marginBottom: 10,
    color: 'white'
  },
});
