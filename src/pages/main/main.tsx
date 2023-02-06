import { Component, useContext } from "react";
import { CurrencyBlock } from "../../components/currency-block/currency-block";
import { CurrencyInput } from "../../components/currency-input/curency-input";
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
    )
  }
}

const Main = () => {
  const {
    actions: { switchCurrencies },
    store: { primaryCurrency, secondaryCurrency }
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
      <div className={'currency-input'}>
        <CurrencyInput />
      </div>
    </>
  );
};
