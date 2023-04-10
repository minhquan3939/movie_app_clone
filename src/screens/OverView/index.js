import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
const overview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/Back.png')}
            activeOpacity={0.2}
            style={styles.ImageIconStyle}></Image>
        </TouchableOpacity>
        <View style={styles.txt_header}>
          <Text style={styles.txt_top}> Eurasia Cinema7 </Text>
          <Text style={styles.txt_bottom}>The Batman </Text>
        </View>

        <TouchableOpacity>
          <Image
            source={require('../../assets/Enlarge.png')}
            activeOpacity={0.2}
            style={styles.ImageIconStyle}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.Date_Time}>
        <View style={styles.Date}>
          <Text style={styles.txt_date}> April, 14 </Text>
        </View>
        <View style={styles.Time}>
          <Text style={styles.txt_date}> 15:10 </Text>
        </View>
      </View>

      <View>
        <Image
          source={require('../../assets/Screen.png')}
          activeOpacity={0.2}
          style={styles.ImageIconStyle}></Image>
      </View>
    </View>
  );
};

export default overview;
