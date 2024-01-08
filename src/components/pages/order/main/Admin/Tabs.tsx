import Tab from "../../../../reusable-ui/Tab";
import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useAdminContext } from "../../../../../context/AdminContext";
import { theme } from "../../../../../theme";

export default function Tabs() {
   const { toggleAdminPanel, isCollapsed, handleSelectedTab, selectedTab } =
      useAdminContext();

   const tabsConfig = [
      {
         index: 1,
         Icon: isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
         onClick: toggleAdminPanel,
         className: isCollapsed ? "" : "active",
      },
      {
         index: 2,
         Icon: <AiOutlinePlus />,
         onClick: () => handleSelectedTab("add"),
         className: selectedTab === "add" ? "active" : "",
         label: "Ajouter un téléphone",
      },
      {
         index: 3,
         Icon: <MdModeEditOutline />,
         onClick: () => handleSelectedTab("edit"),
         className: selectedTab === "edit" ? "active" : "",
         label: "Modifier un téléphone",
      },
   ];

   return (
      <TabsStyled>
         {tabsConfig.map(({ Icon, onClick, className, label, index }) => {
            return (
               <Tab
                  Icon={Icon}
                  className={className}
                  label={label}
                  key={index}
                  onClick={onClick}
               />
            );
         })}
      </TabsStyled>
   );
}

const TabsStyled = styled.div`
   display: flex;
   gap: 1px;
   height: 44px;
   margin-left: 70px;

   .active {
      background-color: ${theme.colors.primary};
      /* background-color: ${theme.colors.background_dark}; */
      color: ${theme.colors.white};
      border-bottom: 1px solid ${theme.colors.background_dark};
   }
`;
