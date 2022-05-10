import * as react from 'react'
import { Pressable, StyleSheet, Text, View, useWindowDimensions, Dimensions } from 'react-native'



const Navigation = () => {

  const width = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <Text style={[styles.text,{fontSize: 0.045*width}]}>Land Rover Discovery 4</Text>
      <Pressable style={styles.restartButton}>
        <Text style={styles.buttonText}>Restart Pi</Text>
      </Pressable>
    </View>
  )}

export default Navigation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1.5,
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    borderBottomWidth: 4,
    borderBottomColor: '#21589E'
  },
  text: {    
    flex: 1,
    fontWeight: '900',
    color: '#fff'
  },
  restartButton: {
    flex: 0.7,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F34444'
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '900',
    color: '#fff'
  },
});