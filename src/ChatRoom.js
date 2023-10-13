import { useState,useEffect } from "react";

export default function ChatRoom(){
    useEffect(()=>{
        const connection = createConnection();
        connection.connect();
        return ()=>connection.disconnect();
    },[]);
    return <>
        <h1>Welcome</h1>
    </>
}

function createConnection(){
    return{
        connect(){
            console.log('connecting');
        },
        disconnect(){
            console.log('disconnect');
        }
    }
}