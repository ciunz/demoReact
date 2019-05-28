import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native';

const share = prop =>{
    return (
    <View style={styles.cardView}>
        <Text style={styles.title}>Invite friends to invest</Text>
        <Text>Get Extra Deposit Rp. 10.000 on your portfolio every 4 friends</Text>
        <Button title="SHARE NOW"/>
    </View>

    );
};

export default share;
const styles = StyleSheet.create({
    cardView:{
        margin:16,
        alignSelf: 'stretch',
        backgroundColor:'#f4f4f4',
        padding:16,
        borderRadius:8,
        elevation:1,
        shadowColor:'#dedede',
        borderColor: '#dedede',
      },
    title:{
        fontSize: 16,
        fontWeight:'bold',
    },
});
