import { StyleSheet, View, Text, FlatList, Button, Image } from 'react-native'
import React from 'react'
import { ApplyButton } from './src/Button'

const Life_Skills = () => {
  return (
    <View style={style.container}>
              <Text style={style.header}>6 Months Courses</Text>
              <Image style={{width:200, height:80, alignItems: 'center'}} source={require('../../Mobile App/Empowering_app/assets/Life_Skils.jpg')}/>
              <Text style={style.subheading}>Life Skills</Text>
              <Text style={style.body}>Course Description:</Text>
              <Text style={style.body}>This practical course teaches the foundational skills every adult needs. You’ll learn how to open and manage a bank account, understand your basic labour rights, read everyday documents, and handle numbers used in budgeting or shopping. It also includes practical literacy for writing applications or reading instructions.</Text>
              <Text style={style.body}>How This Course Helps You:</Text>
              
              <FlatList data={[
                              {key:'Become more independent in everyday life'},
                              {key:'Understand your rights and responsibilities at work'},
                              {key:'Build confidence in speaking, reading, and budgeting'},
                              {key:'Prepare for further learning or employment opportunities'},
                          ]} renderItem={
                          ({item}) =><Text>{item.key}</Text>
                          }/>
              <Text style={style.subheading}>Fee R1500</Text>
              <ApplyButton/>
            </View>
  )
}

export default Life_Skills

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