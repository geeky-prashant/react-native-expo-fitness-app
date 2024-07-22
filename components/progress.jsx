import { Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Progress() {
  const isAndroid = Platform.OS === 'android';

  return (
    <LinearGradient
      colors={['#9417c5', '#ecc0fe']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="rounded-3xl w-full py-3 pl-6 flex flex-row items-center justify-between"
    >
      <View
        className="w-[55%]"
      >
        <Text
          className={`text-white font-extrabold leading-5 ${isAndroid ? 'text-sm' : 'text-base'}`}
        >
          BMI (Body Mass Index)
        </Text>

        <Text
          className={`text-white font-medium mt-1 ${isAndroid ? 'text-sm' : 'text-base'}`}
        >
          You have a normal weight
        </Text>

        <TouchableOpacity
          className="bg-transparent border border-white rounded-full flex items-center justify-center mt-4 px-3 py-2.5"
          style={{ width: wp(30) }}
        >
          <Text
            className="text-white font-semibold text-center"
            style={{ fontSize: hp(1.6) }}
          >
            View more
          </Text>
        </TouchableOpacity>
      </View>
      <View
        className="w-[45%]"
      >
        <Image
          source={require('../assets/images/banner-pie.png')}
          className={`${isAndroid ? 'w-[130px] h-[130px]' : 'w-[150px] h-[150px]'}`}
        />
      </View>
    </LinearGradient>
  )
}