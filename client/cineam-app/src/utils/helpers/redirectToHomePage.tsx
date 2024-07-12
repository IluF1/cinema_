import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

interface IRedirectToHomeProps {
  children: JSX.Element;
}

export const RedirectToHome = ({ children }: IRedirectToHomeProps) => {
  const { auth } = useAuthStore();
  if (auth) {
    return <Navigate to='/' />;
  }

  return children;
};
