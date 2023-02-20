import { createStackNavigator } from '@react-navigation/stack';
import BagButton from '../components/HeaderBag';
import HeaderLogo from '../components/HeaderLogo';
import ProductsScreen from '../screens/productsScreen/Products.screen';
import SearchScreen from '../screens/searchScreen/Search.screen';

const Stack = createStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderLogo />,
        headerRight: () => <BagButton />,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
    </Stack.Navigator>
  );
}

export default SearchStack;
