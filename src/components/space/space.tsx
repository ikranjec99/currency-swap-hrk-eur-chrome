import { Props } from "./index";

export const Space = (props: Props) => {
    const { space } = props;

    return (
        <div style={{ margin: space }}></div>
    )
}