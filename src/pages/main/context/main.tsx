import React from "react";

import { Currency } from "../../../types/currency";
import data from '../../../data/currencies.json';
import { MainPageContext } from ".";

const primaryCurrency: Currency = data[0];
const secondaryCurrency: Currency = data[1];

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
}

export interface Actions {
    switchCurrencies(): void;
}

export class MainPageContextProvider extends React.Component<Props, State> {
    switchCurrencies = () => {
        this.updateStore({ primaryCurrency: this.state.store.secondaryCurrency });
        this.updateStore({ secondaryCurrency: this.state.store.primaryCurrency });
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
            secondaryCurrency: secondaryCurrency
        },
        actions: {
            switchCurrencies: this.switchCurrencies
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