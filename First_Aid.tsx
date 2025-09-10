import { StyleSheet, View, Text, FlatList, Button, Image } from 'react-native'
import React from 'react'
import { ApplyButton } from './src/Button'

const First_Aid = () => {
  return (
    <View style={style.container}>
      <Text style={style.header}>6 Months Courses</Text>
      <Image style={{width:200, height:80, alignItems: 'center'}} source={require('../../Mobile App/Empowering_app/assets/First_aiding.jpg')}/>
      <Text style={style.subheading}>First Aid</Text>
      <Text style={style.body}>Course Description:</Text>
      <Text style={style.body}>This course provides essential life-saving skills that can be used at home or in the workplace. You will learn how to confidently respond to accidents and emergencies, including how to assess an emergency scene, treat burns, fractures, wounds, and bleeding, and perform CPR. You’ll also learn how to assist people experiencing respiratory distress or choking.</Text>
      <Text style={style.body}>How This Course Helps You:</Text>
      
      <FlatList data={[
                      {key:'Equips you with skills to react quickly and calmly in emergencies'},
                      {key:'Increases your value as a domestic worker, nanny, or caregiver'},
                      {key:'Builds trust with employers or clients by showing health and safety awareness'},
                      {key:'Boosts your confidence in looking after children, elders, or sick individuals'},
                  ]} renderItem={
                  ({item}) =><Text>{item.key}</Text>
                  }/>
      <Text style={style.subheading}>Fee R1500</Text>
      <ApplyButton/>
    </View>
  )
}

export default First_Aid

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#8ebd9d',
        marginTop: 10,
        marginLeft: 5,
    },
    body: {
        fontFamily: 'Inter',
        fontSize: 15,
    },
    header: {
        color: '#1b475d',
        fontFamily: 'Montserrat',
        fontSize: 40,
        textAlign: 'center',
    },
    subheading: {
        color: '#1b475d',
        fontFamily: 'Montserrat',
        fontSize: 30,
        textAlign: 'center',
    }
})