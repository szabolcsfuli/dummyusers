import { Provider } from 'react-redux'
import store from './store'
import Navigation from './components/Navigation'
import { Provider as PaperProvider } from 'react-native-paper'

export default function App () {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  )
}
