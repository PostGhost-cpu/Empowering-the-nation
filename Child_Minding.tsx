import { StyleSheet, View, Text, FlatList, Button, Image  } from 'react-native'
import React from 'react'
import { ApplyButton } from './src/Button'

const Child_Minding = () => {
  return (
    <View style={style.container}>
          <Text style={style.header}>6 Weeks Courses</Text>
          <Image style={{width:200, height:80, alignItems: 'center'}} source={require('../../Mobile App/Empowering_app/assets/Child_Minding.jpg')}/>
          <Text style={style.subheading}>Child Minding</Text>
          <Text style={style.body}>Course Description:</Text>
          <Text style={style.body}>Learn how to safely and lovingly care for babies and toddlers. You’ll study the needs of children from birth to three years old, including feeding, hygiene, sleep schedules, play, and emotional support. You’ll also explore educational toys and basic child development.</Text>
          <Text style={style.body}>How This Course Helps You:</Text>
          
          <FlatList data={[
                          {key:'Become a more confident nanny or domestic helper'},
                          {key:'Understand child development and safety'},
                          {key:'Support working parents by providing trustworthy care'},
                          {key:'Build a foundation for childcare-related careers'},
                      ]} renderItem={
                      ({item}) =><Text>{item.key}</Text>
                      }/>
          <Text style={style.subheading}>Fee R750</Text>
          <ApplyButton/>
        </View>
  )
}

export default Child_Minding

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#b4bd62',
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