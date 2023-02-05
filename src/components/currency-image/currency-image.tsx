import { Props } from "./index"
import { fetchCountryLogo } from "../../utils/fetch-logo"

import "./index.css"

export const CurrencyImage = (props: Props) => {
    const logo = fetchCountryLogo(props.shortCode);
    const { shortCode, size } = props;

    return (
        <img 
            alt={`Logo ${shortCode}`}
            className={'currency-image'}
            height={size}
            width={size}
            src={logo} 
        />
    )
}