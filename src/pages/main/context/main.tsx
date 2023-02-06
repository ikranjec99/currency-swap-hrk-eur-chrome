import React from "react";

import { Currency } from "../../../types/currency";
import data from '../../../data/currencies.json';
import { MainPageContext } from ".";

const primaryCurrency: Currency = data[0];
const secondaryCurrency: Currency = data[1];
const fixedEurToHrk = 7.53450;

interface Props {
    children?: any;
}

export interface State {
    actions: Actions;
    store: Store;
}

export interface Store {
    primaryCurrency: Currency;
    secondaryCurrency: Currency;
    currentNumericValue: number;
    convertedNumericValue: number;
}

export interface Actions {
    switchCurrencies(): void;
    updateCurrencyNumericValue(value: number): void;
    convertNumericValue(currentNumericValue: number, desiredCurrency: Currency): number;
}

export class MainPageContextProvider extends React.Component<Props, State> {
    switchCurrencies = () => {
        this.updateStore({ primaryCurrency: this.state.store.secondaryCurrency });
        this.updateStore({ secondaryCurrency: this.state.store.primaryCurrency });
    }

    updateCurrencyNumericValue = async (value: number) => {
        this.updateStore({ currentNumericValue: value });
    }

    convertNumericValue = (currentNumericValue: number, desiredCurrency: Currency) => {
        // EUR TO HRK
        if (desiredCurrency.name === primaryCurrency.name) {
            return Number((currentNumericValue * fixedEurToHrk).toFixed(2));
        }

        // HRK TO EUR
        if (desiredCurrency.name === secondaryCurrency.name) {
            return Number((currentNumericValue / fixedEurToHrk).toFixed(2));
        }

        return 0;
    }

    updateStore = (changed: Partial<Store>, callback?: () => void) => {
        this.setState(prevState => ({ store: {
            ...prevState.store,
            ...changed
        } }), callback);
    }

    state: State = {
        store: {
            primaryCurrency: primaryCurrency,
            secondaryCurrency: secondaryCurrency,
            currentNumericValue: 0,
            convertedNumericValue: 0
        },
        actions: {
            switchCurrencies: this.switchCurrencies,
            updateCurrencyNumericValue: this.updateCurrencyNumericValue,
            convertNumericValue: this.convertNumericValue
        }
    };

    render() {
        return (
            <MainPageContext.Provider value={this.state}>
                {this.props.children}
            </MainPageContext.Provider>
        )
    }
}