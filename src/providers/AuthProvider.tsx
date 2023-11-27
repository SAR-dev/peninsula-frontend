import { AuthContext, AuthStateInterface, initialAuthState } from '@src/contexts/AuthContext'
import { Session } from '@supabase/supabase-js'
import { ReactNode, useEffect, useState } from 'react';
import { useAuthStateChange, useClient } from 'react-supabase'

export function AuthProvider({ children }: { children: ReactNode }) {
    const client = useClient()
    const [state, setState] = useState<AuthStateInterface>(initialAuthState)

    useEffect(() => {
        const session = client.auth.session()
        setState({ session, user: session?.user ?? null })
    }, [])

    useAuthStateChange((event: unknown, session: Session) => {
        console.log(`Supabase auth event: ${event}`, session)
        setState({ session, user: session?.user ?? undefined })
    })

    return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}