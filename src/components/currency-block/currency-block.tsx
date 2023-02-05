import { Props } from "./index";
import { CurrencyImage } from "../currency-image/currency-image";
import { CurrencyTitle } from "../currency-title/currency-title";

import "./index.css";

export const CurrencyBlock = (props: Props) => {
  const { shortCode, name } = props.currency;

  return (
    <>
      <div className={"currency-block"}>
        <CurrencyImage shortCode={shortCode} size={40} />
        <CurrencyTitle currencyName={name} />
      </div>
    </>
  );
};
