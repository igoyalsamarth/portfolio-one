import discordLogo from '../assets/discord.svg'
import twitterLogo from '../assets/twitter.svg'
import linkedinLogo from '../assets/linkedin.svg'
import { useState, useEffect } from 'react'
export default function Contact(){
    const [copied, setCopied] = useState(false)

    const copyText = (containerid) => {
        if (window.getSelection) {
            if (window.getSelection().empty) { // Chrome
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) { // Firefox
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) { // IE?
            document.selection.empty();
        }
    
        if (document.selection) {
            const range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerid));
            range.select().createTextRange();
            document.execCommand("copy");
        } else if (window.getSelection) {
            const range = document.createRange();
            range.selectNode(document.getElementById(containerid));
            window.getSelection().addRange(range);
            document.execCommand("copy");
        }
        setCopied(true);
    }
    useEffect(() => {
        const timeID = setTimeout(() => {
            setCopied(false)
        },1500)
        return() => clearTimeout(timeID);
    },[copyText])
    return(
        <div className="flex h-[100vh]  w-[75vw] justify-center self-center pt-20 mob:pt-3 mob:w-[80vw]">
            <div className="flex  w-10/12 flex-col mt-20 text-2xl h-[80vh] mob:w-full">
                <p className='font-bold text-3xl'>GOT A CRAZY IDEA? <br/> <span className='text-[#943636]'>HOP ON. LET'S DISCUSS!</span></p>
                <p className='mt-5 font-bold'>CONTACT DETAILS:</p>
                <div className='flex flex-row items-end gap-2 mt-3'>
                    <img src={discordLogo} alt='' className='h-[25px] grayscale hover:grayscale-0'></img>
                    <p onClick={() => copyText('discordID')} id='discordID' className='cursor-pointer selection:bg-transparent'>goyalsamarth</p>
                </div>
                <div className='flex flex-row items-center gap-2 mt-3'>
                    <img src={linkedinLogo} alt='' className='h-[25px] grayscale hover:grayscale-0'></img>
                    <p onClick={() => copyText('linkedinID')} id='linkedinID' className='cursor-pointer selection:bg-transparent'>goyalsamarth</p>
                </div>
                <div className='flex flex-row items-center gap-2 mt-3'>
                    <img src={twitterLogo} alt='' className='h-[22px] grayscale hover:grayscale-0 mt-2'></img>
                    <p onClick={() => copyText('twitterID')} id='twitterID' className='cursor-pointer selection:bg-transparent'>igoyalsamarth</p>
                </div>
            </div>
            {copied && 
            <div className='fixed bottom-5 bg-[#A8A8A8] p-4 rounded-lg'>
                    <p className=' text-[#1E1E1E] font-bold text-lg mob:text-sm'>Copied To Clipboard!</p>
            </div>
            }
        </div>
    );
}