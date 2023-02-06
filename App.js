import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const lighthouse = require('./assets/backGround.png');
const wheel = require('./assets/wheel.png');

export default function App() {
  return (
    <View style={styles.container}>
        <Image 
          source={lighthouse}
          style={styles.img} 
        />
        <View style={{alignItems:'center'}}>
          <Image 
            source={wheel}
            style={styles.img2} 
          />
        </View>
      <View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    position: 'relative'
  },
  img: {
    justifyContent: 'center',
    width: '100%',
    height: '35%'
  },
  img2: {
    width: 90,
    height: 90,
    position: 'absolute',
    top: -45
  },
});
