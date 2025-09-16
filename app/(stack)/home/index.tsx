import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>

        <CustomButton color="primary"
          onPress={() => router.push('/products')}
          className='mb-2'
          onLongPress={() => { }}
        >Productos</CustomButton>

        <CustomButton color="secondary"
          onPress={() => router.push('/profile')}
          className='mb-2'
          onLongPress={() => { }}
        >Profile</CustomButton>

        <CustomButton color="tertiary"
          onPress={() => router.push('/settings')}
          className='mb-2'
          onLongPress={() => { }}
        >Ajustes</CustomButton>

        
        <Link href="/products" asChild>
          <CustomButton color="primary"
          variant='text-only'
          className='mb-10'
          >Productos</CustomButton>
        </Link>


      </View>
    </SafeAreaView>
  )
}

export default HomeScreen