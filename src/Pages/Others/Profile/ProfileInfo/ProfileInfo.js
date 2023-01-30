import React, { useContext } from "react";
import { Form, Image } from "react-bootstrap";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const ProfileInfo = () => {
  const { user, setLoading } = useContext(AuthContext);
  setLoading(true);
  return (
    <div>
      <h2 className="text-center mb-5">Profile Info</h2>
      <div className="row">
        <div className="col col-lg-4">
          <Image
            style={{ height: "100px" }}
            className="rounded-circle"
            src={user?.photoURL}
          ></Image>
        </div>
        <div className="col col-lg-8">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={user?.email}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={user?.displayName}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Email Verified"
                readOnly
                checked
              />
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
