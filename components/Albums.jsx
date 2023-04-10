import { ScrollView, Text, SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { populatePhotosThunk } from '../thunks'
import Icon from 'react-native-vector-icons/Ionicons'
import { List } from 'react-native-paper'
import style from '../style'

export default ({ navigation }) => {
  const { albums } = useSelector(state => state.dummyDB)
  const dispatch = useDispatch()
  const onPress = albumId => {
    dispatch(populatePhotosThunk(albumId))
    navigation.navigate('Photos')
  }

  return (
    <SafeAreaView style={[style.container]}>
      <ScrollView>
        {albums.length > 0 ? (
          albums.map(item => (
            <List.Item
              key={item.id}
              onPress={() => onPress(item.id)}
              title={item.title}
              left={props => <Icon name='images-outline' size={25} />}
            />
          ))
        ) : (
          <Text>No Albums</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
