import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import NextButton from './src/Button';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IntroductionScreen from './Introduction'
import Months from './Months';
import Weeks from './Weeks';

const RootStack = createNativeStackNavigator();

export default function ApplicationScreen() {
  return (
   
      <View style={styles.container}>
        <Text style={styles.caption}>Log in to begin your application, explore available courses, and access the tools you need to take the next step in your education. Don’t have an account yet?</Text>
        <NextButton/>
        <StatusBar style="auto" />
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caption: {
        fontFamily: 'Inter',
        fontSize: 10,
    }
});
