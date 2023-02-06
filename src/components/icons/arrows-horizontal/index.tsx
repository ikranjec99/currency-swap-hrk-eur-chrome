import { Icon } from "../../../types/icon";

import "./index.css"

export const ArrowsHorizontal = (props: Icon) => {
  const { size, onClick } = props;

  return (
    <img
      alt={"Horizontal arrows"}
      className={'arrows-horizontal'}
      src={"./arrows-horizontal.png"}
      height={size}
      width={size}
      onClick={onClick}
    />
  );
};
