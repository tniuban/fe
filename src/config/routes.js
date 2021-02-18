import Home from "../pages/home";
import Login from "../pages/login"

export const mainRouter = [
    {
        path: "/",
        exact: true,
        Component: Home,
    },
    {
        path: "/DangNhap",
        exact: false,
        Component: Login,
    },
]


export const adminRouter = [
    {
        path: "/",
        exact: true,
        Component: Home,
    },
    {
        path: "/DangNhap",
        exact: false,
        Component: Login,
    },
]