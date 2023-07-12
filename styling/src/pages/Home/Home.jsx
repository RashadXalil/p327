import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const Home = () => {
    const screenRef = useRef()
    const styles = {
        width: "100px",
        height: "100px",
        border: "1px solid black"

    }
    return (
        <div>
            <button onClick={() => {
                screenRef.current.style.background = "red"
            }}>change background</button>
            <div ref={screenRef} style={styles}></div>
        </div>
    )
}

export default Home