import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };

    default:
      throw new Error("Unknown action");
  }
}

const FAKE_STUDENT = {
  name: "Amina Yusuf",
  studentId: "KASU12345",
  email: "amina.yusuf@kasu.edu.ng",
  password: "securepassword",
  avatar: "https://i.pravatar.cc/100?u=kasu_student",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(id, password) {
    if (id === FAKE_STUDENT.id && password === FAKE_STUDENT.password)
      dispatch({ type: "login", payload: FAKE_STUDENT });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={(user, isAuthenticated, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
}

export { AuthProvider, useAuth };
