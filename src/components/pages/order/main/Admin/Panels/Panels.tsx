import React from "react";
import { useAdminContext } from "../../../../../../context/AdminContext";
import AddPhoneForm from "./AddPhoneForm";
import EditPhoneForm from "./EditPhoneForm";
import { usePhoneContext } from "../../../../../../context/PhoneContext";
import NoSelectedPhoneMessage from "./NoSelectedPhoneMessage";

export default function Panels() {
   const { selectedTab } = useAdminContext();
   const { isSelectedPhone } = usePhoneContext();

   return (
      <div className="panels">
         {selectedTab === "add" && <AddPhoneForm />}
         {selectedTab === "edit" && isSelectedPhone && <EditPhoneForm />}
         {selectedTab === "edit" && !isSelectedPhone && (
            <NoSelectedPhoneMessage />
         )}
      </div>
   );
}
