import * as react from 'react'
import { StyleSheet, Text, View, useWindowDimensions, } from 'react-native'

const SensorComponent = () => {

  const width = useWindowDimensions().width;

  return (
    <View style={styles.container}>
      <Text style={[styles.text,{fontSize: 0.045*width, flex: 4}]}>Oil Pressure</Text>
      <Text style={[styles.text,{fontSize: 0.055*width, flex: 2, textAlign: 'right'}]}>999</Text>
      <Text style={[styles.text,{fontSize: 0.035*width, flex: 1, textAlign: 'right'}]}>PSI</Text>
    </View>
  )
}

export default SensorComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    backgroundColor: '#21589E',
    borderColor: '#0774FF',
    borderWidth: 4,
    marginBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {    
    fontWeight: '900',
    color: '#fff',
  },

});