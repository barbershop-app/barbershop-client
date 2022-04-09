import {Dimensions} from 'react-native';
let Logo = require('../Assets/Images/Logo.png');
let BarberMan = require('../Assets/Images/BarberMan.png');

let Gallery_1 = require('../Assets/Images/Gallery/1.jpg');
let Gallery_2 = require('../Assets/Images/Gallery/2.jpg');
let Gallery_3 = require('../Assets/Images/Gallery/3.jpg');
let Gallery_4 = require('../Assets/Images/Gallery/4.jpg');
let Gallery_5 = require('../Assets/Images/Gallery/5.jpg');
let Gallery_6 = require('../Assets/Images/Gallery/6.jpg');

export const Images = {
  Logo,
  BarberMan,
};
export const GalleryImages = [
  Gallery_1,
  Gallery_2,
  Gallery_3,
  Gallery_4,
  Gallery_5,
  Gallery_6,
];

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
