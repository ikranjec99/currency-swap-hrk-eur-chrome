import { useState } from 'react';
import { CurrencyBlock } from "../../components/currency-block/currency-block";
import { ArrowsHorizontal } from "../../components/icons/arrows-horizontal";
import { Space } from "../../components/space/space";
import { Currency } from "../../types/currency";

import "./index.css"

const currencyHRK: Currency = { shortCode: 'hr', name: "HRK" }
const currencyEUR: Currency = { shortCode: "eur", name: "EUR" }

export const Main = () => {
  const [primaryCurrency, setPrimaryCurrency] = useState<Currency>(currencyEUR);
  const [secondaryCurrency, setSecondaryCurrency] = useState<Currency>(currencyHRK);

  const switchCurrencies = () => {
    const primary = primaryCurrency;
    const secondary = secondaryCurrency;
    setSecondaryCurrency(primaryCurrency);
    setPrimaryCurrency(secondaryCurrency);
  }

  return (
    <div className={'main'}>
      <CurrencyBlock currency={primaryCurrency} />
      <Space space={10} />
      <ArrowsHorizontal onClick={switchCurrencies} size={25} />
      <Space space={10} />
      <CurrencyBlock currency={secondaryCurrency} />
    </div>
  )
};
