import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import useSound from 'use-sound';

import image_up from "../images/directions/direction_up.png";
import image_down from "../images/directions/direction_down.png";
import image_left from "../images/directions/direction_left.png";
import image_right from "../images/directions/direction_right.png";
import image_jump from "../images/directions/direction_jump.png";

import correct_sound from "../sounds/correct_sound.mp3";
import wrong_sound from "../sounds/wrong_sound.mp3";

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
    useEffect(() => {
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
    }, []);

    const [directionSequence, setDirectionSequence] = useState(generateValidDirectionSequence());
    const [lastDirection, setLastDirection] = useState(directionSequence[0]);
    const [seed, setSeed] = useState(Math.random);
    const [correctScore, setCorrectScore] = useState(0);

    const forceReload = () => {
        setSeed(Math.random());
    }

    const [correctSound] = useSound(correct_sound, { playbackRate: 1 + (correctScore/100) });
    const [wrongSound] = useSound(wrong_sound);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        let correct = false;
        const currentKey = getCurrentKey(directionSequence[0]);
        if(e.key === currentKey) {
            correctSound();
            setCorrectScore(correctScore + 1)
            setLastDirection(directionSequence[0]);
            let tempDirectionSequence = directionSequence;
            tempDirectionSequence[0] = tempDirectionSequence[1];
            tempDirectionSequence[1] = tempDirectionSequence[2];
            tempDirectionSequence[2] = generateNewDirection(directionSequence);
            setDirectionSequence(tempDirectionSequence);

            api3.start({
                from: {
                   opacity: 1
                },
                to: {
                   opacity: 0
                },
            })

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
        else { wrongSound(); }
        forceReload();
        updateScore(correct);
    }

    const [springs3, api3] = useSpring(() => ({
        from: { opacity: 1 },
      }))


    const [springs2, api2] = useSpring(() => ({
        from: { x: '0%'},
        config: {mass:1, tension:150, friction:18, clamp: true}
      }))

    const [springs1, api1] = useSpring(() => ({
        from: { x: '-110%'},
        config: {mass:1, tension:150, friction:18, clamp: true}
      }))

    return(
        <div className="right" onKeyDown={handleKeyPress} tabIndex={0}>
            <animated.div style={{...springs3}}><img className="direction-image fade-image" src={lastDirection}/></animated.div>
            <animated.div style={{...springs1}}><img className="direction-image" src={directionSequence[0]}/></animated.div>
            <animated.div style={{...springs2}}><img className="direction-image" src={directionSequence[1]}/></animated.div>
            <img className="anchored-image" src={directionSequence[2]}/>
        </div>
    );
}

export default GameManger;