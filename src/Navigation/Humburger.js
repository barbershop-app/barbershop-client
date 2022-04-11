import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Images, windowHeight, windowWidth} from '../Utils/Themes';
import {
  ABOUT,
  AUTH,
  BOOK_APPOINTMENT,
  HOME,
  MY_APPOINTMENTS,
  SETTINGS,
  SHOP,
  SPLASH,
} from '../Utils/RouteNames';
import {useDispatch} from 'react-redux';
import {setLoginIn} from '../Redux/Slices/appSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {resetData} from '../Redux/Slices/dialSlice';

export function Humburger(props) {
  const dispatch = useDispatch();
  const DrawerItemWithNavigationTop = ({onPress, icon, navigate, label}) => (
    <DrawerItem
      labelStyle={{fontWeight: 'bold'}}
      icon={({color, size}) => <Icon name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        navigate === null ? null : props.navigation.navigate(navigate);
        onPress !== undefined ? onPress() : console.log('no OnPress');
      }}
    />
  );

  return (
    <LinearGradient
      style={{flex: 1}}
      colors={['gray', '#D5BE2A', '#D5BE2A', '#D5BE2A', 'white']}>
      <DrawerContentScrollView {...props}>
        <Image
          style={{
            height: windowHeight * 0.1,
            width: windowWidth * 0.3,
            marginTop: 50,
            alignSelf: 'center',
          }}
          source={Images.Logo}
        />
        <View style={{width: '100%', borderWidth: 1, marginTop: 10}}></View>

        <DrawerItemWithNavigationTop
          label="Home"
          navigate={HOME}
          icon={'home'}
        />
        <DrawerItemWithNavigationTop
          label="Book Appointment"
          navigate={BOOK_APPOINTMENT}
          icon={'calendar-cursor'}
        />
        <DrawerItemWithNavigationTop
          label="My Appointment"
          navigate={MY_APPOINTMENTS}
          icon={'calendar-check-outline'}
        />
        <DrawerItemWithNavigationTop
          label="Settings"
          navigate={SETTINGS}
          icon="account-settings"
        />
        <DrawerItemWithNavigationTop
          label="About"
          navigate={ABOUT}
          icon={'information'}
        />
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItemWithNavigationTop
          label="Sign Out"
          navigate={null}
          icon={'logout'}
          onPress={() => {
            dispatch(setLoginIn({isLoggedIn: false}));
            dispatch(resetData());

            AsyncStorage.removeItem('barbershop');
          }}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonStyle_Next: {
    padding: 5,
    width: '80%',
    // alignSelf: "flex-end",
    position: 'relative',
    right: -55,
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontFamily: 'monospace',
    marginTop: 25,
    fontWeight: 'bold',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  caption: {
    fontSize: 14,
    fontFamily: 'monospace',
    lineHeight: 14,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawersection: {
    borderTopWidth: 1,
  },
  iconSpace: {
    marginBottom: 10,
  },
  bottomDrawerSection: {
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  inputStyle: {
    width: '90%',
    height: 45,
    marginBottom: 0,

    backgroundColor: '#D5DDDC',
    alignSelf: 'center',
    borderRadius: 15,
    textAlign: 'center',
    borderColor: '#364057',
    borderWidth: 1,
  },
});
