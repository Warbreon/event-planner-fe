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
	addressId: Yup.string().test('at-least-one', 'Either an address or an invite URL is required', function (value) {
		const { inviteUrl } = this.parent;
		return value || inviteUrl;
	}),
	inviteUrl: Yup.string().test('at-least-one', 'Either an address or an invite URL is required', function (value) {
		const { addressId } = this.parent;
		return value || addressId;
	}),
});
