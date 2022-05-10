import * as react from 'react'
import { StyleSheet, Text, View, useWindowDimensions, } from 'react-native'
import SwitchComponent from './SwitchComponent';

const SensorWrapper = () => {

  const width = useWindowDimensions().width;

  return(
    <View style={styles.container}>
      <Text style={[styles.text,{fontSize: 0.045*width}]}>Switch Board</Text>
        <View style={styles.switchWrapper} >
          <SwitchComponent></SwitchComponent>
          <SwitchComponent></SwitchComponent>
          <SwitchComponent></SwitchComponent>
          <SwitchComponent></SwitchComponent>
          <SwitchComponent></SwitchComponent>
          <SwitchComponent></SwitchComponent>
        </View>
    </View>
  )}

export default SensorWrapper;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 4,
    paddingTop: 12,
    alignItems: 'flex-start',
  },
  text: {    
    fontWeight: '900',
    color: '#fff',
    marginBottom: 25,
  },
  switchWrapper:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});

