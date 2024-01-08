import { useState } from "react";
import { data2 } from "../data/data";
import { Phone } from "../interfaces/phone.interface";
import { deepCopy } from "../utils/array";

const EMPTY_PHONE = {
   title: "",
   imageSource: "",
   price: "",
   id: "",
   quantity: 0,
   isAvailable: true,
   isAdvertised: true,
};

export const usePhone = () => {
   const [phones, setPhones] = useState<Phone[]>(data2);

   const [phoneSelected, setPhoneSelected] = useState<Phone>(EMPTY_PHONE);
   const [isSelectedPhone, setIsSelectedPhone] = useState(false);

   const handleAddPhone = (phoneToAdd: Phone) => {
      setPhones([
         {
            ...phoneToAdd,
            id: Math.round(Math.random() * new Date().getTime()),
         },
         ...phones,
      ]);
   };

   const handleDeletePhone = (idToPhoneDelete?: string | number) => {
      const filteredPhones = phones.filter(
         (phone) => phone.id !== idToPhoneDelete
      );
      setPhones(filteredPhones);
      setIsSelectedPhone(false);
   };

   const handleEditPhone = (newPhone: Phone) => {
      const index = phones.findIndex((phone) => phone.id === newPhone.id);

      // Deep copy of phones
      const phonesCopy = deepCopy<Phone>(phones);
      phonesCopy[index] = newPhone;

      setPhones(phonesCopy);
   };

   const regeneratePhones = () => {
      setPhones(data2);
   };

   const handlePhoneSelected = (selectPhone: Phone) => {
      setPhoneSelected(selectPhone);
      setIsSelectedPhone(true);
   };

   return {
      phones,
      handleAddPhone,
      handleDeletePhone,
      regeneratePhones,
      phoneSelected,
      handlePhoneSelected,
      isSelectedPhone,
      setPhoneSelected,
      handleEditPhone,
   };
};
