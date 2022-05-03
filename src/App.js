import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import "./App.css";
import Forms from "./components/Forms/Forms";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Hompage";
import AdministerVaccination from "./components/AdministerVaccination/AdministerVaccination";

import patientReducer from './store/reducers/Patient';
import vaccineReducer from './store/reducers/Vaccine';

const rootReducer = combineReducers({
  patient: patientReducer,
  vaccine : vaccineReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/administerVaccination" element={<AdministerVaccination />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
