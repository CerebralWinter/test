import { useAuth0 } from '@auth0/nextjs-auth0';

export default function Logout() {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
        </button>
    );
}