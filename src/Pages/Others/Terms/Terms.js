import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Terms = () => {
    const {setRegister} = useContext(AuthContext);
  return (
    <div>
      <h2>Terms And Conditions</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        doloremque! Est ex nostrum vel necessitatibus excepturi repellendus.
        Perferendis accusantium vitae quam laudantium pariatur ut, distinctio
        iusto quisquam odio sed a incidunt aperiam consectetur, quas, soluta
        porro accusamus maiores sint eaque iure mollitia. Libero amet ipsa
        delectus deserunt doloremque! Commodi doloribus consequuntur deserunt,
        amet itaque rerum perspiciatis magnam illo saepe nobis in iure
        voluptatibus impedit eos. Optio aperiam quia iste nostrum dolorum, illum
        voluptates, eaque quisquam iure et laboriosam! Sapiente rem perspiciatis
        mollitia excepturi culpa nemo, quam dicta eaque doloremque consectetur
        ut fugit tempora. Voluptate sunt tenetur quae repellat officiis. Rerum
        dignissimos nihil nobis magnam, impedit asperiores animi beatae itaque
        unde earum perferendis, quam nesciunt enim iusto dolorem similique
        maiores nulla. Inventore sed, voluptates blanditiis vitae dignissimos
        veritatis fuga ad, suscipit nobis enim veniam quia cupiditate eligendi
        nihil quod distinctio magnam quasi? Nobis pariatur aspernatur vel ullam
        corrupti accusantium fugit corporis provident numquam, laudantium
        adipisci rem! Harum dignissimos quo consequuntur architecto. Provident
        aperiam maiores quas molestias ea? In, iste provident natus voluptates
        ratione necessitatibus aliquid illum error, exercitationem commodi eius
        ut obcaecati? Placeat velit tempora illum aut sequi error ad, sint
        quaerat possimus quis itaque eveniet eos voluptates! Corporis, ex
        exercitationem?
      </p>
      <Link to='/register'>Go back to registration</Link>
    </div>
  );
};

export default Terms;
