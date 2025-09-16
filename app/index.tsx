import { Redirect } from 'expo-router'
import React from 'react'

const index = () => {
  return (
    <Redirect href="/(stack)/home/" />
    // <SafeAreaView>
    //   <View className='mt-10 mx-2.5'>

    //   <Text className='text-5xl'
    //   style={{ fontFamily: 'WorkSans-Black' }}
    //   >Hola Mundo</Text>


    //   <Text className='text-4xl font-work-black text-primary'>Hola Mundo</Text>

    //   <Text className='text-3xl font-work-medium text-secondary'>Hola Mundo</Text>

    //   <Text className='text-2xl font-work-light text-secondary-100'>Hola Mundo</Text>

    //   <Text className='text-xl text-tertiary'>Hola Mundo</Text>

    //   <Link href="/products">Productos</Link>
      
    //   </View>
    // </SafeAreaView>
  )
}

export default index