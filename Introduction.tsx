import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import { monthsArray, Six_months, Six_weeks, weeksArray } from './src/List_data'
import { MonthsButton, WeeksButton } from './src/Button'
import { useNavigation } from '@react-navigation/core'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define your RootStackParamList type here or import it from your navigation types file
type RootStackParamList = {
  Months: undefined;
  Weeks: undefined;
  // Add other screens and their params here
};

const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

const MonthsItem = ({singleBlock}:{singleBlock:Six_months}) => {
    return (
        <View style={{marginBottom:5}}>
            <Text>{singleBlock.title}</Text>
            <Text>{singleBlock.description}</Text>
        </View>
    )
}

const WeeksItem = ({singleBlock}:{singleBlock:Six_weeks}) => {
    return (
        <View style={{marginBottom:5}}>
            <Text>{singleBlock.title}</Text>
            <Text>{singleBlock.description}</Text>
        </View>
    )
}

const IntroductionScreen = () => {
  // Remove the duplicate navigation declaration
  // Use the navigation instance declared above
  return (
    <View style={style.container}>
      <Text style={style.header}>Empowering the Nation</Text>
      <Text style={style.body}>At Empowering the Nation, we offer a range of practical, hands-on training courses designed to equip individuals with the skills they need to find work, grow in their careers, or start their own small businesses. Whether you're looking to gain confidence in the kitchen, learn to care for children, sew garments, or maintain a garden — we have a course for you. Explore a range of courses carefully designed to help you gain practical skills, whether through an in-depth 6-month program or a fast-tracked 6-week boost.</Text>
      <Text style={style.caption}>Our app offers two flexible course durations, designed to suit different learning goals and schedules:</Text>
      
      <Text style={style.subheading}>Six Months</Text>
      <FlatList data={monthsArray} renderItem={
        ({item})=><MonthsItem singleBlock={item}/>}/>
        <Text>Benefits:</Text>
            <FlatList data={[
                {key:'Gradual learning pace for better retention.'},
                {key:'Extended support from instructors.'},
                {key:'More opportunities for hands-on practice.'},
            ]} renderItem={
            ({item}) =><Text>{item.key}</Text>
            }/>

      <Text style={style.subheading}>Six Months</Text>
      <FlatList data={weeksArray} renderItem={
        ({item})=><WeeksItem singleBlock={item}/>}/>
        <Text>Benefits:</Text>
            <FlatList data={[
                {key:'Quickly acquire targeted skills for immediate use.'},
                {key:'Flexible schedule for those balancing other commitments.'},
                {key:'Perfect for skill upgrades or preparing for a specific project.'},
            ]} renderItem={
            ({item}) =><Text>{item.key}</Text>
            }/>

        <Text style={style.body}>Both options provide access to high-quality course materials, progress tracking via the in-app dashboard, and certification upon completion. The choice simply depends on how fast you wish to learn and the depth of mastery you’re aiming for.</Text>
        <Image style={{width:100, height:100, alignItems: 'center'}} source={require('../../Mobile App/Empowering_app/assets/Logo.png')}/>
        <MonthsButton
        onPress={() => {navigation.navigate("Months")}}
        /> 
        
        <WeeksButton
        
        />

    </View>
  )
}

export default IntroductionScreen

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    },
    subheading: {
        color: '#1b475d',
        fontFamily: 'Montserrat',
        fontSize: 30,
    },
    caption: {
        fontSize: 10,
    }
})

