import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Platform, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function BodyPartsCard({ item, index, router }) {
  const isAndroid = Platform.OS === 'android';

  return (
    <View>
      <TouchableOpacity
        onPress={() => router.push({ pathname: "exercises", params: item })}
        style={{ width: wp(43), height: wp(43) }}
        className={`flex justify-end ${isAndroid ? "mb-2.5" : "mb-5"}`}
      >
        <Image
          source={item.image}
          style={{ width: wp(43), height: wp(43) }}
          resizeMode='cover'
          className="rounded-2xl absolute"
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.9)']}
          style={{ width: wp(43), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-2xl"
        />
        <Text className="text-white font-semibold text-center mb-4 text-base italic">{item.name}</Text>
      </TouchableOpacity>
    </View>
  )
}