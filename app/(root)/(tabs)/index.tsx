import { Link } from "expo-router"
import { SafeAreaView, ScrollView, Text, View } from "react-native"

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        contentContainerClassName="grow p-8"
      >
        <View className="flex-1 flex flex-col gap-8">
          <Text className="text-3xl font-rubik-bold">Home</Text>

          <Link href="/sign-in">
            <Text className="font-rubik text-2xl my-4">Sign In</Text>
          </Link>
          <Link href="/profile">
            <Text className="font-rubik text-2xl my-4">Profile</Text>
          </Link>
          <Link href="/explore">
            <Text className="font-rubik text-2xl my-4">Explore</Text>
          </Link>
          <Link href="/properties/1">
            <Text className="font-rubik text-2xl my-4">Property #1</Text>
          </Link>

          <View className="h-0.5 bg-gray-300 my-8"></View>

          <Link href="/sign-in">
            <Text className="font-rubik text-2xl my-4">Sign In</Text>
          </Link>
          <Link href="/profile">
            <Text className="font-rubik text-2xl my-4">Profile</Text>
          </Link>
          <Link href="/explore">
            <Text className="font-rubik text-2xl my-4">Explore</Text>
          </Link>
          <Link href="/properties/1">
            <Text className="font-rubik text-2xl my-4">Property #1</Text>
          </Link>

          <View className="h-0.5 bg-gray-300 my-8"></View>

          <Link href="/sign-in">
            <Text className="font-rubik text-2xl my-4">Sign In</Text>
          </Link>
          <Link href="/profile">
            <Text className="font-rubik text-2xl my-4">Profile</Text>
          </Link>
          <Link href="/explore">
            <Text className="font-rubik text-2xl my-4">Explore</Text>
          </Link>
          <Link href="/properties/1">
            <Text className="font-rubik text-2xl my-4">Property #1</Text>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
