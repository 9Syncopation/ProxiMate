import React, { useContext } from "react";
import { firebaseAuth } from "../provider/AuthProvider";

export default function Signout() {
  const { handleSignout } = useContext(firebaseAuth);

  return (
    <div>
      login successful!!!!!!
      <button onClick={handleSignout}>sign out </button>
    </div>
  );
}
