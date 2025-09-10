import { StyleSheet, View, Text, FlatList, Button, Image  } from 'react-native'
import React from 'react'
import { ApplyButton } from './src/Button'

const Landscaping = () => {
  return (
    <View style={style.container}>
              <Text style={style.header}>6 Months Courses</Text>
              <Image style={{width:200, height:80, alignItems: 'center'}} source={require('../../Mobile App/Empowering_app/assets/Landscaping.jpg')}/>
              <Text style={style.subheading}>Landscaping</Text>
              <Text style={style.body}>Course Description:</Text>
              <Text style={style.body}>Gain the skills to create and maintain beautiful gardens and outdoor spaces. This course includes planting and balancing indigenous and exotic plants, arranging garden layout, and designing spaces with built-in features like benches, fountains, and braais. You’ll also learn plant aesthetics and seasonal garden planning.</Text>
              <Text style={style.body}>How This Course Helps You:</Text>
              
              <FlatList data={[
                              {key:'Gain specialised knowledge beyond basic garden care'},
                              {key:'Learn design skills to offer premium landscaping services'},
                              {key:'Enhance your profile for gardening or outdoor maintenance roles'},
                              {key:'Turn gardening into a creative, income-generating career'},
                          ]} renderItem={
                          ({item}) =><Text>{item.key}</Text>
                          }/>
              <Text style={style.subheading}>Fee R1500</Text>
              <ApplyButton/>
            </View>
  )
}

export default Landscaping

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