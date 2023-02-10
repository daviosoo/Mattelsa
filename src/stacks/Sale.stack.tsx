import { createStackNavigator } from '@react-navigation/stack';
import BagButton from '../components/HeaderBag';
import HeaderLogo from '../components/HeaderLogo';
import SaleScreen from '../screens/saleScreen/Sale.screen';

const Stack = createStackNavigator();

function SaleStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderLogo />,
        headerRight: () => <BagButton />,
      }}>
      <Stack.Screen name="SaleScreen" component={SaleScreen} />
    </Stack.Navigator>
  );
}

export default SaleStack;
