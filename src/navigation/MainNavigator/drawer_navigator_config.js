import Navbar from './Navbar'

export default DrawerNavigatorConfig = {
  contentComponent: Navbar,
  // I had to add the following lines
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',

}