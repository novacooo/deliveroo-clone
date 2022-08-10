import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingVertical: 10,
      paddingStart: 16,
      paddingEnd: 8,
    }}
  >
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
    <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing" />
  </ScrollView>
);

export default Categories;
