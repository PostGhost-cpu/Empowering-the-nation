import { StyleSheet, View, Text, FlatList, Button, Image  } from 'react-native'
import React from 'react'
import { ApplyButton } from './src/Button'

const Cooking = () => {
  return (
    <View style={style.container}>
              <Text style={style.header}>6 Weeks Courses</Text>
              <Image style={{width:200, height:80, alignItems: 'center'}} source={require('../../Mobile App/Empowering_app/assets/Cooking.jpg')}/>
              <Text style={style.subheading}>Cooking</Text>
              <Text style={style.body}>Course Description:</Text>
              <Text style={style.body}>This course focuses on healthy, budget-friendly family meals. You’ll learn about nutritional needs, different food groups, and how to cook with protein, vegetables, and carbs. You’ll also plan meals and follow simple recipes that are both tasty and affordable.</Text>
              <Text style={style.body}>How This Course Helps You:</Text>
              
              <FlatList data={[
                              {key:'Improve the meals you cook at home or for clients'},
                              {key:'Learn time-saving, affordable cooking methods'},
                              {key:'Impress employers with your kitchen skills'},
                              {key:'Support healthy lifestyles through good food'},
                          ]} renderItem={
                          ({item}) =><Text>{item.key}</Text>
                          }/>
              <Text style={style.subheading}>Fee R750</Text>
              <ApplyButton/>
            </View>
  )
}

export default Cooking

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