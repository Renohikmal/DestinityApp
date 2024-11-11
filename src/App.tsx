/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from './HomeScreen';
import HistoryScreen from './HistoryScreen';
import ListScreen from './ListScreen';
import ProfileScreen from './ProfileScreen';
import MoreFeaturesScreen from './MoreFeaturesScreen';
import SocialNetworkScreen from './SocialNetworkScreen';
import CollaborationScreen from './CollaborationScreen';

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="MoreFeatures" component={MoreFeaturesScreen} options={{ title: 'More Features' }} />
      <ProfileStack.Screen name="SocialNetwork" component={SocialNetworkScreen} options={{ title: 'Social Network' }} />
      <ProfileStack.Screen name="Collaboration" component={CollaborationScreen} options={{ title: 'Collaboration' }} />
    </ProfileStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Lists') {
              iconName = 'list';
            } else if (route.name === 'History') {
              iconName = 'history';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else {
              iconName = 'home'; // Default icon jika route tidak cocok
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#364f6b',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Lists" component={ListScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
