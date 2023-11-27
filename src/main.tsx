import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-supabase'
import { supabase } from './supabase.ts';
import { AuthProvider } from './providers/AuthProvider.tsx';
import Routers from './Routers.tsx';

ReactDOM.render(
    <Provider value={supabase}>
        <AuthProvider>
            <Routers />
        </AuthProvider>
    </Provider>
    , document.getElementById('root'));
