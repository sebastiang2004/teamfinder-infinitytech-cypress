import { useState, useEffect } from "react";
import { decodeToken } from "react-jwt";

export function useTokenDecoding() {
  const [decodedToken, setDecodedToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = decodeToken(token);
      setDecodedToken(decoded);
    }
  }, []);

  return decodedToken;
}
