import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web'

import image_up from "../images/directions/direction_up.png";
import image_down from "../images/directions/direction_down.png";
import image_left from "../images/directions/direction_left.png";
import image_right from "../images/directions/direction_right.png";
import image_jump from "../images/directions/direction_jump.png";

const image_list = [image_up, image_down, image_left, image_right, image_jump];

const generateValidDirectionSequence = () => {
    let img1 = Math.floor(Math.random() * 5);
    let img2 = Math.floor(Math.random() * 5);
    let img3 = Math.floor(Math.random() * 5);
    while(img2 == img1 || img2 == img3)
        img2 = Math.floor(Math.random() * 5);
    return [image_list[img1], image_list[img2], image_list[img3]];
}


const generateNewDirection = (currentSequence: string[]) => {
    let newImg = image_list[Math.floor(Math.random() * 5)];
    while(newImg === currentSequence[1])
        newImg = image_list[Math.floor(Math.random() * 5)];
    return newImg
}

const getCurrentKey = (currentDirection: string) => {
    if(currentDirection == image_down) { return 's' }
    else if (currentDirection == image_up) { return 'w' }
    else if (currentDirection == image_left) { return 'a' }
    else if (currentDirection == image_right) { return 'd' }
    else if (currentDirection == image_jump) { return ' ' }
    else return ''
}

interface props {
    updateScore(correct: Boolean): any;
}

function GameManger({updateScore}:props) {

    const [directionSequence, setDirectionSequence] = useState(generateValidDirectionSequence());
    const [seed, setSeed] = useState(Math.random);

    const forceReload = () => {
        setSeed(Math.random());
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        let correct = false;
        const currentKey = getCurrentKey(directionSequence[0]);
        if(e.key === currentKey) {
            let tempDirectionSequence = directionSequence;
            tempDirectionSequence[0] = tempDirectionSequence[1];
            tempDirectionSequence[1] = tempDirectionSequence[2];
            tempDirectionSequence[2] = generateNewDirection(directionSequence);
            setDirectionSequence(tempDirectionSequence);

            api2.start({
                from: {
                   x: '0%'
                },
                to: {
                   x: '-110%' 
                },
            })
    
            api1.start({
                from: {
                   x: '-110%' 
                },
                to: {
                   x: '-220%'
                },
            })
            correct = true;
        }
        forceReload();
        updateScore(correct);
    }

    const [springs2, api2] = useSpring(() => ({
        from: { x: '0%'},
      }))

    const [springs1, api1] = useSpring(() => ({
        from: { x: '-110%'},
      }))

    return(
        <div className="right" onKeyDown={handleKeyPress} tabIndex={0}>
            <animated.div style={{...springs1}}><img className="direction-image" src={directionSequence[0]}/></animated.div>
            <animated.div style={{...springs2}}><img className="direction-image" src={directionSequence[1]}/></animated.div>
            <img className="anchored-image" src={directionSequence[2]}/>
        </div>
    );
}

export default GameManger;