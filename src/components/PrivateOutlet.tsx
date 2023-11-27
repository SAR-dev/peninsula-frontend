import { useAuth } from '@src/hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateOutlet() {
    const auth = useAuth();
    return auth.session ? <Outlet /> : <Navigate to="/login" />;
}