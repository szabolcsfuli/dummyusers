import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { populatePostsThunk } from '../thunks'

export default () => {
  const { posts } = useSelector(state => state.dummyDB)

  return (
    <View>
      {posts.length > 0 ? (
        posts.map(item => (
          <Text key={item.id}>
            <Text style={{fontSize: 12, fontWeight: 'bold'}}>{item.title}</Text>
            <Text>{item.body}</Text>
          </Text>
        ))
      ) : (
        <Text>No posts</Text>
      )}
    </View>
  )
}
