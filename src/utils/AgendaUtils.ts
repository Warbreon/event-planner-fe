import { Agenda } from "../interfaces/Agenda";
import { fromDisplayTimeFormat, toDisplayTimeFormat } from "./DateConverter";

export const parseAgendaItems = (agendaArray: string[]): Agenda[] => {
    return agendaArray.map((item) => {
        const [time, ...descriptionParts] = item.split('-');
        const description = descriptionParts.join('-');
        const convertedTime = fromDisplayTimeFormat(time);
        return { time: convertedTime, description };
    });
};

export const formatAgendaItems = (agendaItems: Agenda[]): string[] => {
    return agendaItems.map(({ time, description }) => {
        const convertedTime = toDisplayTimeFormat(time);
        return `${convertedTime}-${description}`;
    });
};