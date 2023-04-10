import { ScrollView, Text, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import style from '../style'
import { List } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'

export default () => {
  const { posts } = useSelector(state => state.dummyDB)

  return (
    <SafeAreaView style={[style.container]}>
      <ScrollView>
        {posts.length > 0 ? (
          posts.map(item => (
            <List.Item
              key={item.id}
              title={item.title}
              description={item.body}
              left={props => <Icon name='code-outline' size={25} />}
            />
          ))
        ) : (
          <Text>No posts</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}
