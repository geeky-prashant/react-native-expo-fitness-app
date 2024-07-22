import { meals } from '../constants';
import { View, Text, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function MealSchedule() {
  return (
    <View className="mt-6">
      <View className="mb-5 w-full flex items-center justify-between flex-row">
        <Text className="text-black font-semibold text-lg">Meal Schedule</Text>
        <Text className="text-gray-500 font-medium text-sm">View All</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        {meals.map((item, index) => (
          <View key={index} className="justify-center items-center mr-3">
            <Image
              source={item.image}
              style={{ width: wp(16), height: hp(8) }}
              className="rounded-2xl"
            />
            <Text className="mt-2 text-sm font-semibold text-slate-800">{item.name}</Text>
            <Text className="text-[11px] font-normal text-slate-600">{item.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}