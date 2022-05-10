import * as react from 'react'
import { StyleSheet, Text, View, useWindowDimensions,Pressable } from 'react-native'

const SwitchComponent = () => {

  const width = useWindowDimensions().width;

  return (
      <Pressable style={[styles.container,{width: 0.27*width,height: 0.27*width}]}>
        <Text style={[styles.text,{fontSize: 0.040*width}]}>Switch One</Text>
      </Pressable>
  )
}

export default SwitchComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#21589E',
    borderColor: '#0774FF',
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  text: {    
    fontWeight: '900',
    color: '#fff',
    textAlign: 'center'
  },
  

});