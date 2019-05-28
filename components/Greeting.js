import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

const greeting = props => {
    return (
    <View style={styles.greetings}>
        <Text style={styles.welcome}>Welcome {props.name}</Text>
        <Text style={styles.subWelcome}>See your investment progress today </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    greetings:{
        height:83,
    },
    welcome: {
        fontSize: 24,
        marginBottom:16,
        color: '#ffffff',
      },
      subWelcome: {
        marginBottom:16,
        fontWeight:'bold',
        color: '#ffffff',
        fontSize: 16,
      },  
});

export default greeting;