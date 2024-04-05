export const formatDateAndTime = (datetime: string): string => {
    return new Date(datetime).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};