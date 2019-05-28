import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native';

const noInvestment = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeCard}>Your Amount Investment</Text>
        	<Text style={styles.welcomeCard}>{convertToRupiah(props.total)}</Text>
            <Text style={styles.center}>In Deposit</Text>
            <Text style={styles.center}>Calculated from Nav on {props.date}</Text>
            <Button title="See deposit status"/>
        </View>
    );
}

function convertToRupiah(angka){
    if(angka == undefined || angka == '') return 'Rp. 0';
	var rupiah = '';		
	var angkarev = angka.toString().split('').reverse().join('');
	for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
	return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
}


export default noInvestment;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    welcomeCard: {
        fontSize: 20,
        fontWeight:'bold',
      textAlign: 'center',
    },
    center:{
        textAlign: 'center',
    },
      cardView:{
      // width:328,
      height:179,
      alignSelf: 'stretch',
      backgroundColor:'#FFFF',
      padding:16,
      borderRadius:16,
      borderColor: '#fff'
    },
  });
  