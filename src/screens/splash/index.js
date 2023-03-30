import {Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

const splash = () => {
  return (

      <View style = {styles.constainer}>   
        <Image source={require('../../assets/splash_screen.jpg')} style = {styles.splash_screen}></Image>
      
        <Image source={require('../../assets/Logo.png')}></Image>
      
      
       </View>
    
    


     
  )
}

export default splash
