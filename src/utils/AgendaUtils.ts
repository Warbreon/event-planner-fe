import { Agenda } from "../interfaces/Agenda";

export const parseAgendaItems = (agendaArray: string[]): Agenda[] => {
    return agendaArray.map((item) => {
        const [time, ...descriptionParts] = item.split('-');
        const description = descriptionParts.join('-');
        return { time, description };
    });
};

export const formatAgendaItems = (agendaItems: Agenda[]): string[] => {
    return agendaItems.map(({ time, description }) => `${time}-${description}`);
};