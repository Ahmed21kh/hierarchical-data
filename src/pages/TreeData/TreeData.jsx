import React, { useState } from "react";
import "./TreeData.css";

const TreeData = ({ node }) => {
  const [expanded, setExpanded] = useState(true);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
 
      // <ul>
        <li>
          <a onClick={handleToggle} href="#">{node.name}</a>

          {expanded &&
            node.children &&
            (<ul>
              {
                node.children.map((child) => (
                  // <ul>
                    <TreeData key={child.id} node={child} />
    
                  // </ul>
                ))
                
              }

            </ul>)
            }
          {/* <ul>
          <li><a href="#">Child</a>
            <ul>
              <li><a href="#">Grand Child</a></li>
            </ul>
          </li>
          <li class="three-step">
            <a href="#">Child</a>
            <ul>
              <li><a href="#">Grand Child</a></li>
              <li class="two-step"><a href="#">Grand Child</a>
                <ul>
                  <li><a href="#">Great Grand Child</a></li>
                  <li class="two-step"><a href="#">Great Grand Child</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul> */}
        </li>
      // </ul>
  );
};

export default TreeData;
