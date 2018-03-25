import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>

        <View style={styles.box1}>
          <Text style={styles.text} > pendidikan teknik informatika </Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text} > SLIDE </Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
        </View>
        <View style={styles.box4}>
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
          <View style={styles.icon} />
        </View>
        <View style={styles.box5}>
          <Text style={styles.text} > #JaenKuliahdiPTI </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#53b28f',
    flex: 1
  },
  box1: {
    backgroundColor: '#37e571',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    backgroundColor: '#0dc44a',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: '#0e8c4e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  box4: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#0e8c4e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    backgroundColor: '#37e571',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white'
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 5
  }
});
