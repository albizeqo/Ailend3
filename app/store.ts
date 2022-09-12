import { configureStore } from '@reduxjs/toolkit';
import accountSlice from '../features/account/slices/account-slice';

export const store = configureStore({
	reducer: {
		accountState: accountSlice,
	},
	devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
