import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function Exercises() {
  const item = useLocalSearchParams();
  console.log('items: ', item)

  return (
    <View>
      <Text>Exercises</Text>
    </View>
  )
}