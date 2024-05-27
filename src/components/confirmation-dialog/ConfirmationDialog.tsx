import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import ButtonComponentGroup from '../../shared/components/buttons/buton-group/ButtonComponentGroup';
import styles from './ConfirmationDialog.module.css';

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  open,
  onClose,
  onConfirm,
  title,
  description
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonComponentGroup
          buttons={[
            {
              label: 'No',
              onClick: onClose,
              className: `${BUTTON_STYLES.MODAL_BUTTON}`
            },
            {
              label: 'Yes',
              onClick: onConfirm,
              className: `${BUTTON_STYLES.BLACK} ${BUTTON_STYLES.MODAL_BUTTON}`,
            },
          ]}
          className={styles.buttonsContainer}
        />

      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;