import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./Map"), 
{ ssr: false }
);


export default function Map() {
  const [render, setRender] = useState(false);
    useEffect(() => {
      setRender(true);
    }, []);
    
    return (
      <div>
       {render && <DynamicMap />}  
      </div>
    );
  }