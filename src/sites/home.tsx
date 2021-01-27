import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'


const home = () => {
    const text1 = "Hello,"
    const text2 = "I'm Jakub,"
    const text3 = "web developer."

    return (
        <div className="py-8 mx-24 text-white">
            <div className="font-mono py-8 text-gray-400"><i>{"<body>"}</i></div>


            <div className="font-mono py-8 mx-16 ">
                <div className="font-mono text-gray-400"><i>{"<h1>"}</i></div>

                <div>
                    {text1.split("").map((letter) => (
                        <span className="font-bold text-5xl hover:text-hoverb">{letter}</span>
                    ))}
                </div>

                <div>
                    {text2.split("").map((letter) => (
                        <span className="font-bold text-5xl hover:text-hoverb">{letter}</span>
                    ))}
                </div>

                <div >
                    {text3.split("").map((letter) => (
                        <span className="font-bold text-5xl hover:text-hoverb">{letter}</span>
                    ))}

                    <i className="font-mono text-gray-400 text-base">{"</h1>"}</i>
                </div>
                <div className="text-gray-400 "> React developer / University student</div>
            </div>
            <div className="font-mono py-8 mx-16">
                <Link to="/Contact">
                    <Button variant="contained">Contact me!</Button>
                </Link>
            </div>


            <div className="font-mono py-8 text-gray-400" ><i>{"</body>"}</i></div>
        </div>
    )
}

export default home
