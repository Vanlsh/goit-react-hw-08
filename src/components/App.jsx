import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
