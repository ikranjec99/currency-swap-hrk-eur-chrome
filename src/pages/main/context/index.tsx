import React from "react";

import { State as MainPageState } from './main';

const MainPageContext = React.createContext({} as MainPageState);

export { MainPageContext };