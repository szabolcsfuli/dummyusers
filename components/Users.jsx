import { useEffect } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  populateUsersThunk,
  populatePostsThunk,
  populateAlbumsThunk
} from '../thunks'
import { setUser } from '../store'
import style from '../style'
import { List } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler'

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
    <SafeAreaView style={[style.container]}>
      <ScrollView>
        {users.length > 0 ? (
          users.map(item => (
            <List.Item
              onPress={() => onPress(item)}
              key={item.id}
              title={item.name}
              description={item.email}
              left={props => (
                <Icon name='person-circle-outline' size={25}  />
              )}
              right={props => (
                <Icon name='chevron-forward-outline' size={25}  />
              )}
            />
          ))
        ) : (
          <Text>No users</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
