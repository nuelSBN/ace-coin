import React, { useReducer, useContext, createContext } from 'react';

const AppContext = createContext();

const initialState = {
  cardNumber: ['', '', '', ''],
  cvvNumber: '',
  expiryDateMonth: '',
  expiryDateYear: '',
  password: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_CARD_NUMBER':
      return { ...state, cardNumber: action.payload };
    case 'UPDATE_CVV_NUMBER':
      return { ...state, cvvNumber: action.payload };
    case 'UPDATE_EXPIRY_MONTH':
      return { ...state, expiryDateMonth: action.payload };
    case 'UPDATE_EXPIRY_YEAR':
      return { ...state, expiryDateYear: action.payload };
    case 'UPDATE_PASSWORD':
      return { ...state, password: action.payload };
    default:
      throw new Error('Unhandled action type');
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateCardNumber = (cardNumber) => {
    dispatch({ type: 'UPDATE_CARD_NUMBER', payload: cardNumber });
  };

  const updateCvvNumber = (cvvNumber) => {
    dispatch({ type: 'UPDATE_CVV_NUMBER', payload: cvvNumber });
  };

  const updateExpiryMonth = (expiryMonth) => {
    dispatch({ type: 'UPDATE_EXPIRY_MONTH', payload: expiryMonth });
  };

  const updateExpiryYear = (expiryYear) => {
    dispatch({ type: 'UPDATE_EXPIRY_YEAR', payload: expiryYear });
  };

  const updatePassword = (password) => {
    dispatch({ type: 'UPDATE_PASSWORD', payload: password });
  };

  return (
    <AppContext.Provider
      value={{
        formData: state,
        updateCardNumber,
        updateCvvNumber,
        updateExpiryMonth,
        updateExpiryYear,
        updatePassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
