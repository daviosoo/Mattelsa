import { createStackNavigator } from '@react-navigation/stack';
import BagButton from '../components/HeaderBag';
import HeaderLogo from '../components/HeaderLogo';
import ProductsScreen from '../screens/productsScreen/Products.screen';
import SaleScreen from '../screens/saleScreen/Sale.screen';

const Stack = createStackNavigator();

function SaleStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderLogo />,
        headerRight: () => <BagButton />,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="SaleScreen" component={SaleScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
    </Stack.Navigator>
  );
}

export default SaleStack;
