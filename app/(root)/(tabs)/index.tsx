import { Link } from "expo-router"
import { Text, View } from "react-native"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <Text>Home</Text>

      <Link href="/sign-in">
        <Text>Sign In</Text>
      </Link>
      <Link href="/profile">
        <Text>Profile</Text>
      </Link>
      <Link href="/explore">
        <Text>Explore</Text>
      </Link>
      <Link href="/properties/1">
        <Text>Property #1</Text>
      </Link>
    </View>
  )
}
