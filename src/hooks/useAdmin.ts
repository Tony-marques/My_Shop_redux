import { useState } from "react";
import { toast } from "react-toastify";

export const useAdmin = () => {
   const [isModeAdmin, setIsModeAdmin] = useState<boolean>(true);
   const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
   const [selectedTab, setSelectedTab] = useState<string>("add");

   const toggleAdminMode = () => {
      setIsModeAdmin(!isModeAdmin);
      if (!isModeAdmin) {
         toast.info("Mode admin activé");
      }
   };

   const toggleAdminPanel = () => {
      setIsCollapsed(!isCollapsed);
   };

   const handleSelectedTab = (tabSelected: string) => {
      setSelectedTab(tabSelected);
      setIsCollapsed(true);
   };

   return {
      isModeAdmin,
      toggleAdminMode,
      isCollapsed,
      toggleAdminPanel,
      selectedTab,
      handleSelectedTab,
   };
};
