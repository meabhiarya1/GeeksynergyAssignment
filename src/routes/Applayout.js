import React, { useEffect, useState } from "react";
import Authenticated from "./authenticated";
import Unauthenticated from "./unauthenticated";

const Applayout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
    }
    window.addEventListener("storage", function () {
      if (localStorage.getItem("user")) {
        setUser(JSON.parse(localStorage.getItem("user")));
      }else{
        setUser(null)
      }

    }, false);
  }, []);

  useEffect(() => {

  },[user])

  return <>{user ? <Authenticated /> : <Unauthenticated />}</>;
};

export default Applayout;
