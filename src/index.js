import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import {store} from "./reducers"
import {Provider} from "react-redux";
import TrainerStore from "./store/TrainerStore";
import ServiceStore from "./store/ServiceStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        trainer: new TrainerStore(),
        service: new ServiceStore()
    }}>
        <Provider store={store}>
            <App />
        </Provider>
    </Context.Provider>

);



