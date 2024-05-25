import moment, { Moment } from 'moment';

export const formatDate = (date: string): string => {
	return moment(date).format('MMMM D, YYYY');
};

export const formatDateAndTime = (dateTime: string): string => {
	return moment(dateTime).format('MMMM D, YYYY h:mm A');
};

export const formatTime = (dateTimeString: string): string => {
	return moment(dateTimeString).format('HH:mm');
};

export const calculateDuration = (startDateTimeString: string, endDateTimeString: string): string => {
	const startDateTime = moment(startDateTimeString);
	const endDateTime = moment(endDateTimeString);
	const duration = moment.duration(endDateTime.diff(startDateTime));
	const hours = Math.floor(duration.asHours());
	const minutes = Math.floor(duration.asMinutes()) % 60;

	if (hours === 0) {
		return `${minutes} minutes`;
	} else if (hours === 1 && minutes === 0) {
		return `${hours} hour`;
	} else if (hours === 1 && minutes === 1) {
		return `${hours} hour ${minutes} minute`;
	} else if (hours === 1) {
		return `${hours} hour ${minutes} minutes`;
	} else if (minutes === 0) {
		return `${hours} hours`;
	} else if (minutes === 1) {
		return `${hours} hours ${minutes} minute`;
	}

	return `${hours} hours ${minutes} minutes`;
};

export const combineDateTime = (date: Moment | null, time: Moment | null) => {
	if (!date || !time) {
		return null;
	}

	const formattedDate = date.format('YYYY-MM-DD');
	const formattedTime = time.format('HH:mm:ss');
	return `${formattedDate}T${formattedTime}`;
};

export const splitDateTime = (datetime: string | null) => {
	if (!datetime) {
        return { date: null, time: null };
    }

    const [datePart, timePart] = datetime.split('T');

    const date = moment(datePart, 'YYYY-MM-DD');
    const time = moment(`2000-01-01T${timePart}`);

    return {
        date,
        time
    };
};

export const toDisplayTimeFormat = (time: Moment): string => {
	return time.format('h:mm a');
};

export const fromDisplayTimeFormat = (timeString: string): Moment => {
	return moment(timeString, 'h:mm a');
};

export const isDateInThePast = (dateString: string) => {
	return moment(dateString).isBefore(moment());
};

export const isDateInTheFuture = (dateString: string) => {
	return moment(dateString).isAfter(moment());
};

export const formatDifferenceInDays = (dateString: string) => {
	const currentDate = moment();
	const inputDate = moment(dateString);

	const differenceInDays = currentDate.diff(inputDate, 'days');
	const differenceInHours = currentDate.diff(inputDate, 'hours');
	const differenceInMinutes = currentDate.diff(inputDate, 'minutes');

	if (differenceInDays === 0) {
		if (differenceInHours < 1) {
			if (differenceInMinutes < 1) {
				return `< 1 minute ago`;
			}
			if (differenceInMinutes === 1) {
				return `1 minute ago`;
			}
			return `${differenceInMinutes} minutes ago`;
		}

		if (differenceInHours === 1) {
			return `1 hour ago`;
		}
		return `${differenceInHours} hours ago`;
	}

	if (differenceInDays === 1) {
		return `1 day ago`;
	}

	return `${differenceInDays} days ago`;
};

export const isNowBetween = (startDateString: string, endDateString: string) => {
	return moment().isBetween(moment(startDateString), moment(endDateString));
};

export const formatDateAndTimeTo_HH_mm_MMMM_D_YYYY = (dateTime: string): string => {
	return moment(dateTime).format('HH:mm, MMMM D YYYY');
}
