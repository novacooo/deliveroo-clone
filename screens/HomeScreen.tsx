import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="bg-white flex-1">
      {/* Top bar */}
      <View className="bg-white px-4 py-3 gap-3">
        {/* Header */}
        <View className="flex-row items-center space-x-2">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
            <View className="flex-row items-center">
              <Text className="font-bold text-lg">Current location</Text>
              <ChevronDownIcon size={18} color="#00ccbb" />
            </View>
          </View>
          <UserIcon size={28} color="#00ccbb" />
        </View>
        {/* Search */}
        <View className="flex-row items-center space-x-2">
          <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 mr-2 p-3">
            <SearchIcon size={20} color="gray" />
            <TextInput placeholder="Restaurants and cuisines" keyboardType="default" className="flex-1" />
          </View>
          <AdjustmentsIcon size={28} color="#00ccbb" />
        </View>
      </View>
      {/* Body */}
      <ScrollView className="bg-gray-100 flex-1">
        {/* Categories */}
        <Categories />
        {/* Featured rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
