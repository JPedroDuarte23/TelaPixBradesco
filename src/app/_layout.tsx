import "@/styles/global.css"


import { View, StatusBar, Text } from "react-native"
import { Slot } from "expo-router"
import * as Font from 'expo-font'
import { useEffect, useState } from 'react'

export default function Layout() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'BradescoSansRegular': require('../assets/fonts/BradescoSans.ttf'),
        'BradescoSansMedium': require('../assets/fonts/BradescoSansMedium.ttf'),
        'BradescoSansSemibold': require('../assets/fonts/BradescoSansSemibold.ttf'),
        'BradescoSansBold': require('../assets/fonts/BradescoSansBold.ttf'),
      })
      setFontsLoaded(true)
    }

    loadFonts()
  }, [])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View className="flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Slot />
    </View>
  )
}
