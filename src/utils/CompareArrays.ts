export const areArraysEqual = <T>(array1: T[], array2: T[]): boolean => {
	const sorted1 = [...array1].sort();
	const sorted2 = [...array2].sort();
	return JSON.stringify(sorted1) === JSON.stringify(sorted2);
};
