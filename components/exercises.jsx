import { exercises } from '../constants';
import { View, Text, ScrollView, Image, Platform } from 'react-native';

export default function Exercises() {
  const isAndroid = Platform.OS === 'android';

  return (
    <View className="mt-6">
      <View className="mb-5 w-full flex items-center justify-between flex-row">
        <Text className="text-black font-semibold text-lg">Exercises</Text>
        <Text className="text-gray-500 font-medium text-sm">View All</Text>
      </View>

      <ScrollView
        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}
        showsVerticalScrollIndicator={false}
        className="pb-5"
      >
        {exercises.map((item, index) => (
          <View key={index} className="p-1.5 w-[48.4%]"
          >
            <Image
              source={item}
              className={`w-full object-cover rounded-2xl ${isAndroid ? "h-36" : "h-44"}`}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}