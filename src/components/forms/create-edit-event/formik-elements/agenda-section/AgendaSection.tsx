import ToggleHeader from "../../../../../shared/forms/elements/toggle-header/ToggleHeader"
import AgendaItem from "../../agenda-item/AgendaItem";
import AgendaSectionVM from "./AgendaSectionVM"
import { FieldArray } from "formik";
import GenericButton, { ButtonTypes, IconButton } from "../../../../buttons/ButtonComponent";
import { BUTTON_STYLES } from "../../../../../themes/styles/Button";
import { Agenda } from "../../../../../interfaces/Agenda";
import { Moment } from "moment";

interface Props {
  agenda: Agenda[] | null;
}

const AgendaSection: React.FC<Props> = ({ agenda }) => {
  const { showForm, onToggle } = AgendaSectionVM();

  return (
    <div>
      <ToggleHeader
        title='Add agenda'
        isChecked={showForm}
        onToggle={onToggle}
      />
      {showForm && (
        <FieldArray name='agenda'>
          {({ remove, push }) => (
            <div>
              {agenda?.map((_, index) => {
                return <AgendaItem
                  key={index}
                  showLabels={index === 0}
                  onDelete={() => remove(index)}
                  namePrefix={`agenda[${index}]`}
                />
              })}
              <GenericButton 
                type={ButtonTypes.button}
                styles={BUTTON_STYLES.LIGHT_GRAY}
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