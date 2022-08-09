import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row py-3 items-center mx-4 space-x-2">
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
    </SafeAreaView>
  );
};

export default HomeScreen;
