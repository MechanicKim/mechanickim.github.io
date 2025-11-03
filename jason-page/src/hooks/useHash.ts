import { useEffect, useState } from "react";

export default function useHash() {
  const [hash, setHash] = useState(location.hash.replace("#", ""));

  console.log(hash);

  useEffect(() => {
    window.onhashchange = () => {
      setHash(location.hash.replace("#", ""));
    };

    return () => {
      window.onhashchange = null;
    };
  }, []);

  return { hash };
}
