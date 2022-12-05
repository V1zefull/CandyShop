// import { Routes, Route } from 'react-router-dom'
// import Home from "../pages/Home";
// import Register from "../pages/Register";
// import Login from "../pages/Login";
// import { AppContext } from './AppContext.js'
// import { useContext } from 'react'
//
//
// const publicRoutes = [
//     {path: '/', Component: Home},
//     {path: '/login', Component: Login},
//     {path: '/signup', Component: Register}
// ]
//
// const AppRouter = () => {
//     const { user } = useContext(AppContext)
//     return (
//         <Routes>
//             {publicRoutes.map(({path, Component}) =>
//                 <Route key={path} path={path} element={<Component />} />
//             )}
//         </Routes>
//     )
// }
//
// export default AppRouter