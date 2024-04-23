export const extractAccessToken = () => {
	const session = localStorage.getItem('persist:session');
	if (session) {
		const token = JSON.parse(session).accessToken;
		return token.substring(1, token.length - 1);
	}
};
