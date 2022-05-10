import * as react from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SensorWrapper = () => (
  <View style={styles.container}>
    <Text>Switch Board</Text>
  </View>
)

export default SensorWrapper;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 6,
    backgroundColor: '#c295d7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});