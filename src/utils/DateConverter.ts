export const formatDate = (date: string): string => {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	return new Date(date).toLocaleDateString('en-US', options)
};

export const formatDateAndTime = (dateTime: string): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	};
	return new Date(dateTime).toLocaleDateString('en-US', options);
};

export const formatTime = (dateTimeString: string): string => {
	const dateTime = new Date(dateTimeString);
	const hours = dateTime.getHours().toString().padStart(2, '0');
	const minutes = dateTime.getMinutes().toString().padStart(2, '0');
	return `${hours}:${minutes}`;
};

export const calculateDuration = (startDateTimeString: string, endDateTimeString: string): string => {
	const startDateTime = new Date(startDateTimeString);
	const endDateTime = new Date(endDateTimeString);
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
