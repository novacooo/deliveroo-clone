import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

const App = () => (
  <TailwindProvider>
    <View>
      <Text className="text-red-500 p-10">Open up App.tsx to start working on your app!</Text>
      <StatusBar />
    </View>
  </TailwindProvider>
);

export default App;
