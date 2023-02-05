import { CurrencyBlock } from "../../components/currency-block/currency-block";
import { Currency } from "../../types/currency";

const currencyHRK: Currency = { shortCode: 'hr', name: "HRK" }
const currencyEUR: Currency = { shortCode: "eur", name: "EUR" }

export const Main = () => {
  return (
    <>
      <CurrencyBlock currency={currencyHRK} />
      <CurrencyBlock currency={currencyEUR} />
    </>
  )
};
