import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const DeleteAccount = () => {
  const { deleteProfile } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleDeleteUser = () => {
    deleteProfile()
      .then(() => {
        toast.success('Account Successfully Deleted')
      })
      .catch((e) => {
        setError(e.message);
        toast.error(error);
      });
  };

  return (
    <div>
      <h2 className="text-center mb-4">Delete Profile</h2>
      <Button variant="outline-danger" size="lg" className="shadow" onClick={handleDeleteUser}>Delete this Account</Button>
    </div>
  );
};

export default DeleteAccount;
