import { Component, useContext } from "react";

import CurrencyInput from "react-currency-input-field";
import { CurrencyBlock } from "../../components/currency-block/currency-block";
import { ArrowsHorizontal } from "../../components/icons/arrows-horizontal";
import { Space } from "../../components/space/space";
import { MainPageContext } from "./context";
import { MainPageContextProvider } from "./context/main";

import "./index.css";

interface Props {
  children?: any;
}

export class MainPage extends Component<Props> {
  render() {
    return (
      <MainPageContextProvider {...this.props}>
        <Main />
      </MainPageContextProvider>
    );
  }
}

const Main = () => {
  const {
    actions: { switchCurrencies, updateCurrencyNumericValue, convertNumericValue },
    store: { primaryCurrency, secondaryCurrency, currentNumericValue },
  } = useContext(MainPageContext);

  return (
    <>
      <div className={"main"}>
        <CurrencyBlock currency={primaryCurrency} />
        <Space space={10} />
        <ArrowsHorizontal size={20} onClick={switchCurrencies} />
        <Space space={10} />
        <CurrencyBlock currency={secondaryCurrency} />
      </div>
      <div className={"currency-input"}>
        <CurrencyInput
          className={'input-1'}
          placeholder="Please enter a number"
          defaultValue={1000}
          decimalsLimit={2}
          maxLength={8}
          value={currentNumericValue || 0}
          prefix={primaryCurrency.name}
          onValueChange={(value: any, name: any) => updateCurrencyNumericValue(value)}
        />
        <CurrencyInput
          className={'input-2'}
          placeholder="Please enter a number"
          defaultValue={1000}
          decimalsLimit={2}
          maxLength={8}
          value={convertNumericValue(currentNumericValue, secondaryCurrency)}
          prefix={secondaryCurrency.name}
          onValueChange={(value: any, name: any) => updateCurrencyNumericValue(value)}
        />
      </div>
    </>
  );
};
