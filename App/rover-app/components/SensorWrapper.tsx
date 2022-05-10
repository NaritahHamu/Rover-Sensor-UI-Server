import * as react from 'react'
import { StyleSheet, Text, View, useWindowDimensions, } from 'react-native'
import SensorComponent from './SensorComponent';

const SensorWrapper = () => {

  const width = useWindowDimensions().width;

  return (
  <View style={styles.container}>
    <Text style={[styles.text,{fontSize: 0.045*width}]}>Engine Bay Sensor 2</Text>
    <SensorComponent></SensorComponent>
    <SensorComponent></SensorComponent>
    <SensorComponent></SensorComponent>
  </View>
)}

export default SensorWrapper;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 4,
    paddingTop: 12,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderBottomWidth: 4,
    borderBottomColor: '#21589E'
  },
  text: {    
    fontWeight: '900',
    color: '#fff',
    marginBottom: 25,
  },
});