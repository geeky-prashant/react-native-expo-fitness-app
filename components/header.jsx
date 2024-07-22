import { View, Text, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Header() {
  return (
    <View className="flex flex-row items-center justify-between mb-8 mt-5">
      <View className="space-y-1">
        <Text
          style={{
            fontSize: hp(2)
          }}
          className="font-normal tracking-wider text-slate-500"
        >Welcome Back,</Text>
        <Text
          style={{
            fontSize: hp(3)
          }}
          className="font-bold tracking-wider text-neutral-800"
        >Prashant <Text className="text-neutral-800">Bhardwaj</Text></Text>
      </View>

      <View>
        <Image
          source={require('../assets/images/avatar.jpeg')}
          style={{ height: hp(6), width: hp(6) }}
          className="rounded-xl"
        />
      </View>
    </View>
  )
}