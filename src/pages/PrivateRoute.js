import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../context/user.context";
import Loader from "../components/Loader"

const PrivateRoute = () => {
    const [loading, setLoading] = useState(true);
    // Fetching the user from the user context.
    const { user, fetchUser } = useContext(UserContext);
    const location = useLocation();
    const redirectLoginUrl = `/login?redirectTo=${encodeURI(location.pathname)}`;

    async function getData() {
        await fetchUser();
        setLoading(false);
    }

    useEffect(() => {
        getData(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // If the user is not logged in we are redirecting them
    // to the login page. Otherwise we are letting them to
    // continue to the page as per the URL using <Outlet />.
    if (loading) return <Loader />
    return (
        user ? <Outlet /> : <Navigate to={redirectLoginUrl} />
    );
}

export default PrivateRoute;