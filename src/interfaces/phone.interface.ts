export interface Phone {
   id: number | string;
   imageSource: string;
   title: string;
   price: number | string;
   quantity?: number;
   isAvailable?: boolean;
   isAdvertised?: boolean;
}
