import {createContext, useEffect, useState} from "react";
import {ConfigurationDataFull} from "../../models/configuration-data";
import {ConfigurationService} from "../../services/configuration.service";

export interface AppProviderProps{
    configuration?: ConfigurationDataFull,
    setConfigurationData : () => void

}
export const AppProviderContext=createContext<AppProviderProps>({
        configuration : undefined,
        setConfigurationData : () => {}
    }
);

export function AppProvider(props:any){

    const [configuration, setConfiguration] = useState<ConfigurationDataFull | undefined>( undefined);


    const configurationService = new ConfigurationService("http://localhost:1337");

    const setConfigurationData = () => {
        configurationService.getSingle().then((res) => {
            setConfiguration(res);
            }
        );
    }

    return(
        <AppProviderContext.Provider value={{
            configuration, setConfigurationData}}>
            {props.children}
        </AppProviderContext.Provider>
    );

}