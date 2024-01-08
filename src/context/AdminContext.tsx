import { ReactElement, createContext, useContext } from "react";
import { useAdmin } from "../hooks/useAdmin";

const AdminContext = createContext<AdminContextInterface | null>(null);

interface AdminContextInterface {
   isModeAdmin: boolean;
   toggleAdminMode: () => void;
   isCollapsed: boolean;
   toggleAdminPanel: () => void;
   selectedTab: string;
   handleSelectedTab: (tabSelected: string) => void;
}

interface Props {
   children: ReactElement;
}

export const AdminContextProvider = ({ children }: Props) => {
   const {
      isModeAdmin,
      toggleAdminMode,
      isCollapsed,
      toggleAdminPanel,
      selectedTab,
      handleSelectedTab,
   } = useAdmin();

   const value: AdminContextInterface = {
      isModeAdmin,
      toggleAdminMode,
      isCollapsed,
      toggleAdminPanel,
      selectedTab,
      handleSelectedTab,
   };

   return (
      <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
   );
};

export const useAdminContext = () => {
   const context = useContext(AdminContext);

   if (!context) {
      throw new Error("AdminContext must be in AdminContextProvider");
   }

   return context;
};
