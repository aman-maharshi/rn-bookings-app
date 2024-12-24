import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {

  const handleLogin = () => {
    // Implement Google login
  }

  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView contentContainerClassName='grow'>
        <Image
          source={images.onboarding}
          className='w-full h-[500px]'
          resizeMode='cover'
        />

        <View className='px-10'>
          <Text className='text-center font-rubik uppercase text-black-200'>
            Welcome to Restate
          </Text>

          <Text className='mt-2 text-3xl font-rubik-bold text-center text-black-300'>
            Let's get you closer to {"\n"}
            <Text className='text-primary-300'>Your ideal home</Text>
          </Text>

          <Text className='text-center mt-12 text-lg font-rubik text-black-200'>
            Login to Restate with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className='bg-white shadow-md shadow-zinc-300 border border-gray-100 rounded-full w-full py-4 mt-5'
          >
            <View className='flex-row justify-center items-center'>
              <Image
                source={icons.google}
                className='h-5 w-5'
                resizeMode='contain'
              />
              <Text className='text-lg font-rubik-medium text-black-300 ml-4'>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

/*
  NOTES:

  ScrollView - to make the content scrollable
  shadow-zinc-300 - better shoadow
  <br> -> "\n"
  button -> TouchableOpacity
  image src -> source
  resizeMode -> contain
  adding view inside TouchableOpacity to make it flex-row
*/