import Sami from '../assets/Sami.JPG'
import { useState, useEffect } from 'react';
export default function HomePage(props){
    const [isWorthy,setIsWorthy] = useState(props.worth);
    const [greetingIndex,setGreetingIndex] = useState(0)
    const differentGreetings = ['Hi','नमस्ते','নমস্কার','नमस्कार','வணக்கம்','నమస్కరం','ನಮಸ್ತೆ','કેમ છો','ନମସ୍କାର','ഹലോ']

    const increaseIndex = () => {
        setGreetingIndex((count) => count<differentGreetings.length-1 ? count + 1 : 0);
    }

    useEffect(() => {
        setIsWorthy(props.worth)
        const interval = setInterval(increaseIndex, 1000);
        return () => clearInterval(interval);
    },[props.worth], [increaseIndex])
    return(
        <>
        
        <div className="flex flex-col justify-center items-center my-5 w-[90vw] self-center mt-8 mob:mt-3">
                <div className="flex flex-row gap-[2.3vw] mob:flex-col w-11/12 justify-center">
                    <p className="text-center text-7xl font-bold mob:text-7xl text-[#943636] self-center">{differentGreetings[greetingIndex]}!</p>
                    <p className="text-center text-9xl font-bold mob:text-7xl">MY NAME IS</p>
                </div>
                <div className="flex flex-row gap-[2.3vw] mt-0 mob:flex-col">
                    <p className="text-center text-9xl font-black  mob:text-7xl">SAMARTH</p>
                    <p className="text-center text-9xl font-black mob:text-7xl">GOYAL</p>
                </div>
            </div>
            <div className="flex flex-row text-2xl font-semibold my-5 w-[90vw] self-center mb-10 mob:flex-col">
                <div className="flex justify-center w-1/2 text-center mob:w-auto">
                    <p className="w-2/5 mob:w-auto">FRONTEND WEB DEV BASED IN AGRA, INDIA</p>
                </div>
                <div className=" flex justify-center w-1/2 text-center mob:w-auto mob:mt-2">
                    <p className="w-2/5 mob:w-auto">SPECIALIZED IN  REACT AND TAILWIND CSS</p>
                </div>
            </div>
            <div className={`flex w-[100vw] h-[350px] mob:h-[150px] bg-cover bg-[center_top_-12vw] grayscale ${isWorthy? '':'blur'}`} style={{backgroundImage: `url(${Sami})`}}>
            
            </div>
            </>
    );
}