import { Url } from "next/dist/shared/lib/router/router";


interface ReplyProps {
    ImagePath : Url;
    username : string;
    commentTitle : string;
    likes : number;
    replies : [];
    replyTitle?:string;
  }
  export type {ReplyProps};
