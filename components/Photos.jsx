import { Text, Image, SafeAreaView, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import style from '../style'
import { List } from 'react-native-paper'

export default () => {
  const { photos } = useSelector(state => state.dummyDB)

  return (
    <SafeAreaView style={[style.container]}>
      <ScrollView>
        {photos.length > 0 ? (
          photos.map(item => (
            <List.Item
              key={item.id}
              left={props => (
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{ uri: item.thumbnailUrl }}
                />
              )}
              title={item.title}
            />
          ))
        ) : (
          <Text>No photo</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
