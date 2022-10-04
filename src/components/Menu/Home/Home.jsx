import React from "react";
import { Image } from "react-bootstrap";

function Home() {
    return (
        <>
        <div> <h1 style={{textAlign: "center",}}> This text </h1></div>
        <div> <Image src='https://img.freepik.com/free-photo/beautiful-scenery-of-a-green-valley-near-the-alp-mountains-in-austria-under-the-cloudy-sky_181624-6979.jpg?w=2000' height='500px' fluid /> </div>
        <div> <h1 style={{textAlign: "center",}}> This text </h1></div>
        </>
    )
}

export default Home;