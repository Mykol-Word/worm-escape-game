import { useState } from 'react';

import image_up from "../images/directions/direction_up.png";
import image_down from "../images/directions/direction_down.png";
import image_left from "../images/directions/direction_left.png";
import image_right from "../images/directions/direction_right.png";
import image_jump from "../images/directions/direction_jump.png";

const image_list = [image_up, image_down, image_left, image_right, image_jump];

function generateValidDirectionSequence() {
    let img1 = Math.floor(Math.random() * 5);
    let img2 = Math.floor(Math.random() * 5);
    let img3 = Math.floor(Math.random() * 5);
    while(img2 == img1 || img2 == img3)
        img2 = Math.floor(Math.random() * 5);
    return [image_list[img1], image_list[img2], image_list[img3]];
}

//Experimental
function generateNewDirection(currentSequence: string[]) {
    let newImg = image_list[Math.floor(Math.random() * 5)];
    while(newImg === currentSequence[1])
        newImg = image_list[Math.floor(Math.random() * 5)];
    return newImg
}

function GameManger() {

const [directionSequence, setDirectionSequence] = useState(generateValidDirectionSequence());

return(
    <div>
        <img className="direction-image" src={directionSequence[0]}/>
        <img className="direction-image" src={directionSequence[1]}/>
        <img className="direction-image" src={directionSequence[2]}/>
    </div>
);
}

export default GameManger;