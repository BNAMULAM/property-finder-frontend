import React, { useState, useEffect} from "react" 
import NavBar from "./Nav";

const Home = () =>{
    return(
        <>
            <NavBar/>
            <div>
                <img
                    style={{width:"1518px",height:"670px"}}
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    />
            </div>
        </>
    )
}


export default Home;
