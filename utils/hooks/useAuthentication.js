import react from "react";
import { auth, onAuthStateChanged, User } from "firebase/auth";

// const auth = getAuth();

export function useAuthentication() {
  // const [user, setUser] = react.useState<User>();
  const [user, setUser] = react.useState(user);
  react.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatuChanged;
  }, []);

  return {
    user,
  };
}
