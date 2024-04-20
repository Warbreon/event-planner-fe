import * as Yup from 'yup';
import { isTimeInFuture, isEndTimeAfterStartTime, validateFileFormat } from '../validation/ValidationHelpers';

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
});