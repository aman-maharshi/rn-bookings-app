import { Link } from "expo-router"
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import images from '@/constants/images'
import icons from '@/constants/icons'
import Search from "@/components/search"

const HomeScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row">
            <Image
              source={images.avatar}
              className="size-12 rounded-full"
            />
            <View className="flex flex-col items-start justify-center ml-2">
              <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
              <Text className="text-base font-rubik-medium text-black-300">Lorem, ipsum</Text>
            </View>
          </View>
          <Image
            source={icons.bell}
            className="size-6"
          >
          </Image>
        </View>
      </View>

      <View className="px-5">
        <Search />

        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default HomeScreen