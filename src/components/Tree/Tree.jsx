import React, { useEffect, useRef, lazy } from "react";
const TreeNode = lazy(() => import("../TreeNode/TreeNode"));
import "./Tree.css";
const Tree = ({ data }) => {
  const parent = useRef(null);
  useEffect(() => {
    // console.log(data);
    console.log(parent);
  }, [parent]);
  return (
    <div className=" py-10 ">
      <ul ref={parent} className=" relative">
        <hr className=" bg-[#60A5FA] h-[3px] w-[50px] absolute top-0 -right-[50px]" />
        {data.map((root) => (
          <TreeNode key={root.id} node={root} parent={parent} />
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Tree);
