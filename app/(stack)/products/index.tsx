import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import { FlatList, Text, View } from 'react-native'

const ProductsScreen = () => {
  return (
    <View className='flex flex-1'>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className='mt-10 px-4'>
            <Text className='text-2xl font-work-black'>{item.title}</Text>
            <Text>{item.description}</Text>

            <View className='flex flex-row justify-between mt-2'>
              <Text className='font-work-black'>${item.price}</Text>
              <Link href={`/(stack)/products/${item.id}`} className='text-primary'>Ver Detalles</Link>
            </View>
          </View>
        )} />
    </View>
  )
}

export default ProductsScreen