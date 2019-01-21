import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, ImageBackground } from 'react-native';
import ListItem from './components/ListItem'
import homeImage from './assets/homeImage.jpg'
import Header from './components/Header'
import Landing from './components/Landing'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            users: []
        }
    }
    // DDDDDAAAAAANNNNNN
    inputHandler = (name) => (value) => {
        this.setState({
            [name]: value
        })
    }
    submitHandler = (event) => {
        if (this.state.username === '' || this.state.password === '') {
            return
        }
        this.setState({
            users: [...this.state.users, { username: this.state.username, password: this.state.password },],
        })
    }
    render() {
        const users = this.state.users.map((user, i) => (
            <ListItem key={i} i={i} users={user} />
        ))
        return (
            <View>
                <ImageBackground source={homeImage} style={styles.baseImage}>
                    <View style={styles.container}>
                        <Header />
                        <Landing />
                        <Text>{this.state.username}</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                onChangeText={this.inputHandler('username')}
                                style={styles.placeInput} value={this.state.username} placeholder='username' />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                onChangeText={this.inputHandler('password')}
                                style={styles.placeInput} value={this.state.password} placeholder='password' />
                        </View>
                        <Button onPress={this.submitHandler} style={styles.placeButton} title='Add' />
                        <ScrollView style={styles.scroller}>
                            <View style={styles.userList}>{users}</View>
                        </ScrollView>
                    </View>
                </ImageBackground>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    placeInput: {
        width: '70%',
        borderColor: 'black',
        borderWidth: 1,
    },
    placeButton: {
        width: '30%'
    },
    userList: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column-reverse'
    },
    scroller: {
        width: '80%',
    },
    baseImage: {
        height: '100%',
    }

});
