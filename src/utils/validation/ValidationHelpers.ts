import moment from 'moment';

export function isTimeInFuture(value: string | Date, startDate: string | Date): boolean {
    const dateTime = moment(startDate).set({
        hour: moment(value).hours(),
        minute: moment(value).minutes(),
    });
    return dateTime.isAfter(moment());
}

export function isEndTimeAfterStartTime(
    value: string | Date,
    {
        startDate,
        startTime,
        endDate,
    }: {
        startDate: string | Date;
        startTime: string | Date;
        endDate: string | Date;
    }
): boolean {
    const startDateTime = moment(startDate).set({
        hour: moment(startTime).hours(),
        minute: moment(startTime).minutes(),
    });
    const endDateTime = moment(endDate).set({
        hour: moment(value).hours(),
        minute: moment(value).minutes(),
    });
    return endDateTime.isAfter(startDateTime);
}

export function validateFileFormat(value: File | null): boolean {
    if (!value) return false;
    return ['image/jpeg', 'image/jpg', 'image/png'].includes(value.type);
  }