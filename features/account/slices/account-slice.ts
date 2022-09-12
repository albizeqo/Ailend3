import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AccountState {
	isLoggedIn: boolean;
	account: {
		customer_id: string;
		status: string;
		email: string;
		phone_number: string;
		first_name: string;
		last_name: string;
	};
}

const initialState: AccountState = {
	isLoggedIn: false,
	account: {
		customer_id: '',
		status: 'NOT_REGISTERED',
		email: '',
		phone_number: '',
		first_name: '',
		last_name: '',
	},
};

const accountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		loginAction: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.isLoggedIn = true;
		},
		setCustomerId: (state: AccountState, action: PayloadAction<string>) => {
			state.account.customer_id = action.payload;
		},
		setCustomerStatus: (state: AccountState, action: PayloadAction<string>) => {
			state.account.status = action.payload;
		},
		setCustomerEmail: (state: AccountState, action: PayloadAction<string>) => {
			state.account.email = action.payload;
		},
		setCustomerPhoneNumber: (state: AccountState, action: PayloadAction<string>) => {
			state.account.phone_number = action.payload;
		},
		setCustomerFirstName: (state: AccountState, action: PayloadAction<string>) => {
			state.account.first_name = action.payload;
		},
		setCustomerLastName: (state: AccountState, action: PayloadAction<string>) => {
			state.account.last_name = action.payload;
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.account = {
				customer_id: '',
				status: 'NOT_REGISTERED',
				email: '',
				phone_number: '',
				first_name: '',
				last_name: '',
			};
		},
	},
});

export const { loginAction, logout, setCustomerEmail, setCustomerFirstName, setCustomerId, setCustomerLastName, setCustomerPhoneNumber, setCustomerStatus } = accountSlice.actions;

export default accountSlice.reducer;
