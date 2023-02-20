import { createStackNavigator } from '@react-navigation/stack';
import BagButton from '../components/HeaderBag';
import HeaderLogo from '../components/HeaderLogo';
import LogInScreen from '../screens/logInScreen/LogIn.screen';
import MoreScreen from '../screens/moreScreen/More.screen';
import ProductsScreen from '../screens/productsScreen/Products.screen';
import SaleScreen from '../screens/saleScreen/Sale.screen';

const Stack = createStackNavigator();

function MoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderLogo />,
        headerRight: () => <BagButton />,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="More"
        component={MoreScreen}
      />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="SaleScreen" component={SaleScreen} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LogInScreen}
      />
    </Stack.Navigator>
  );
}

export default MoreStack;
