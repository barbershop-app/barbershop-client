import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

const WelcomeWord = props => {
  const [welcomeWord, setWelcomeWord] = useState('Welcome');
  var hours = new Date().getHours() + 3; //To get the Current Hours (new date get utc date thats mean less 3 hours of israel time!)
  useEffect(() => {
    // * Good Morning (4->10) - Good Afternoon (11->16) - Good Evening (17->20) - Good Night  (21->3)
    if (hours >= 4 && hours <= 10) setWelcomeWord('Good Morning');
    else if (hours >= 11 && hours <= 16) setWelcomeWord('Good AfterNoon');
    else if (hours >= 17 && hours <= 20) setWelcomeWord('Good Evening');
    else if (hours >= 21 || hours <= 3) setWelcomeWord('Good Night');
  });

  return (
    <View>
      <Text style={[{color: '#D5BE2A', marginTop: '6%'}, styles.textStyle]}>
        {welcomeWord}
      </Text>
      <Text style={[{color: 'black', marginTop: '-2%'}, styles.textStyle]}>
        {props.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
});

export default WelcomeWord;
