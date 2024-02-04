import { useEffect, useState } from "react";


export default function Home() {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetch('https://api.github.com/users/atultrp')
      .then(response => response.json())
      .then(data => setUserData(data));
  }, []);

  console.log("heya", userData)

  return (
    <>
    
    </>
  );
}
