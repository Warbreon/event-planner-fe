import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserInfoState {
    userId: number;
    userFirstName: string;
    userImageUrl: string;
    notificationCount: number;
}

const initialState: UserInfoState = {
    userId: 0,
    userFirstName: '',
    userImageUrl: '',
    notificationCount: 0,
};

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo(state, action: PayloadAction<UserInfoState>) {
            return {
                ...state,
                ...action.payload 
            };
        },
        removeUserInfo() {
            return {
                ...initialState
            }
        }
    },
});

export const { setUserInfo, removeUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;