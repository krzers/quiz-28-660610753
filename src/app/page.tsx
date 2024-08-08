import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";


export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <div>
        <PostOwnner/>
        </div>
        {/* Comment Example */}
        <div>
        <Comment ImagePath={""} username={""} commentTitle={""} likes={0} replies={[]}/>
        </div>

        {/* Reply Example */}
        <div>
          <Reply ImagePath={""} username={""} commentTitle={""} likes={0} replies={[]}/>
        </div>

        {/* map-loop render Comment component here */}
        
      </div>
    </div>
  );
}
