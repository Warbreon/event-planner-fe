import { FormikErrors, FormikTouched } from "formik";
import { useEffect, useState } from "react";
import { Agenda } from "../../../../../interfaces/Agenda";

interface Props {
  errors: FormikErrors<{agenda: Agenda[]}>;
  touched: FormikTouched<{agenda: Agenda[]}>;
}

const AgendaSectionVM = ({ errors, touched }: Props) => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (hasAgendaErrors()) {
      setShowForm(true);
    }
  }, [errors, touched]);

  const onToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Toggle activated');
    setShowForm(event.target.checked);
  }

  const hasAgendaErrors = () => {
    return Object.keys(touched.agenda || {}).some(
      key => {
        const index = Number(key);
        return Boolean(touched.agenda?.[index] && errors.agenda?.[index]);
      }
    );
  };

  return { showForm, onToggle }
}

export default AgendaSectionVM