import moment from 'moment';
import * as Yup from 'yup';
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
    eventName: Yup.string()
        .required('Event name is required'),
    eventStartDate: Yup.date()
        .required('Start date is required'),
    eventStartTime: Yup.date()
        .required('Start time is required')
        .test('is-time-in-the-future', 'Start time cannot be in the past', function (value) {
            const { eventStartDate } = this.parent;
            const eventStartTime = moment(value);
            const eventStartDateTime = moment(eventStartDate)
                .set({
                    hour: eventStartTime.hours(),
                    minute: eventStartTime.minutes()
                });

            return eventStartDateTime.isAfter(moment());
        }),
    eventEndDate: Yup.date()
        .required('End date is required')
        .min(
            Yup.ref('eventStartDate'),
            'End date cannot be earlier than start date'
        ),
    eventEndTime: Yup.date()
        .required('End time is required')
        .test('is-after-start-time', 'End time cannot be earlier than start time', function (value) {
            const { eventStartDate, eventStartTime, eventEndDate } = this.parent;
            const startDate = moment(eventStartDate);
            const startTime = moment(eventStartTime);
            const endDate = moment(eventEndDate);
            const endTime = moment(value);

            if (!endDate.isSame(startDate, 'day')) {
                return endDate.isAfter(startDate, 'day');
            } else {
                return endTime.isAfter(startTime);
            }
        }),
    cardUrl: Yup.mixed()
        .required('Please upload an image.')
        .test(
            'fileFormat',
            'Unsupported format.',
            (value) => {
                const file = value as File;
                return file ? ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type) : true;
            }
        ),
    agenda: Yup.array()
        .of(
            Yup.object().shape({
                time: Yup.date().required('Agenda time is required'),
                description: Yup.string().required('Agenda description is required'),
            }),
        )
        .test('times-ascending', 'Each agenda time must be later than the previous one', function (agendaArray) {
            if (!agendaArray || agendaArray.length <= 1) {
                return true;
            }

            let lastTime = moment(agendaArray[0].time);

            for (let i = 1; i < agendaArray.length; i++) {
                const currentTime = moment(agendaArray[i].time);

                if (!currentTime.isAfter(lastTime)) {
                    return this.createError({
                        path: `agenda[${i}].time`,
                        message: 'Each agenda time must be later than the previous one',
                    });
                }

                lastTime = currentTime;
            }

            return true;
        }),
});