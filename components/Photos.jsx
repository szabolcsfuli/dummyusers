import { View, Text, Image } from 'react-native'
import { useSelector } from 'react-redux'

export default () => {
  const { photos } = useSelector(state => state.dummyDB)

  return (
    <View>
      {photos.length > 0 ? (
        photos.map(item => (
          <Text key={item.id}>
            <Image
              style={{
                width: 50,
                height: 50
              }}
              source={{ uri: item.thumbnailUrl }}
            />
            {item.title}
          </Text>
        ))
      ) : (
        <Text>No photo</Text>
      )}
    </View>
  )
}
