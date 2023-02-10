import { createStackNavigator } from '@react-navigation/stack';
import BagButton from '../components/HeaderBag';
import HeaderLogo from '../components/HeaderLogo';
import MoreScreen from '../screens/moreScreen/More.screen';

const Stack = createStackNavigator();

function MoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderLogo />,
        headerRight: () => <BagButton />,
      }}>
      <Stack.Screen options={{headerShown: false}} name="More" component={MoreScreen} />
    </Stack.Navigator>
  );
}

export default MoreStack;
