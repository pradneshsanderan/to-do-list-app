import React, {useState} from 'react';
import { StyleSheet, Text,TextInput,View, Button} from 'react-native';


export default function AddTodo({submitHandler}) {
    const [text, SetText] = useState('');
    const changeHandler = (val) => {
        SetText(val);
    }
    return (
        <View>
            <TextInput
            style={StyleSheet.input}
            placeholder='new to do ....'
            onChangeText={(val) => changeHandler(val)} 
            />
            <Button onPress={() => submitHandler(text)}  title='add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input :{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})

