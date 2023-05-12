import React from "react";
import { DUMMY_SUBHEADER } from "../../data/dataSubHeader";
function SubHeader() {
  return (
    <>
      <span style={{ fontWeight: "bold", marginBottom: 3 }}>Header</span>
      {DUMMY_SUBHEADER?.map((sub) => (
        <span style={{ marginBottom: 7, fontSize: 14 }} key={sub.id}>
          {sub?.name}
        </span>
      ))}
    </>
  );
}

export default SubHeader;
