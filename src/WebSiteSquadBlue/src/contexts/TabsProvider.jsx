import {createContext, useState} from 'react';

export const TabsContext = createContext();

const TabsProvider = ({children}) => {

    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <TabsContext.Provider value={[selectedTab, setSelectedTab]}>
            {children}
        </TabsContext.Provider>
    );
};

export default TabsProvider;
