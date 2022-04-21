import {View, Text} from 'react-native';
import React from 'react';
import OpenTimeCard from './OpenTimeCard';

export default function OpenTime() {
  const times = [
    'Tue 9:00 AM',
    'Wed 9:00 AM',
    'Thu 9:00 AM',
    'Fri 9:00 AM',
    'Sat 8:30 AM',
  ];
  return (
    <View style={{width: '90%', alignSelf: 'center'}}>
      <Text
        style={{
          fontSize: 25,
          color: 'black',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Open Time
      </Text>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          borderRadius: 15,
          padding: 10,
        }}>
        {times.map((e, index) => (
          <OpenTimeCard key={index} text={e} />
        ))}
      </View>
    </View>
  );
}

// Tue {'\t'}9:00 AM - 6:00 PM {'\n'}
// Wed {'\t'}9:00 AM - 6:00 PM {'\n'}
// Thu {'\t'}9:00 AM - 6:00 PM {'\n'}
// Fri {'\t \t \t'}9:00 AM - 6:00 PM {'\n'}
// Sat {'\t \t'}8:30 AM - 4:00 PM {'\n'}
// Sat {'\t \t'}8:30 AM - 4:00 PM {'\n'}
