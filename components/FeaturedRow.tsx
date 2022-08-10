import { ScrollView, Text, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

interface FeaturedRowProps {
  id: string;
  title: string;
  description: string;
}

const FeaturedRow = ({ id, title, description }: FeaturedRowProps) => (
  <View className="mt-4">
    <View className="flex-row items-center justify-between px-4">
      <Text className="font-bold text-lg">{title}</Text>
      <ArrowRightIcon size={24} color="#00ccbb" />
    </View>
    <Text className="text-xs text-gray-500 px-4">{description}</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 10,
        paddingStart: 16,
        paddingEnd: 4,
      }}
    >
      <RestaurantCard
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="Yo! Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        shortDescription="This is a test description"
        dishes={[]}
        long={20}
        lat={0}
      />
      <RestaurantCard
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="Yo! Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        shortDescription="This is a test description"
        dishes={[]}
        long={20}
        lat={0}
      />
      <RestaurantCard
        id={123}
        imgUrl="https://links.papareact.com/gn7"
        title="Yo! Sushi"
        rating={4.5}
        genre="Japanese"
        address="123 Main St"
        shortDescription="This is a test description"
        dishes={[]}
        long={20}
        lat={0}
      />
    </ScrollView>
  </View>
);

export default FeaturedRow;
