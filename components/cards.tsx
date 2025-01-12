import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'

/*
  NOTES:
  bg-white/90 -  90% opacity
  inset-x-5 - left and right 1.25rem
*/

interface Props {
  onPress?: () => void
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='flex flex-col items-start w-60 h-80 relative'
    >
      <Image
        source={images.japan}
        className='size-full rounded-2xl'
      />
      <Image
        source={images.cardGradient}
        className='size-full rounded-2xl absolute bottom-0'
      />

      <View className='absolute top-5 right-5 flex flex-row items-center gap-2 bg-white/90 px-2 py-1 rounded-full'>
        <Image
          source={icons.star}
          className='size-3.5'
        />
        <Text className='text-sm font-rubik-bold text-primary-300'>4.4</Text>
      </View>

      <View className='flex flex-col items-start absolute bottom-5 inset-x-5'>
        <Text numberOfLines={1} className='text-white text-lg font-rubik-extrabold'>
          Modern Appartment
        </Text>
        <Text className='text-white text-base font-rubik'>
          22 W 15th St, New York
        </Text>

        <View className='flex flex-row items-center justify-between w-full'>
          <Text className='text-xl font-rubik-bold text-white'>$2,500</Text>
          <Image source={icons.heart} className='size-5' />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const Card = () => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  )
}
