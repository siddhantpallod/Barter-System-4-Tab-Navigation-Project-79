import React from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class ExchangeScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            email : firebase.auth().currentUser,
            itemName : '',
            description : ''
        }
    }

    addItem = () => {
        var email = this.state.email
        db.collection('exchangeRequests').add({
            'email' : email,
             'itemName' : itemName,
            'description' : description
        })
        this.setState({
            itemName : '',
            description : ''
        })

        return Alert.alert(
            'Item ready to exchange',
            ''
            [
                {text: 'OK', onPress: ()=> {
                    this.props.naviagtion.navigate('HomeScreen')
                }}
            ]
        )
    }

    render(){
        return(
            <View>
                <View>
                    <TextInput
                    placeholder = 'Item Name'
                    />
                    <TextInput
                    placeholder = 'Description'
                    />  
                </View>
                <View>
                    <TouchableOpacity 
                    onPress = {()=> {
                        this.addItem()
                    }}
                    >
                        <Text> Add Item </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}