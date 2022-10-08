import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/themed/Themed'
import { RootTabScreenProps } from '../types'
import '@expo/match-media'
// Unleash the demo :D
import { useMediaQuery } from 'react-responsive'

const Input = ({ label, placeholder, value, onChange }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput placeholder={placeholder} value={value} onChangeText={onChange} />
    </View>
  )
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const isTabletOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 1224,
  })

  if (isTabletOrMobileDevice) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab Mobile</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab Desktop</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
