import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Images, windowHeight, windowWidth} from '../Utils/Themes';
import {
  ABOUT,
  ADMIN,
  ADMINAPPOINTMENT,
  AUTH,
  BOOK_APPOINTMENT,
  HOME,
  MY_APPOINTMENTS,
  SETTINGS,
  SHOP,
  SPLASH,
} from '../Utils/RouteNames';
import {useDispatch, useSelector} from 'react-redux';
import {setLoginIn} from '../Redux/Slices/appSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {resetData} from '../Redux/Slices/dialSlice';
import {Text} from 'react-native-animatable';

export function Humburger(props) {
  const SelectedGradientColor = useSelector(state => state.app.colorNumber);
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const DrawerItemWithNavigationTop = ({onPress, icon, navigate, label}) => (
    <DrawerItem
      labelStyle={{fontWeight: 'bold', color: 'white'}}
      icon={({color, size}) => <Icon name={icon} color={'white'} size={size} />}
      label={label}
      onPress={() => {
        navigate === null ? null : props.navigation.navigate(navigate);
        onPress !== undefined
          ? onPress()
          : console.log('nothing in OnPress Function');
      }}
    />
  );

  return (
    <LinearGradient style={{flex: 1}} colors={SelectedGradientColor}>
      <DrawerContentScrollView {...props}>
        <Image
          style={{
            height: windowHeight * 0.15,
            width: windowWidth * 0.32,
            marginTop: 50,
            alignSelf: 'center',
          }}
          source={Images.BarberFrame}
        />
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
          }}>
          Barber Shop
        </Text>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            marginTop: 10,
            borderColor: 'white',
          }}
        />

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
        {user.isAdmin && (
          <DrawerItemWithNavigationTop
            label="Admin"
            navigate={ADMIN}
            icon={'account-settings'}
          />
        )}
        {user.isAdmin && (
          <DrawerItemWithNavigationTop
            label="Edit Appointments"
            navigate={ADMINAPPOINTMENT}
            icon={'account-settings'}
          />
        )}
  
          <DrawerItemWithNavigationTop
            label="Theme"
            navigate={null}
            icon={'wall'}
            onPress={() => {
              dispatch(setLoginIn({isLoggedIn: false}));
              AsyncStorage.removeItem('selectedGradientColor');
            }}
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
    borderColor: 'white',
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
