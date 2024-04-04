import {FC} from 'react'
import { ButtonTitles } from "./eventRegistrationButtonTitles";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

interface IconProps {
  className: ButtonTitles
}

const EventButtonIcon: FC<IconProps> = ({className}) => {
  return (
    (className === ButtonTitles.GOING) ? <CheckCircleIcon/> : (className === ButtonTitles.REGISTER) ? <CheckCircleOutlineIcon/> : <ConfirmationNumberIcon/>
  )
}

export default EventButtonIcon