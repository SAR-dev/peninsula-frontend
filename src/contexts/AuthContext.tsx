import { Session, User } from '@supabase/supabase-js';
import { createContext } from 'react';

export interface AuthStateInterface {
    session?: Session,
    user?: User
}

export const initialAuthState = { session: undefined, user: undefined }
export const AuthContext = createContext<AuthStateInterface>(initialAuthState)