import { Dispatch, FunctionComponent, ReactNode, SetStateAction, createContext, useContext, useState } from "react";


// Define the type for the context data
export type ApplicationContextData = {
    isWaitlistModalVisible: boolean;
    setIsWaitlistModalVisible: Dispatch<SetStateAction<boolean>>
};

// Create a context with the specified data type
const ApplicationContext = createContext<ApplicationContextData | undefined>(undefined);

// Create a provider component that takes children as props
type AppProviderProps = {
    children: ReactNode;
};

const AppProvider: FunctionComponent<AppProviderProps> = ({ children }) => {

    // Define state for waitlist visibility
    const [isWaitlistModalVisible, setIsWaitlistModalVisible] = useState(false);

    // Define the values you want to share
    const sharedData: ApplicationContextData = {
        isWaitlistModalVisible,
        setIsWaitlistModalVisible,
    };

    return (
        <ApplicationContext.Provider value={sharedData}>
            {children}
        </ApplicationContext.Provider>
    );
};

export { AppProvider, ApplicationContext };

export const useApplicationContext = () => {
    const context = useContext(ApplicationContext);
    if (!context) {
      throw new Error("useApplicationContext must be used within an AppProvider");
    }
    return context;
  };
  