import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';

export default class LogInScreen extends React.Component {
  isUser = (googleUser,firebaseUser) => {
    if(firebaseUser){
      var providerData = firebaseUser.providerData;

      for(var i = 0; i<providerData.length; i++){
        if(
          providerData[i].providerId === firebase.auth.GoogleAuthProvider.providerId && 
          providerData[i].uid === googleUser.getBasicProfile.getId ){
            return(true)
        }
      }
    }
  }
  render(){
    return(
      <View>
          <Text>LogInScreen</Text>
      </View>
    )
  }
}
