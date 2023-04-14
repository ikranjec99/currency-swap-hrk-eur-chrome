import { Props } from ".";

import "./index.css"

export const ArrowsHorizontal = (props: Props) => {
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
