import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import PostScreen from '../screens/PostScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({focused, children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45',
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 75,
                    ...styles.shadow
                }
            }}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Image 
                                source={require('../assets/icons/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    bottom: 10,
                                    tintColor: focused ? '#e32f45' : '#000'
                                }}
                            />
                            <Text
                            style={{color: focused ? '#e32f45' : '#000', fontSize: 12}}>HOME</Text>
                        </View>
                    ),
                }} 
          />
          <Tab.Screen name="Find" component={FindScreen} options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Image 
                                source={require('../assets/icons/search.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    bottom: 10,
                                    tintColor: focused ? '#e32f45' : '#000'
                                }}
                            />
                            <Text
                            style={{color: focused ? '#e32f45' : '#000', fontSize: 12}}>FIND</Text>
                        </View>
                    ),
                }} 
          />
          <Tab.Screen name="Post" component={PostScreen} options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Image 
                                source={require('../assets/icons/plus.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    bottom: 10,
                                    tintColor: focused ? '#fff' : '#fff'
                                }}
                            />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
          />
          <Tab.Screen name="Chat" component={ChatScreen} options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Image 
                                source={require('../assets/icons/chat.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    bottom: 10,
                                    tintColor: focused ? '#e32f45' : '#000'
                                }}
                            />
                            <Text
                            style={{color: focused ? '#e32f45' : '#000', fontSize: 12}}>CHAT</Text>
                        </View>
                    ),
                }}
          />
          <Tab.Screen name="Settings" component={SettingsScreen} options={{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                            <Image 
                                source={require('../assets/icons/settings.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    bottom: 10,
                                    tintColor: focused ? '#e32f45' : '#000'
                                }}
                            />
                            <Text
                            style={{color: focused ? '#e32f45' : '#000', fontSize: 12}}>SETTING</Text>
                        </View>
                    ),
                }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    shadow: {
        // shadowColor: '#7F5DF0',
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.5,
        // elevation: 5,
    }
});

export default Tabs;