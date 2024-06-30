import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function index() {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-blue-50">
        <View className="bg-white rounded-3xl shadow-xl p-6 text-center w-[85%]">
          <Text className="text-xl text-[#0083B0] font-bold leading-[40px] text-center">Hi, I'm Prashant Bhardwaj</Text>
          <Text className="font-semibold text-[#000000] text-lg leading-6 text-center">Frontend Engineer at Virtual Staff</Text>

          <LinearGradient
            colors={["#00B4DB", '#0083B0']}
            className="rounded-xl mt-8 shadow-xl"
          >
            <Text className="text-white font-bold p-3 text-lg text-center">Follow on LinkedIn</Text>
          </LinearGradient>
        </View>
      </View>
    </>
  )
}