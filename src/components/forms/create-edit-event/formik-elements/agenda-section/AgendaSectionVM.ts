import { FormikErrors, FormikTouched } from "formik";
import { useCallback, useEffect, useState } from "react";
import { Agenda } from "../../../../../interfaces/Agenda";

interface Props {
  errors: FormikErrors<{agenda: Agenda[]}>;
  touched: FormikTouched<{agenda: Agenda[]}>;
}

const AgendaSectionVM = ({ errors, touched }: Props) => {
  const [showForm, setShowForm] = useState(false);

  const hasAgendaErrors = useCallback(() => (
    Object.keys(touched.agenda || {}).some(key => {
      const index = Number(key);
      return touched.agenda?.[index] && errors.agenda?.[index];
    })
  ), [errors, touched]);

  useEffect(() => {
    if (hasAgendaErrors()) {
      setShowForm(true);
    }
  }, [hasAgendaErrors]);

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Toggle activated');
    setShowForm(event.target.checked);
  }

  return { showForm, onToggle }
}

export default AgendaSectionVM