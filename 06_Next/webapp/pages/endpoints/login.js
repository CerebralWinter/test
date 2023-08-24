import { useAuth0 } from '@auth0/nextjs-auth0';

export default function Login() {
    const { loginWithRedirect } = useAuth0();

    return (
        <button onClick={() => loginWithRedirect()}>
            Accedi
        </button>
    );
}