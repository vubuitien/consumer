import { DrawerNavigator } from 'react-navigation';
import RouteConfigs from './route_configs';
import StackNavigatorConfig from './drawer_navigator_config';

export default MainNavigator = DrawerNavigator(RouteConfigs, StackNavigatorConfig);
