import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./Map"), 
{ ssr: false }
);


export default function Map() {
    return (
      <div>
        <DynamicMap />
      </div>
    );
  }