import React from 'react';
import { StyleSheet, View, Button, Linking } from 'react-native';
import {Amplify} from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);


export default function App() {

const handleEmailPress = () => {
    Linking.openURL("mailto:imendoza380@accitesz.com ");

    // para poder poner un mensaje pre definido se pone lo sig: ?subject=Pa ir a pistear&body= saca las chelas :3
}

  return (
    <View style={styles.ButtonEmail}>
      <Button title="Enviar un correo" onPress={handleEmailPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonEmail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    marginTop: 35
  },
});

