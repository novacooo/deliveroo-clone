import { View, Text, Image, TouchableOpacity } from 'react-native';

interface CategoryCardProps {
  imgUrl: string;
  title: string;
}

const CategoryCard = ({ imgUrl, title }: CategoryCardProps) => (
  <TouchableOpacity>
    <View className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </View>
  </TouchableOpacity>
);

export default CategoryCard;
