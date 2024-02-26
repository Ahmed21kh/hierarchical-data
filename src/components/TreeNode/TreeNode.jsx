import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./TreeNode.css";
import "../Tree/Tree.css";
const TreeNode = ({ node, parent }) => {
  const [expanded, setExpanded] = useState(false);
  const parentRef = useRef(null);
  const lastChildRef = useRef(null);
  const [heightDefference, setheightDefference] = useState(0);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const changeHeight = (id) => {
    let element = window.document.getElementById(id);
    console.log("element", element?.offsetHeight);
    console.log(
      "elementChild",
      element?.childNodes[element?.childNodes?.length - 1]
    );
    let childs =
      element?.childNodes[element?.childNodes?.length - 1].childNodes;
    let lastChild = childs[childs?.length - 1];
    console.log(lastChild?.offsetHeight);
    const result = (
      ((element?.offsetHeight - lastChild?.offsetHeight) /
        element?.offsetHeight) *
      100
    ).toFixed(0);
    const rightBorder = window.document.querySelectorAll(
      `.right${id?.replaceAll(" ", "")}`
    );
    var index = 0,
      length = rightBorder.length;
    for (; index < length; index++) {
      console.log(rightBorder[index]);
      rightBorder[index].style.height = result + "%";
    }
    console.log(`${id}`, rightBorder);
    console.log("result", result + "%");
    setheightDefference(parseInt(Math.abs(result)) + "%");
  };
  // useEffect(() => {
  // //  console.log(heightDefference);
  // // changeHeight(node.name)
  // }, [heightDefference])

  // useEffect(() => {
  //   if (parentRef.current && lastChildRef.current && parent?.current) {
  //     const parentHeight = parentRef.current.offsetHeight;
  //     const lastChildHeight = lastChildRef.current.offsetHeight;
  //     const lastChildOffsetTop = lastChildRef.current.offsetTop;
  //     console.log(" div Height",parent.current?.offsetHeight);
  //     console.log("parentTop",parentRef.current.scrollTop);
  //     console.log("parentNodes",parentRef.current.childNodes.length);
  //     console.log("child",(((parent?.current?.offsetHeight -lastChildRef.current?.offsetHeight) / parent?.current?.offsetHeight)*100));
  //     console.log("childHeight",lastChildRef.current?.offsetHeight);
  //     // console.log("child",lastChildRef.current.children);
  //     // const heightDifference = parentHeight - (lastChildOffsetTop + lastChildHeight);
  //     // console.log("lastChild",(lastChildHeight*100)/100);
  //     const heightDifference = parentRef.current?.children[0]?.offsetParent?.offsetHeight
  //     // // console.log(heightDifference);
  //     setheightDefference((((parent?.current?.offsetHeight -(lastChildRef.current?.offsetHeight)) / parent?.current?.offsetHeight)*100).toFixed(0))
  //     console.log('Height difference:', heightDefference);
  //   }
  // }, [ parent , expanded])

  return (
    <li
      ref={parentRef}
      id={node.name}
      className={` z-10 w-full flex flex-col gap-0 relative grow-0 items-start justify-center transition-all !duration-500 `}
    >
      {node.children && expanded && (
        <div
          className={` absolute top-[0] left-auto w-[2px] h-full -z-[1] bg-[#60A5FA]`}
        />
      )}

      <div
        ref={lastChildRef}
        onClick={handleToggle}
        className={`hover:bg-blue-500 group hover:text-white bg-[#87CEEB] w-fit  rounded-xl px-3 py-1 -mr-2  grow-0 font-bold -mt-4 cursor-pointer transition-all !duration-200 flex items-center gap-2`}
      >
        {node.children ? (
          !expanded ? (
            <span className="  text-[#616266] font-extrabold text-3xl group-hover:text-[#fff] transition-all !duration-300 flex items-center ">
              +
            </span>
          ) : (
            <span className="text-[#616266] font-bold text-4xl group-hover:text-[#fff] transition-all !duration-300 flex items-center">
              -
            </span>
          )
        ) : (
          ""
        )}
        <span className=" whitespace-nowrap">
          {node.name == "home" ? "/" : node.name}
        </span>
        {/* {expanded && node.children &&<hr className=' bg-black h-[2px] w-full' />} */}
      </div>
      {expanded && node.children && (
        <ul className=" flex flex-col relative transition-all  !duration-300 mt-6 ">
          {node.children.map((child) => (
            <li
              key={child.id}
              className={`flex items-start mt-10 border-r-2 border-[#60A5FA]  last:border-background  gap-0`}
            >
              <div className=" w-[50px] h-[2px]   bg-[#60A5FA]" />

              <TreeNode key={child.id} node={child} />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default React.memo(TreeNode);
