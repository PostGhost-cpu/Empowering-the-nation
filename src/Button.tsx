import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
    button: {
        width: 200,
        alignSelf: "center",
    },
    apply: {
        color: '#fff',
        width: 200,
        alignSelf: "center",
    }
});

const NextButton = () => {
  return (
    <View style={styles.button}>
      <Button title="Next" color="#fff5d0"/>
    </View>
  )
}

export default NextButton

export const MonthsButton = ({ onPress }: { onPress: () => void }) => {
    return (
        <View style={styles.button}>
            <Button title="Months" color="#fff5d0" onPress={onPress}/>
        </View>
    )
};

export const WeeksButton = () => {
    return (
        <View style={styles.button}>
            <Button title="Weeks" color="#fff5d0"/>
        </View>
    )
}

export const ApplyButton = () => {
    return (
        <View>
            <Button title="Apply" color="#1b4757"/>
        </View>
    )
}