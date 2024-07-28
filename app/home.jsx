import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components 
import Header from '../components/header';
import Progress from '../components/progress';
import MealSchedule from '../components/meal-schedule';
import BodyParts from '../components/body-parts';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white px-5" edges={["top"]}>
      <StatusBar style='dark' />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section  */}
        <Header />

        {/* Track Progress  */}
        <Progress />

        {/* Meal Schedule  */}
        <MealSchedule />

        {/* Body Parts  */}
        <BodyParts />
      </ScrollView>
    </SafeAreaView>
  )
}
