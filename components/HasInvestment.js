import React from 'react'
import {StyleSheet, Text, View, Button} from 'react-native';

const hasInvestment = props => {
    return (
        <View style={styles.container}>

            <Text style={styles.welcomeCard}>Your Amount Investment</Text>
        	<Text style={styles.welcomeCard}>{convertToRupiah(props.total)}</Text>
            <Text style={styles.center}>Total Investment Balance</Text>
            <Text style={styles.balance}>{convertToRupiah(props.existing_investment)}</Text>
            <Text style={styles.center}>Calculated from Nav on {props.date}</Text>
            <View style={styles.bottom}>
                <Text>In Deposit</Text>
                <Text style={styles.bold}>+ {convertToRupiah(props.deposit)}</Text>
            </View>
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


export default hasInvestment;

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
    bold:{
        fontWeight:'bold',
    },
    balance:{
        fontSize: 20,
        fontWeight:'bold',
        textAlign: 'center',
        color:'green',
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
    bottom:{
        marginTop:20,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
  });
  