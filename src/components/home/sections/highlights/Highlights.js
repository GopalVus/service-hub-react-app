import React from "react";
import "./Highlights.scss";
import Highlight from "./highlight/Highlight";
import IconEmployee from "../../../../assets/images/icon-employee.png";
import IconClient from "../../../../assets/images/icon-client.png";
import IconMap from "../../../../assets/images/icon-map.png";
import IconBranch from "../../../../assets/images/icon-branche.png";
import IconRevenue from "../../../../assets/images/icon-revenue.png";
import IconProduct from "../../../../assets/images/icon-product.png";

const Highlights = (props) => {
  return (
    <div className="highlights">
      <Highlight icon={IconEmployee} title="2,23,234" description="Employees" />
      <Highlight icon={IconClient} title="200+" description="Clients" />
      <Highlight icon={IconMap} title="100+" description="Countries" />
      <Highlight icon={IconBranch} title="2,000+" description="Branches" />
      <Highlight icon={IconProduct} title="1,000+" description="Products" />
      <Highlight icon={IconRevenue} title="$200+ Bn" description="Revenue" />
    </div>
  );
};

export default Highlights;
