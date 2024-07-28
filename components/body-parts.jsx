import { useRouter } from 'expo-router';
import { exercises } from '../constants';
import BodyPartsCard from './body-parts-card';
import { View, Text, FlatList } from 'react-native';

export default function BodyParts() {
  const router = useRouter();

  return (
    <View className="mt-6">
      <View className="mb-5 w-full flex items-center justify-between flex-row">
        <Text className="text-black font-semibold text-lg">Exercises</Text>
        <Text className="text-gray-500 font-medium text-sm">View All</Text>
      </View>

      <FlatList
        data={exercises}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between"
        }}
        renderItem={({ item, index }) => <BodyPartsCard index={index} item={item} router={router} />}
      />
    </View>
  )
}