import React from "react";

import { Currency } from "../../../types/ui";
import { MainPageContext } from ".";

interface Props {
    children?: any;
}

export interface State {
    actions: Actions;
    store: Store;
}

export interface Store {
    convertedNumericValue: number;
    currentNumericValue: number;
    fixedRate: number; // 7.53450 HRK = 1 EUR
    primaryCurrency: Currency;
    secondaryCurrency: Currency;
}

export interface Actions {
    switchCurrencies(): void;
    updateCurrencyNumericValue(value: number): void;
    convertNumericValue(currentNumericValue: number, desiredCurrency: Currency): number;
}

export class MainPageContextProvider extends React.Component<Props, State> {
    readonly fixedRate: number = 7.53450;

    readonly primaryCurrency: Currency = {
        name: 'HRK',
        shortCode: "hr"
    }

    readonly secondaryCurrency: Currency = {
        name: "EUR",
        shortCode: "eur"
    }

    switchCurrencies = () => {
        this.updateStore({ primaryCurrency: this.state.store.secondaryCurrency });
        this.updateStore({ secondaryCurrency: this.state.store.primaryCurrency });
    }

    updateCurrencyNumericValue = async (value: number) => {
        this.updateStore({ currentNumericValue: value });
    }

    convertNumericValue = (currentNumericValue: number, desiredCurrency: Currency) => {
        // EUR TO HRK
        if (desiredCurrency.name === this.primaryCurrency.name) {
            return Number((currentNumericValue * this.fixedRate).toFixed(2));
        }

        // HRK TO EUR
        if (desiredCurrency.name === this.secondaryCurrency.name) {
            return Number((currentNumericValue / this.fixedRate).toFixed(2));
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
            convertedNumericValue: 0,
            currentNumericValue: 0,
            fixedRate: this.fixedRate,
            primaryCurrency: this.primaryCurrency,
            secondaryCurrency: this.secondaryCurrency,
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