import {View, Text ,Image, Button, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';

const Detail = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.header_detail}>
      <TouchableOpacity> 
        <Image 
        source={require('../../assets/Back.png')}
        activeOpacity={0.2} style={styles.ImageIconStyle}
        ></Image>
      
      </TouchableOpacity>
       
        <Text style = {styles.txt_detail}>The Batman</Text>
        <Text></Text>


      </View>
      <View style = {styles.tabs_detail}>


       <Text style = {styles.caption} >About</Text>
       <Text style = {styles.caption} >Sessions</Text>
      </View>
    <View style = {styles.video_detail}>
    <Image source={require('../../assets/Video.png')} style ={styles.video} ></Image>
    </View>

    <View style = {styles.rating_row}>
      <View style = {styles.Item}>
        <Text style = {styles.number}>8.3</Text>
        <Text style = {styles.txt_rating}>IMDB</Text>
      </View>
      <View style = {styles.Item}>
        <Text style = {styles.number}>7.9</Text>
        <Text style = {styles.txt_rating}>Kinopoisk</Text>
      </View>
    </View>

    <View style = {styles.Content}>
      <Text style = {styles.description} >
      When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.
      </Text>
    
      <View style ={styles.Params}>
      <View style = {styles.param_row}>
         <Text style={styles.txt_left}>Certificate</Text>
         <Text style={styles.txt_left}>Runtime</Text>
         <Text style={styles.txt_left}>Release</Text>
         <Text style={styles.txt_left}>Genre</Text>
         <Text style={styles.txt_left}>Director</Text>
         <Text style={styles.txt_left}>Cast</Text>
        
      </View>

      <View style = {styles.param_row2}> 
      <Text style = {styles.txt_right}>16+</Text>
      <Text style = {styles.txt_right}>02:56</Text>
      <Text style = {styles.txt_right}>2022</Text>
      <Text style = {styles.txt_right}>Action, Crime, Drama</Text>
      <Text style = {styles.txt_right}>Matt Reeves</Text>
      <Text style = {styles.txt_right}>Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell, Paul Dano, John Turturro, 	Andy Serkis, Peter Sarsgaard</Text>
      </View>
        
      </View>

    </View>

    <View style={styles.footer}>
      <Button
      title='Select session' style ={styles.Button_footer}
      ></Button>
    </View>

    </View>
  );
};

export default Detail;
