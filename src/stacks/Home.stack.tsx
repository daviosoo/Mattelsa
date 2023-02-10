import { createStackNavigator } from '@react-navigation/stack';
import BagButton from '../components/HeaderBag';
import HeaderLogo from '../components/HeaderLogo';
import HomeScreen from '../screens/homeScreen/Home.screen';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderLogo />,
        headerRight: () => <BagButton />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
