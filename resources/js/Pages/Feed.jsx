import React from "react";
import { Link, Head } from "@inertiajs/react";
import StoryHeader from "@/Layouts/StoryHeader/StoryHeader";
import Post from "@/Components/Post/Post";
import Footer from "@/Layouts/Footer/Footer";


export default function Feed() {


    return (
        <React.Fragment>

            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px"}}>
                <span>WhipFlick</span>
                <span>Log Out</span>
            </div>

            <StoryHeader />

            <main style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center", paddingBottom: "45px"}}>
                <Post />
                <Post />
            </main>

            <Footer />

        </React.Fragment>
    )
}