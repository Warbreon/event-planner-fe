import React, { createContext, useState, useContext } from 'react';

interface UserInputContextProps {
	userInput: string;
	setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

const UserInputContext = createContext<UserInputContextProps | undefined>(undefined);

interface UserInputProviderProps {
	children: React.ReactNode;
}

export const UserInputProvider: React.FC<UserInputProviderProps> = ({ children }) => {
	const [userInput, setUserInput] = useState('');

	return <UserInputContext.Provider value={{ userInput, setUserInput }}>{children}</UserInputContext.Provider>;
};

export const useUserInput = () => {
	const context = useContext(UserInputContext);
	if (!context) {
		throw new Error('useUserInput must be used within a UserInputProvider');
	}
	return context;
};
