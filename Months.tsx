import { StyleSheet, View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { Months_courses, monthsCourses } from './src/List_data'
import { WeeksButton } from './src/Button'

const ListItem = ({singleBlock}:{singleBlock:Months_courses}) => {
    return(
        <View style={style.items}>
            <Text>{singleBlock.title}</Text>
            <Text>{singleBlock.description}</Text>
        </View>
    )
}

const Months = () => {
  return (
    <View style={style.container}>
      <Text style={style.header}>6 Months Courses</Text>
      <Text style={style.body}>At Empowering the Nation, we offer a range of practical, hands-on training courses designed to equip individuals with the skills they need to find work, grow in their careers, or start their own small businesses. Whether you're looking to gain confidence in the kitchen, learn to care for children, sew garments, or maintain a garden — we have a course for you.</Text>
      <Text style={style.body}>All courses come with a Certificate of Completion and flexible payment options.</Text>
      <Text style={style.caption}>Here are short, clear descriptions for each course offered by Empowering the Nation:</Text>

        <FlatList data={monthsCourses} renderItem={
            ({item}) => <ListItem singleBlock={item}/>
        }/>
            <WeeksButton/>
    </View>
  )
}

export default Months

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
        textAlign: 'center',
    },
    caption: {
        fontSize: 10,
    },
    items: {
        fontFamily: 'Inter',
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#8ebd9d',
        borderWidth: 0.5,
        borderBottomColor: '#000000',
        borderEndEndRadius: 10,
        marginBottom: 10
    }
})