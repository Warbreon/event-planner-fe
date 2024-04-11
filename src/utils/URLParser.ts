export const getMeetingPlatform = (intiveUrl: string) => {
	const findMatch = intiveUrl.match(/www\.(.*?)\.(.*?)/) || intiveUrl.match(/https:\/\/(.*?)\.(.*?)$/);
	if (findMatch) {
		let platform = findMatch[1];
		platform = platform.replace(platform[0], platform[0].toUpperCase());
		return `${platform} Meeting`;
	}
	return 'Online Meeting';
};
