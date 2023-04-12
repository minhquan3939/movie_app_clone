import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function CategoryFlatlist(props) {
  const { flatlist } = props;

  return (
    <View style={styles.item}>
      <Text style={styles.seat}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  seat: {
    borderWidth: 0,
    width: 17,
    height: 17,
    borderRadius: 12,
    marginRight: 5,
    backgroundColor: '#1F293D'
  }
});
