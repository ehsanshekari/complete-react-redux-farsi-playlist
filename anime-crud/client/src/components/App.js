import Login from './auth/Login';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Register from './auth/Register';
import AnimeList from './anime/AnimeList';
import AnimeDetail from './anime/AnimeDetail';
import AnimeCreate from './anime/AnimeCreate';
import AnimeEdit from './anime/AnimeEdit';
import Header from './Header';
import PrivateRoute from './PrivateRoute';
import { useEffect } from 'react';
import { initializeAuth } from '../store/features/authSlice';
import { useDispatch } from 'react-redux';

const AuthenticatedRoutes = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<AuthenticatedRoutes />}>
          <Route
            path="/animes"
            element={<PrivateRoute element={<AnimeList />} />}
          />
          <Route
            path="/animes/:id"
            element={<PrivateRoute element={<AnimeDetail />} />}
          />
          <Route
            path="/create"
            element={<PrivateRoute element={<AnimeCreate />} />}
          />
          <Route
            path="/edit/:id"
            element={<PrivateRoute element={<AnimeEdit />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
