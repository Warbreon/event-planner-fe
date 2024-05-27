import { useNavigate } from "react-router"
import ROUTES from "../../../routes/Routes";

const RegisterModalVM = (isOpenEvent: boolean) => {
    const navigate = useNavigate();
    const title = isOpenEvent ? "Congrats, you're going!" : "Your enquiry have been sent";
    const confirmButtonLabel = isOpenEvent ? 'Done' : 'Got it';

    const navigateToMyEvents = () => {
        navigate(ROUTES.MY_EVENTS);
    }

  return { title, confirmButtonLabel, navigateToMyEvents }
}

export default RegisterModalVM