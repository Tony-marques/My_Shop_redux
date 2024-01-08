import { useAdminContext } from "../../../../../context/AdminContext";
import Tabs from "./Tabs";
import Panels from "./Panels/Panels";

export default function Admin() {
   const { isCollapsed } = useAdminContext();

   return (
      <div className="admin">
         <Tabs />
         {isCollapsed && <Panels />}
      </div>
   );
}
