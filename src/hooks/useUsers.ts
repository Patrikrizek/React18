import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      const { request, cancel } = userService.getAll<User>();
      request
        .then((response) => {
          setUsers(response.data);
          // proper way is setLoading(false) in .finally() only
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          // proper way is setLoading(false) in .finally() only
          setLoading(false);
        })
        .finally(() => {
          // This approach doesn't work in strict mode
          setLoading(false);
        });
  
      return () => cancel();
    }, []);

    return {users, error, isLoading, setUsers, setError };
}

export default useUsers;