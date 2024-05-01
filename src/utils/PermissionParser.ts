export enum UserRoles {
	SYSTEM_ADMIN = 'SYSTEM_ADMIN',
	EVENT_ADMIN = 'EVENT_ADMIN',
	USER = 'USER',
}

export const parseRoleToPermission = (role: UserRoles): string | null => {
	switch (role) {
		case UserRoles.SYSTEM_ADMIN:
			return 'System administrator';
		case UserRoles.EVENT_ADMIN:
			return 'Event administrator';
		case UserRoles.USER:
			return 'User';
	}
};
