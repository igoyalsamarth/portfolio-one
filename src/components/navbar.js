import { NavLink } from "react-router-dom";
export default function Navbar(){
    
    return(
        <ul className="flex flex-row text-center justify-center text-3xl font-bold  w-[75vw] self-center sticky top-0 mob:text-base mob:w-[90vw] backdrop-blur-md bg-gradient-to-t from-[#1E1E1E] to-transparent">
            <NavLink to={'/'} className={({isActive}) => (isActive ? 'w-1/4 py-4 bg-[#A8A8A8] text-[#1E1E1E] rounded-bl-lg mob:py-3' : 'mob:py-3 rounded-bl-lg w-1/4 py-4 border-b-4 border-[#A8A8A8] hover:bg-[#A8A8A8] hover:text-[#1E1E1E]' )}><li >HOME</li> </NavLink>
            <NavLink to={'./work'} className={({isActive}) => (isActive ? 'w-1/4 py-4 bg-[#A8A8A8] text-[#1E1E1E] mob:py-3' : 'mob:py-3 w-1/4 py-4 border-b-4 border-[#A8A8A8] hover:bg-[#A8A8A8] hover:text-[#1E1E1E]' )}><li >WORK</li></NavLink>
            <NavLink to={'./about'} className={({isActive}) => (isActive ? 'w-1/4 py-4 bg-[#A8A8A8] text-[#1E1E1E] mob:py-3' : 'mob:py-3 w-1/4 py-4 border-b-4 border-[#A8A8A8] hover:bg-[#A8A8A8] hover:text-[#1E1E1E]' )}><li >ABOUT</li></NavLink>
            <NavLink to={'./contact'} className={({isActive}) => (isActive ? 'w-1/4 py-4 bg-[#A8A8A8] text-[#1E1E1E] rounded-br-lg mob:py-3' : 'mob:py-3 rounded-br-lg w-1/4 py-4 border-b-4 border-[#A8A8A8] hover:bg-[#A8A8A8] hover:text-[#1E1E1E]' )}><li >CONTACT</li></NavLink>
        </ul>

    );
}