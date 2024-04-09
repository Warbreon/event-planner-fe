import * as Yup from 'yup';

const today = new Date();
const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

export const eventFormSchema = Yup.object().shape({
    startDate: Yup.date()
        .required('startDate is required')
        .min(todayDateOnly, 'Start date cannot be in the past'),
    startTime: Yup.date()
        .required('startTime is required')
});