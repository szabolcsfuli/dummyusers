import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default () => {
  const { user } = useSelector(state => state.dummyDB)

  return (
    <View>
      {user.id ? (
        <View>
          <Text>{user.name}</Text>
          <Text>{user.username}</Text>
          <Text>{user.email}</Text>
          <Text>
            {user.address.street} {user.address.city} {user.address.zipcode}
          </Text>
          <Text>{user.phone}</Text>
          <Text>{user.website}</Text>
        </View>
      ) : (
        <Text>No user selected</Text>
      )}
    </View>
  )
}
