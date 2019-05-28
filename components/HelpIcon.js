import React from 'react'
import {StyleSheet, Text, View} from 'react-native';

const share = prop =>{
    return (
    <View style={styles.cardView}>
        <Text>What is Ajaib?</Text>
        <Text>Find out how to invest with us</Text>
    </View>

    );
};

export default share;
const styles = StyleSheet.create({
    cardView:{
        marginLeft:16,
        marginRight:16,
        marginBottom:8,
        alignSelf: 'stretch',
        backgroundColor:'#dedede',
        padding:16,
        borderRadius:5,
        shadowColor:'#dedede',
        borderColor: '#dedede',
      },
      title:{
        fontSize: 16,
        fontWeight:'bold',
    },
});
