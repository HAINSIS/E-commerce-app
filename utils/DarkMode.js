import Cookies from 'js-cookie';
import { createContext, useReducer } from 'react';

export const DarkMode = createContext();
const initialState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    default:
      return state;
  }
}

export function DarkModeProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <DarkMode.Provider value={value}>{props.children}</DarkMode.Provider>;
}
