import { createStackNavigator } from '@react-navigation/stack';
import BagButton from '../components/HeaderBag';
import HeaderLogo from '../components/HeaderLogo';
import SearchScreen from '../screens/searchScreen/Search.screen';

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderLogo />,
        headerRight: () => <BagButton />,
      }}>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default SearchStack;
