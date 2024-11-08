import React from 'react';
import { View, Text, Button, Alert, Image, TouchableHighlight, Pressable, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.topImage}
        source={require('./assets/logo_municipalidad.png')}
      />
      <Text style={styles.text}>¡Bienvenido al ejercicio de botones interactivos!</Text>

      <Button
        title="Mostrar Alerta"
        onPress={() => Alert.alert('Alerta', 'Has presionado el botón estándar')}
      />

      <TouchableHighlight
        style={styles.highlightButton}
        onPress={() => Alert.alert('Alerta', 'Has presionado el botón personalizado con TouchableHighlight')}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.buttonText}>Botón TouchableHighlight</Text>
      </TouchableHighlight>

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ddd' : '#2196F3',
          },
          styles.pressableButton,
        ]}
        onPress={() => Alert.alert('Alerta', 'Has presionado el botón con Pressable e icono')}
      >
        <Image
          source={require('./assets/google.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Botón con Icono</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  topImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlightButton: {
    backgroundColor: '#8e44ad',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  pressableButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
