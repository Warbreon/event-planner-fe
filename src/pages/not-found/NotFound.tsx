import { Typography } from '@mui/material';
import styles from './NotFound.module.css'
import GenericButton, { ButtonTypes, IconButton } from '../../components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import useNotFoundViewModel from './NotFoundVm';

const NotFound = () => {
  const {onExploreEventsClick, onMyEventsClick} = useNotFoundViewModel();
  return (
    <div className={styles.notFoundContainer}>
      <Typography variant='h1'>Page you are looking for was not found</Typography>
      <div className={styles.buttonGroup}>
        <GenericButton type={ButtonTypes.button} styles={BUTTON_STYLES.GRAY} icon={IconButton.YOUR_EVENTS}  onClick={onMyEventsClick}/>
        <GenericButton type={ButtonTypes.button} styles={BUTTON_STYLES.BLACK} icon={IconButton.HOME} onClick={onExploreEventsClick}/>
      </div>
    </div>
  )
}

export default NotFound;