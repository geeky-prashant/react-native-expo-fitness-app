import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { fetchExerciseBodyParts } from '../api/exerciseDB';
import { dummyExercises } from "../constants"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text, ActivityIndicator, ScrollView, StatusBar, Image } from 'react-native';

export default function Exercises() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [exercise, setExercise] = useState(dummyExercises);
  const item = useLocalSearchParams();

  // useEffect(() => {
  //   if (item.name) {
  //     getExercises(item.name);
  //   }
  // }, [item.name]);

  // const getExercises = async (bodyPart) => {
  //   try {
  //     setLoading(true);
  //     const data = await fetchExerciseBodyParts(bodyPart);
  //     setExercise(data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // if (loading) return (
  //   <View className="flex-1 items-center justify-center">
  //     <ActivityIndicator size="large" color="#9417c5" />
  //   </View>
  // );

  // if (error) return (
  //   <View className="flex-1 items-center justify-center">
  //     <Text>Error: {error}</Text>
  //   </View>
  // );

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style='dark' />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[30px]"
      />
    </ScrollView>
  )
}