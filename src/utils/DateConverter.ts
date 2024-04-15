import moment, { Moment } from "moment";

export const formatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	return date.toLocaleDateString('en-US', options);
};

export const formatDateAndTime = (dateTime: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	};
	return dateTime.toLocaleDateString('en-US', options);
};

export const formatTime = (dateTime: Date): string => {
	const hours = dateTime.getHours().toString().padStart(2, '0');
	const minutes = dateTime.getMinutes().toString().padStart(2, '0');
	return `${hours}:${minutes}`;
};

export const calculateDuration = (startDateTime: Date, endDateTime: Date): string => {
	const timeDifference = endDateTime.valueOf() - startDateTime.valueOf();
	const hours = Math.floor(timeDifference / (1000 * 60 * 60));
	const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
	if (minutes === 0) {
		return `${hours} hours`;
	}
	if (minutes === 1) {
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

export const toDisplayTimeFormat = (time: Moment): string => {
	return time.format('hh:mm A');
};

export const fromDisplayTimeFormat = (timeString: string): Moment => {
	return moment(timeString, 'hh:mm A');
};