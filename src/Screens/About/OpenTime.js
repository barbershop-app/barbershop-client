import {View, Text} from 'react-native';
import React from 'react';

export default function OpenTime() {
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
          borderWidth: 1,
          borderRadius: 15,
          padding: 10,
        }}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
          Tue {'\t'}9:00 AM - 6:00 PM {'\n'}
          Wed {'\t'}9:00 AM - 6:00 PM {'\n'}
          Thu {'\t'}9:00 AM - 6:00 PM {'\n'}
          Fri {'\t \t \t'}9:00 AM - 6:00 PM {'\n'}
          Sat {'\t \t'}8:30 AM - 4:00 PM {'\n'}
          Sat {'\t \t'}8:30 AM - 4:00 PM {'\n'}
        </Text>
      </View>
    </View>
  );
}
