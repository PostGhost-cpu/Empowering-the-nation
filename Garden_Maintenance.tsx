import { StyleSheet, View, Text, FlatList, Button, Image } from 'react-native'
import React from 'react'
import { ApplyButton } from './src/Button'

const Garden_Maintenance = () => {
  return (
    <View style={style.container}>
              <Text style={style.header}>6 Weeks Courses</Text>
              <Image style={{width:200, height:80, alignItems: 'center'}} source={require('../../Mobile App/Empowering_app/assets/Garden_Maintenance.jpg')}/>
              <Text style={style.subheading}>Garden Maintenance</Text>
              <Text style={style.body}>Course Description:</Text>
              <Text style={style.body}>This course covers the basics of keeping a garden healthy and beautiful. Learn about watering schedules (especially during restrictions), pruning, planting techniques, and propagating new plants. You’ll also learn the care requirements for different plant types.</Text>
              <Text style={style.body}>How This Course Helps You:</Text>
              
              <FlatList data={[
                              {key:'Master essential gardening skills for home or work'},
                              {key:'Become more employable for outdoor/domestic roles'},
                              {key:'Support long-term garden health for clients or your own home'},
                              {key:'Offer a basic garden maintenance service for income'},
                          ]} renderItem={
                          ({item}) =><Text>{item.key}</Text>
                          }/>
              <Text style={style.subheading}>Fee R750</Text>
              <ApplyButton/>
            </View>
  )
}

export default Garden_Maintenance

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