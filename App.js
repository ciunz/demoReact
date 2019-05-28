

import React, {Component} from 'react';
import {Platform, StyleSheet, View,Text, ScrollView} from 'react-native';

import Greeting from "./components/Greeting"
import NoInvestment from "./components/NoInvestment"
import HasInvestment from "./components/HasInvestment"
import ShareMe from "./components/Share"
import HelpIcon from "./components/HelpIcon"

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  name = "Yada";
  existing_investment = 500000;
  total = 2500000;
  deposit = 1000000;

  render() {
    return (
      <View>
      <ScrollView>
        <View style={styles.container}>
          <Greeting name={this.name}/>
          <View style={styles.cardView}>
            {
              this.existing_investment > 0 ?          
              <HasInvestment 
                existing_investment = {this.existing_investment}
                total={this.total} 
                deposit={this.deposit}
                date="Jan 9, 2019"/> :
              <NoInvestment 
                total={this.total} 
                date="Jan 9, 2019"/> 
            }
          </View>
        </View>
        <ShareMe/>
        <Text style={styles.welcomeCard}>Need Help?</Text>
        <HelpIcon/>
        <HelpIcon/>
        <HelpIcon/>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomNavBar:{

  },
  
  container: {
  	padding:16,
  	paddingTop : 40,
    borderBottomLeftRadius:16,
    borderBottomRightRadius:16,
    backgroundColor:'#579ff4',
  },
  welcomeCard: {
  	fontSize: 20,
    fontWeight:'bold',
    textAlign: 'left',
    margin:16,
  },
    cardView:{
    // width:328,
    minHeight:179,
    alignSelf: 'stretch',
    backgroundColor:'#FFFF',
    padding:16,
    borderRadius:16,
    borderColor: '#fff'
  },
});
