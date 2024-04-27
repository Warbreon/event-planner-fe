import { FormikErrors, FormikTouched } from "formik";
import { Attendee } from "../../models/Attendee";
import { useCallback, useEffect, useState } from "react";

interface Props {
  errors: FormikErrors<{attendees: Attendee[]}>;
  touched: FormikTouched<{attendees: Attendee[]}>;
}

const useAddGuestsVM = ({ errors, touched }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const hasAgendaErrors = useCallback(() => (
    Object.keys(touched.attendees || {}).some(key => {
      const index = Number(key);
      return touched.attendees?.[index] && errors.attendees?.[index];
    })
  ), [errors, touched]);

  useEffect(() => {
    if (hasAgendaErrors()) {
      setShowForm(true);
    }
  }, [hasAgendaErrors]);

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowForm(event.target.checked);
  }

  const onAddGuestClick = () => {
    setShowModal(!showModal);
  }

  const onModalClose = () => {
    setShowModal(!showModal);

  }

  const onConfirm = () => {
    console.log(`I confirm`)

  }

  return { showForm, showModal, onToggle, onAddGuestClick, onModalClose }

}

export default useAddGuestsVM;