import React from "react";
import TextInput from "../../../utils/input/text-input/TextInput";
import "./Cta.scss";
import Button from "../../../utils/button/Button";

const Cta = () => {
  return (
    <div className="cta-container">
      {/* <button type="button" class="btn btn-primary btn-lg">
        Large button
      </button>
      <button type="button" class="btn btn-secondary btn-lg">
        Large button
      </button> */}

      <p>Subscribe to get updates on our products and service..</p>

      <div>
        <TextInput
          placeholder="Email Id"
          width={20}
          style={{ marginBottom: "0", marginTop: "0", width: "20rem" }}
        />
      </div>

      <div>
        <Button type="primary" text="Subscribe" />
      </div>
    </div>
  );
};

export default Cta;
