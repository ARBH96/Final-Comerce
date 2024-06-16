import { createContext, useState } from "react";
export const SearchContext =createContext();
export const SearchProvider = ({Children}) =>{
    const [searchQuery, setSearchQuery] = useState('');

    return(
        <SearchContext.Provider value={{searchQuery,setSearchQuery}}>
            {Children}
        </SearchContext.Provider>
    );
};