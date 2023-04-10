import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import Users from './Users'
import User from './User'
import Posts from './Posts'
import Albums from './Albums'
import Photos from './Photos'

const RootStack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='MainTabs' component={MainTabs} />
        <RootStack.Screen name='User' component={UserTabs} />
        <RootStack.Screen name='Posts' component={Posts} />
        <RootStack.Screen name='Photos' component={Photos} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const UserTab = createBottomTabNavigator()
const UserTabs = () => {
  return (
    <UserTab.Navigator    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused ? 'ios-list' : 'ios-list-outline'
          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#44aa00',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <UserTab.Screen
        name='UserDetails'
        options={{
          title: 'User Details'
        }}
        component={User}
      />
      <UserTab.Screen
        name='Posts'
        options={{
          title: 'Posts'
        }}
        component={Posts}
      />
      <UserTab.Screen
        name='Albums'
        options={{
          title: 'Photo Albums'
        }}
        component={Albums}
      />
    </UserTab.Navigator>
  )
}

const MainTab = createBottomTabNavigator()

const MainTabs = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Users') {
            iconName = focused ? 'ios-list' : 'ios-list-outline'
          }
          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#44aa00',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <MainTab.Screen
        name='Users'
        options={{
          title: 'Users'
        }}
        component={Users}
      />
    </MainTab.Navigator>
  )
}

export default Navigation
