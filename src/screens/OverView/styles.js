import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F293D',
    alignItems: 'center'
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 32,
    marginTop: 10
  },
  txt_header: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt_top: {
    color: 'white',
    fontSize: 18
  },
  txt_bottom: {
    color: '#637394',
    fontSize: 14
  },

  Date_Time: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  Date: {
    borderWidth: 1,
    borderColor: '#637394',
    borderRadius: 8,
    width: 163,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  Time: {
    borderWidth: 1,
    borderColor: '#637394',
    borderRadius: 8,
    width: 163,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt_date: {
    color: 'white',
    fontSize: 16
  }
});

export default styles;
