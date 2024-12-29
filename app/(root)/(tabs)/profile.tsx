import { View, Text, ScrollView, SafeAreaView, Image, Alert, TouchableOpacity, ImageSourcePropType } from 'react-native'
import { useGlobalContext } from '@/lib/global-provider'
import { logout } from '@/lib/appwrite'
import { router } from 'expo-router'

import { settings } from '@/constants/data'
import images from '@/constants/images'
import icons from '@/constants/icons'

type SettingsItemProps = {
  icon: ImageSourcePropType
  title: string
  onPress?: () => void
  textStyle?: string
  showArrow?: boolean
}

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsItemProps) => (
  <TouchableOpacity
    className='flex flex-row items-cente justify-between py-3'
    onPress={onPress}
  >
    <View className='flex flex-row items-center gap-3'>
      <Image source={icon} className='size-6' />
      <Text className={`text-lg font-rubik-medium ${textStyle}`}>{title}</Text>
    </View>

    {showArrow && (
      <Image
        source={icons.rightArrow}
        className='size-5'
      />
    )}
  </TouchableOpacity>
)

const ProfileScreen = () => {
  const { isLoggedIn, user, loading, refetch } =  useGlobalContext()

  const handleLogout = async () => {
    const response = await logout()

    if (response) {
      Alert.alert('Success', 'You have been successfully logged out')
      refetch()
      // router.push('/')
    } else {
      Alert.alert('Error', 'An error occurred while logging out')
    }
  }

  // console.log(JSON.stringify(user, null, 2), "userData")



  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        contentContainerClassName="grow px-7 pb-32"
        showsVerticalScrollIndicator={true}
      >
        <View className='flex flex-row justify-between items-center mt-5 border border-transparent'>
          <Text className='text-xl font-rubik-bold'>Profile</Text>
          <Image
            source={icons.bell}
            className='size-5'
          />
        </View>

        <View className='flex flex-row justify-center mt-5'>
          <View className='flex flex-col items-center relative mt-5'>
            <Image
              source={{uri: user?.avatar }}
              className='size-44 relative rounded-full'
            />

            <TouchableOpacity className='absolute bottom-12 right-2'>
              <Image
                source={icons.edit}
                className='size-9'
              />
            </TouchableOpacity>

            <Text className='text-2xl font-rubik-bold mt-3'>{user?.name || "Username"}</Text>
          </View>
        </View>

        <View className='flex flex-col mt-10 border-t border-primary-200 py-5'>
          <SettingsItem icon={icons.calendar} title='My Bookings' />
          <SettingsItem icon={icons.wallet} title='Payments' />
        </View>

        <View className='flex flex-col border-t border-primary-200 py-5'>
          {settings.slice(2).map((setting, index) => (
            <SettingsItem key={index} {...setting} />
          ))}
        </View>

        <View className='flex flex-col border-t border-primary-200 pt-5'>
          <SettingsItem
            icon={icons.logout}
            title='Logout'
            textStyle='text-red-500'
            showArrow={false}
            onPress={handleLogout}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen