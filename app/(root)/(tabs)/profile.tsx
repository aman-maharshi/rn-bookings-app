import { View, Text, ScrollView, SafeAreaView } from 'react-native'

const ProfileScreen = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        contentContainerClassName="grow p-8"
      >
        <View className="flex-1 flex flex-col gap-8">
          <Text className="text-3xl font-rubik-bold">Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen