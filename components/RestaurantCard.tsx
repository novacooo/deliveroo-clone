import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { LocationMarkerIcon } from 'react-native-heroicons/outline';

interface RestaurantCardProps {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: any[];
  long: number;
  lat: number;
}

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}: RestaurantCardProps) => (
  <TouchableOpacity>
    <View className="bg-white mr-3 rounded">
      <Image source={{ uri: imgUrl }} className="w-64 h-64 rounded-t" />
      <View className="px-3 pb-4 ">
        <Text className="font-bold text-lg mt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="#00ccbb" size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-[#00ccbb] font-bold">{rating}</Text> · {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby · {address}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default RestaurantCard;
