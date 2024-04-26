import * as Yup from 'yup';
import { isTimeInFuture, isEndTimeAfterStartTime, validateFileFormat } from '../validation/ValidationHelpers';
import moment from 'moment';

export const eventFormSchema = Yup.object().shape({
    imageUrl: Yup.mixed()
        .required('Please upload an image.')
        .test('fileFormat', 'Unsupported format.', function (value) {
            return validateFileFormat(value as File | null)
        }),
    eventName: Yup.string()
        .required('Event name is required'),
    eventStartDate: Yup.date()
        .required('Start date is required'),
    eventStartTime: Yup.date()
        .required('Start time is required')
        .test('is-time-in-the-future', 'Start time cannot be in the past', function (value) {
            return isTimeInFuture(value, this.parent.eventStartDate);
        }),
    eventEndDate: Yup.date()
        .required('End date is required')
        .min(Yup.ref('eventStartDate'), 'End date cannot be earlier than start date'),
    eventEndTime: Yup.date()
        .required('End time is required')
        .test('is-after-start-time', 'End time cannot be earlier than start time', function (value) {
            return isEndTimeAfterStartTime(value, {
                startDate: this.parent.eventStartDate,
                startTime: this.parent.eventStartTime,
                endDate: this.parent.eventEndDate
            });
        }),
    cardUrl: Yup.mixed()
        .required('Please upload an image.')
        .test('fileFormat', 'Unsupported format.', function (value) {
            return validateFileFormat(value as File | null)
        }),
    registrationStartDate: Yup.date()
        .required('Registration start date is required')
        .max(Yup.ref('eventStartDate'), 'Registration start date must be before the event start date'),
    registrationStartTime: Yup.date()
        .required('Registration start time is required')
        .test('is-time-in-the-future', 'Registration start time cannot be in the past', function (value) {
            return isTimeInFuture(value, this.parent.registrationStartDate);
        }),
    registrationEndDate: Yup.date()
        .required('Registration end date is required')
        .min(Yup.ref('registrationStartDate'), 'Registration end date cannot be earlier than start date')
        .max(Yup.ref('eventStartDate'), 'Registration end date must be before the event start date'),
    registrationEndTime: Yup.date()
        .required('Registration end time is required')
        .test('is-after-start-time', 'Registration end time cannot be earlier than start time', function (value) {
            return isEndTimeAfterStartTime(value, {
                startDate: this.parent.registrationStartDate,
                startTime: this.parent.registrationStartTime,
                endDate: this.parent.registrationEndDate
            });
        }),
        .test(
            'fileFormat',
            'Unsupported format.',
            (value) => {
                const file = value as File;
                return file ? ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type) : true;
            }
        ),
    addressId: Yup.string().nullable().test('at-least-one', 'Either an address or an invite URL is required', function (value) {
        const {inviteUrl} = this.parent;
        return value || inviteUrl;
    }),
    inviteUrl: Yup.string().nullable().test('at-least-one', 'Either an address or an invite URL is required', function (value) {
        const {addressId} = this.parent;
        return value || addressId;
    }),

    agenda: Yup.array()
        .of(
            Yup.object().shape({
                time: Yup.date().required('Agenda time is required'),
                description: Yup.string().required('Agenda description is required'),
            }),
        )
        .test('times-ascending', 'Each agenda time must be later thanc the previous one', function (agendaArray) {
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