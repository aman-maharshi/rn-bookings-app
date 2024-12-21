import { SplashScreen, Stack } from "expo-router"
import { useEffect } from "react"
import { useFonts } from "expo-font"
import "./global.css"

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": "../assets/fonts/Rubik-Bold.ttf",
    "Rubik-ExtraBold": "../assets/fonts/Rubik-ExtraBold.ttf",
    "Rubik-Light": "../assets/fonts/Rubik-Light.ttf",
    "Rubik-Medium": "../assets/fonts/Rubik-Medium.ttf",
    "Rubik-Regular": "../assets/fonts/Rubik-Regular.ttf",
    "Rubik-SemiBold": "../assets/fonts/Rubik-SemiBold.ttf"
  })

  useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  

  if (!fontsLoaded) {
    return null
  }

  return <Stack />
}
