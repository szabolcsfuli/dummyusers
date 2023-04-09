import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { populatePhotosThunk } from '../thunks'

export default ({ navigation }) => {
  const { albums } = useSelector(state => state.dummyDB)
  const dispatch = useDispatch()
  const onPress = albumId => {
    dispatch(populatePhotosThunk(albumId))
    navigation.navigate('Photos')
  }

  return (
    <View>
      {albums.length > 0 ? (
        albums.map(item => (
          <Text
            key={item.id}
            onPress={() => {
              onPress(item.id)
            }}
          >
            {item.title}
          </Text>
        ))
      ) : (
        <Text>No Albums</Text>
      )}
    </View>
  )
}
