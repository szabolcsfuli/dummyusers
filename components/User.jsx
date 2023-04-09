import { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Link } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../store'
import { Button } from 'react-native'

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
          {/* <Button
            onPress={() => {
              navigation.navigate('Posts')
            }}
            title='Posts'
          />
          <Button
            onPress={() => {
              navigation.navigate('Albums')
            }}
            title='Albums'
          /> */}
        </View>
      ) : (
        <Text>No user selected</Text>
      )}
    </View>
  )
}

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// },
