import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { populateUsersThunk, populatePostsThunk, populateAlbumsThunk } from '../thunks'
import { setUser } from '../store'

export default ({ navigation }) => {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.dummyDB)

  useEffect(() => {
    dispatch(populateUsersThunk())
  }, [navigation])

  const onPress = item => {
    dispatch(setUser(item.id))
    dispatch(populatePostsThunk(item.id))
    dispatch(populateAlbumsThunk(item.id))
    navigation.navigate('User')
  }

  return (
    <View>
      {users.length > 0 ? (
        users.map(item => (
          <Text key={item.id} onPress={() => onPress(item)}>
            {item.name}
          </Text>
        ))
      ) : (
        <Text>No users</Text>
      )}
    </View>
  )
}
