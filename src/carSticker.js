import React, { useState, useEffect, useRef } from "react";

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    async componentDidMount() {
        (function () {
            var box = document.querySelector(".box");

            function getRandomColourNumber() {
                return Math.floor(Math.random() * 256);
            }
            function changeColor() {
                var r = getRandomColourNumber();
                var g = getRandomColourNumber();
                var b = getRandomColourNumber();
                var randomColour = "rgb(" + r + "," + g + "," + b + ")";
                box.style.background = randomColour;
                setTimeout(changeColor, 500);
            }
            setTimeout(changeColor, 500);
        })();
    }

    changeColor(e) {
        function getRandomColourNumber() {
            return Math.floor(Math.random() * 256);
        }
        var r = getRandomColourNumber();
        var g = getRandomColourNumber();
        var b = getRandomColourNumber();
        var RC = "rgb(" + r + "," + g + "," + b + ")";
        const gobstopper = document.querySelector(".gobstopper");
        gobstopper.style.background = RC;
    }

    render() {
        return (
            <div className="sticker">
                <div className="box">
                    <img
                        src="top.png"
                        alt="top car country sticker"
                        className="image"
                        onClick={(e) => scrollTo(e)}
                    />
                </div>
            </div>
        );
    }
}
