import SignUp from '../../../components/screens/SignUp';
import Login from '../../../components/screens/Login';
import FinalStep from '../../../components/screens/SignUp/FinalStep';
import FirstStep from '../../../components/screens/SignUp/FirstStep';
import UploadImage from '../../../components/screens/SignUp/UploadImage';
import ConfirmEmail from '../../../components/screens/SignUp/FinalStep/ConfirmEmail';

export default RouteConfig = {
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  FinalStep: { screen: FinalStep },
  FirstStep: { screen: FirstStep },
  UploadImage: { screen: UploadImage },
  ConfirmEmail: { screen: ConfirmEmail }
};
