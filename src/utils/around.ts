export const formatPrice = (priceToFormat: number | string) => {
   if (typeof priceToFormat === "string")
      priceToFormat = parseFloat(priceToFormat.replace(",", "."));

   const formattedPrice = new Intl.NumberFormat("FR-fr", {
      style: "currency",
      currency: "EUR",
   }).format(priceToFormat);

   return formattedPrice;
   //  return newPrice;
};