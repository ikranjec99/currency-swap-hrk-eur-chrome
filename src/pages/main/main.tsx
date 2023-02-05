import { CurrencyBlock } from "../../components/currency-block/currency-block";
import { Currency } from "../../types/currency";

const currency: Currency = { countryCode: 'hr', name: "HRK" }

export const Main = () => {
  return <CurrencyBlock currency={currency} />;
};
