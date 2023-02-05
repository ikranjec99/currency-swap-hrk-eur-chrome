import { Props } from './index';

import "./index.css"

export const CurrencyTitle = (props: Props) => {
    const { currencyName } = props;

    return (
        <span className={'currency-title'}>{currencyName}</span>
    )
}