import { BASE_APP_URL } from "../constants/ApiConfig";
import ROUTES from "../routes/Routes";

export const getResetLinkBase = (): string => {
    const resetPasswordPath = ROUTES.RESET_PASSWORD.replace('/:token', '');
    return `${BASE_APP_URL}${resetPasswordPath}`;
};