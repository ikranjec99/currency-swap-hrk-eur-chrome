import { Props } from "./index"
import { fetchCountryLogo } from "../../utils/fetch-logo"

import "./index.css"

export const CurrencyImage = (props: Props) => {
    const logo = fetchCountryLogo(props.countryCode);
    const { countryCode, size } = props;

    return (
        <img 
            alt={`Logo ${countryCode}`}
            className={'currency-image'}
            height={size}
            width={size}
            src={logo} 
        />
    )
}