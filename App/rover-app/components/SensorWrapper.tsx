import * as react from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SensorWrapper = () => (
  <View style={styles.container}>
    <Text>Engine Bay Sensor 2</Text>
  </View>
)

export default SensorWrapper;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 4,
    backgroundColor: '#66ccff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderBottomWidth: 4
  },
});