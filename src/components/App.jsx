import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Phonebook } from "./Phonebook/Phonebook";
import { store, persistor } from "Redux/store";


export const App = () => {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Phonebook />
    </PersistGate>
  </Provider>;
}
