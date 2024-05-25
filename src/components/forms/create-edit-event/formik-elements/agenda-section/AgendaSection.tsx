import ToggleHeader from "../../../../../shared/forms/elements/toggle-header/ToggleHeader"
import AgendaItem from "../../agenda-item/AgendaItem";
import AgendaSectionVM from "./AgendaSectionVM"
import { FieldArray, useFormikContext } from "formik";
import GenericButton, { ButtonTypes, IconButton } from "../../../../../shared/components/buttons/ButtonComponent";
import { BUTTON_STYLES } from "../../../../../themes/styles/Button";
import { Agenda } from "../../../../../interfaces/Agenda";
import styles from './AgendaSection.module.css';

interface Props {
  agenda: Agenda[] | null;
}

const AgendaSection: React.FC<Props> = () => {
  const { values, errors, touched } = useFormikContext<{ agenda: Agenda[] }>();
  const { showForm, onToggle } = AgendaSectionVM({ errors, touched });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ToggleHeader
          title='Add agenda'
          showToggle={true}
          isChecked={showForm}
          onToggle={onToggle}
        />
      </div>
      {showForm && (
        <FieldArray name='agenda'>
          {({ remove, push }) => (
            <div className={styles.agendaContainer}>
              {values.agenda?.map((item, index) => (
                <AgendaItem
                  key={`${item.time} ${index}`}
                  showLabels={index === 0}
                  onDelete={() => remove(index)}
                  namePrefix={`agenda[${index}]`}
                />
              ))}
              <GenericButton
                title='Add new item'
                type={ButtonTypes.button}
                styles={BUTTON_STYLES.TEXT_ONLY}
                icon={IconButton.ADD_EVENT}
                onClick={() => push({ time: '', description: '' })}
              />
            </div>
          )}
        </FieldArray>
      )}
    </div>
  )
}

export default AgendaSection