import { Props } from "./index";
import { CurrencyImage } from "../currency-image/currency-image";
import { CurrencyTitle } from "../currency-title/currency-title";

import "./index.css";

export const CurrencyBlock = (props: Props) => {
  const { countryCode, name } = props.currency;

  return (
    <>
      <div className={"currency-block"}>
        <CurrencyImage countryCode={countryCode} size={40} />
        <CurrencyTitle currencyName={name} />
      </div>
    </>
  );
};
