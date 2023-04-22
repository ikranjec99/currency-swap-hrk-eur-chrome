import { Props } from "./index"
import { fetchCountryLogo } from "../../utils/fetch-logo"

import "./index.css"

export const CurrencyImage = (props: Props) => {
    const { shortCode, size } = props;
    
    const logo = fetchCountryLogo(shortCode);

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