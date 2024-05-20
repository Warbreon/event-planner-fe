import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserInfoState {
    userFirstName: string;
    userImageUrl: string;
    notificationCount: number;
}

const initialState: UserInfoState = {
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
        updateNotificationCount(state, action: PayloadAction<number>) {
            return {
                ...state,
                notificationCount: action.payload
            }  
        },
        removeUserInfo() {
            return {
                ...initialState
            }
        }
    },
});

export const { setUserInfo, updateNotificationCount, removeUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;