import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Nav';
import SensorWrapper from './components/SensorWrapper';
import SwitchWrapper from './components/SwitchWrapper';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigation></Navigation>
      <SensorWrapper></SensorWrapper>
      <SwitchWrapper></SwitchWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
});
