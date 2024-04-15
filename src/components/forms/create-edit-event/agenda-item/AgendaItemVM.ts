import { Moment } from "moment";
import { fromDisplayTimeFormat } from "../../../../utils/DateConverter";

interface Props {
    time: string;
    text: string;
    namePrefix: string;
    setFieldValue: (field: string, value: string | Moment) => void;
}

const AgendaItemVM = ({ time, text, namePrefix, setFieldValue }: Props) => {
    const timeFieldName = `${namePrefix}.time`;
    const descriptionFieldName = `${namePrefix}.description`;

    return { timeFieldName, descriptionFieldName };
}

export default AgendaItemVM