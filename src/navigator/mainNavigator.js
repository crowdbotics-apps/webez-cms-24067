import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial196708Navigator from '../features/Tutorial196708/navigator';
import NotificationList196680Navigator from '../features/NotificationList196680/navigator';
import Settings196679Navigator from '../features/Settings196679/navigator';
import Settings196671Navigator from '../features/Settings196671/navigator';
import UserProfile196669Navigator from '../features/UserProfile196669/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial196708: { screen: Tutorial196708Navigator },
NotificationList196680: { screen: NotificationList196680Navigator },
Settings196679: { screen: Settings196679Navigator },
Settings196671: { screen: Settings196671Navigator },
UserProfile196669: { screen: UserProfile196669Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
