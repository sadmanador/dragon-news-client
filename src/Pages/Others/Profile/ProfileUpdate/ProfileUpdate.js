import React, { useContext, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const ProfileUpdate = () => {
  const [error, setError] = useState(null);
  const { user, updateDisplayName } = useContext(AuthContext);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;

    updateDisplayName(name, photoUrl)
      .then(() => {
        toast.success("Your Name and Image changed");
        setError("");
        form.reset();
      })
      .catch((e) => {
        setError(e.message);
        toast.error(error);
      });
  };

  return (
    <div>
      <h2 className="mb-5 text-center">update profile</h2>
      <div className="row">
        <div className="col col-lg-4">
          <Image
            style={{ height: "100px" }}
            className="rounded-circle"
            src={user?.photoURL}
          ></Image>
        </div>
        <div className="col col-lg-8">
          <Form onSubmit={handleUpdateProfile}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                name="photoUrl"
                placeholder="Your new Photo URL"
              />
            </Form.Group>
            <Button type="submit">Update</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
