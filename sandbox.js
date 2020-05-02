import React from 'react';
import { StyleSheet, Text,View } from 'react-native';

export default function Sandbox () {
    return(
        <View style={styles.container}>
            <Text style={styles.one}>one</Text>
            <Text style={styles.two}>two</Text>
            <Text style={styles.three}>three</Text>
            <Text style={styles.four}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'stretch',
        paddingTop:40,
        backgroundColor:'#ddd',
    },
    one :{
        backgroundColor:'violet',
        padding:10,
    },
    two :{
        backgroundColor:'gold',
        padding:20,
    },
    three :{
        backgroundColor:'coral',
        padding:30,
    },
    four :{
        backgroundColor:'skyblue',
        padding:10,
    }
});