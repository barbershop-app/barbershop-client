import React from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ABOUT,
  BOOK_APPOINTMENT,
  CATALOG_PRODUCTS_LIST,
  GALLERY,
  HOME,
  MY_APPOINTMENTS,
  PRODUCT_PAGE,
  SETTINGS,
  SHOP,
  CART,
  CART_SELECT_PAYMENT,
} from '../Utils/RouteNames';
import Home from '../Screens/Home';
import About from '../Screens/About';
import BookAppointment from '../Screens/BookingMenu/BookAppointment';
import Gallery from '../Screens/Gallery';
import Settings from '../Screens/Settings';
import Shop from '../Screens/Shop';
import {Humburger} from './Humburger';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyAppointment from '../Screens/BookingMenu/MyAppointment';
import CatalogProductsList from '../Screens/CatalogProductsList';
import ProductPage from '../Screens/ProductPage';
import Cart from '../Screens/Cart';
import PaymentMethod from '../Components/PaymentMethod';
import PaymentMethodSelect from '../Screens/PaymentMethodSelect';

const Drawer = createDrawerNavigator();

export default function HomeNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <Humburger {...props} />}
      initialRouteName={HOME}>
      <Drawer.Screen name={HOME} component={Home} />
      <Drawer.Screen name={ABOUT} component={About} />
      <Drawer.Screen name={BOOK_APPOINTMENT} component={BookAppointment} />
      <Drawer.Screen name={MY_APPOINTMENTS} component={MyAppointment} />
      <Drawer.Screen name={CART} component={Cart} />
      <Drawer.Screen name={CART_SELECT_PAYMENT} component={PaymentMethodSelect} />
      <Drawer.Screen
        name={CATALOG_PRODUCTS_LIST}
        component={CatalogProductsList}
      />
      <Drawer.Screen name={PRODUCT_PAGE} component={ProductPage} />
      <Drawer.Screen name={GALLERY} component={Gallery} />
      <Drawer.Screen name={SETTINGS} component={Settings} />
      <Drawer.Screen name={SHOP} component={Shop} />
    </Drawer.Navigator>
  );
}
