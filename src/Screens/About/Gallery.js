import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {GalleryImages, Images} from '../../Utils/Themes';

const paths = [1, 2, 3, 4, 5, 6];

const Gallery = () => (
  <View
    style={{
      width: '90%',
      alignSelf: 'center',
      marginTop: 10,
    }}>
    <Text
      style={{
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
      }}>
      Gallery
    </Text>
    <ScrollView horizontal={true} style={{width: '90%', alignSelf: 'center'}}>
      {GalleryImages.map((e, index) => (
        <Image
          style={{height: 100, width: 60, borderRadius: 15, margin: 5}}
          key={'image_' + index}
          source={e}
        />
      ))}
    </ScrollView>
    <Image
      style={{
        height: 200,
        width: '90%',
        borderRadius: 15,
        margin: 5,
        alignSelf: 'center',
      }}
      source={GalleryImages[2]}
    />
    <Image
      style={{
        height: 100,
        width: '90%',
        borderRadius: 15,
        margin: 5,
        alignSelf: 'center',
      }}
      source={GalleryImages[5]}
    />
  </View>
);
export default Gallery;
