import * as React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeView from './views/HomeView';
import DetailView from './views/secondaryScreens/DetailView';
import SearchView from './views/SearchView';
import NotificationsView from './views/NotificationView';
import ProfileView from './views/ProfileView';
import SettingsView from './views/SettingsView';

const Tab = createBottomTabNavigator();
const FeedStack = createStackNavigator();

const FeedView = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={HomeView} />
      <FeedStack.Screen name="Details" component={DetailView} />
    </FeedStack.Navigator>
  );
};

const SearchStack = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Search" component={SearchView} />
      <FeedStack.Screen name="Details" component={DetailView} />
    </FeedStack.Navigator>
  );
};

const NotificationStack = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Notification" component={NotificationsView} />
      <FeedStack.Screen name="Details" component={DetailView} />
    </FeedStack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Profile" component={ProfileView} />
      <FeedStack.Screen name="Details" component={DetailView} />
    </FeedStack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Settings" component={SettingsView} />
      <FeedStack.Screen name="Details" component={DetailView} />
    </FeedStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={FeedView} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Notifications" component={NotificationStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
