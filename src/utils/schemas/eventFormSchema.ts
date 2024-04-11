import * as Yup from 'yup';

const today = new Date();
const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());

export const eventFormSchema = Yup.object().shape({
    imageUrl: Yup.mixed()
        .required('Please upload an image.')
        .test(
            'fileFormat',
            'Unsupported format.',
            (value) => {
                const file = value as File;
                return file ? ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type) : true;
            }
        ),
    startDate: Yup.date()
        .required('Start date is required')
        .min(todayDateOnly, 'Start date cannot be in the past'),
    startTime: Yup.date()
        .required('Start time is required'),
    endDate: Yup.date()
        .required('End date is required')
        .min(todayDateOnly, 'End date cannot be in the past'),
    endTime: Yup.date()
        .required('End time is required')
});
