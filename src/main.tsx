import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-supabase'
import { supabase } from './supabase.ts';

ReactDOM.render(
    <Provider value={supabase}>
        <App />
    </Provider>
    , document.getElementById('root'));
