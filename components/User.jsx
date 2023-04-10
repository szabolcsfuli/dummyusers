import { SafeAreaView, View } from 'react-native'
import { useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text } from 'react-native-paper'
import style from '../style'

export default () => {
  const { user } = useSelector(state => state.dummyDB)
  return (
    <SafeAreaView style={[style.container]}>
      {user.id ? (
        <>
          <View style={{ flexDirection: 'row' }}>
            <Icon
              name='person-circle-outline'
              size={40}
              style={{ marginRight: 10 }}
            />
            <Text variant='headlineLarge'>{user.name}</Text>
          </View>
          <View>
            <Text>{user.username}</Text>
            <Text>{user.email}</Text>
            <Text>
              {user.address.street} {user.address.city} {user.address.zipcode}
            </Text>
            <Text>{user.phone}</Text>
            <Text>{user.website}</Text>
          </View>
        </>
      ) : (
        <Text>No user selected</Text>
      )}
    </SafeAreaView>
  )
}
