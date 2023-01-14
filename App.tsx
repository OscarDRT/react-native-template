import React from 'react'
import { View } from 'react-native'
import { Horse, Heart, Cube } from 'phosphor-react-native'

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />
    </View>
  )
}

export default App
