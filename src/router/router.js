import Authors from "../pages/Authors/Authors";
import Musics from "../pages/Musics";
import Error from "../pages/Error";
import Author from "../pages/Authors/Author";
import Genres from "../pages/Genres/Genres";
import Genre from "../pages/Genres/Genre";
import Albums from "../pages/Albums/Albums";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import Profile from "../pages/Profile";

const publicRout = [
    { path: "/login", component: <Login />, exact: true },
    { path: "/registration", component: <Registration />, exact: true },
    { path: "*", component: <Error />, exact: true },
]

const privateRout = [
    {path: "/artists", component: <Authors />, exact: true},
    {path: "/artists/:artist", component: <Author />, exact: true},

    {path: "/genres", component: <Genres />, exact: true},
    {path: "/genres/:genre", component: <Genre />, exact: true},
    {path: "/genres/:genre/:artist", component: <Author />, exact: true},

    {path: "/albums", component: <Albums />, exact: true},
    {path: "/albums/:artist", component: <Author />, exact: true},

    {path: "/profile", component: <Profile />, exact: true},
    {path: "/musics", component: <Musics />, exact: true},
    {path: "/", component: <Musics />, exact: true},
    {path: "*", component: <Error />, exact: true},
];

export { publicRout, privateRout };
