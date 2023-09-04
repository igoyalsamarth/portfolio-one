import { Link, HashRouter as Router } from "react-router-dom";
import Home from "./components/home";
import { useEffect, useState } from "react";

export default function App() {

  const [passValue,setPassValue] = useState({
    pass1:"",
    pass2:"",
    pass3:"",
    pass4:"",
    pass5:""
  })
  const [isWorthy, setIsWorthy] = useState(false);
  const [isAllowed, setIsAllowed] = useState(false);

  const changePermission = ()=>{
    setIsAllowed(true);
  }

  const inputFocus = (element) => {
    if( element.key === 'Delete' || element.key === 'Backspace' || element.key === 'ArrowLeft'){
      const next = element.target.tabIndex - 2;
      if (next >-1) {
        element.target.form.elements[next].focus()
      }
    }
    else{
      const next = element.target.tabIndex;
      if (next<5) {
        element.target.form.elements[next].focus()
      }
    }
  }

  const handleChange = (value, e) => {
    setPassValue({
      ...passValue,
      [value]: e.target.value})
  }

  useEffect(() => {
    if(passValue.pass1.toUpperCase() === 'H' && passValue.pass2.toUpperCase() === 'E' && passValue.pass3.toUpperCase() === 'L' && passValue.pass4.toUpperCase() === 'L' && passValue.pass5.toUpperCase() === 'O'){
      handleSubmit();
    }
  }, [passValue])

  const handleSubmit = () => {
      setIsWorthy(true)
      setIsAllowed(true)
  }

  return (
    <Router>
      <div className="flex justify-center bg-[#1E1E1E] text-[#A8A8A8] overflow-clip">
      {!isAllowed?
        <div className="flex flex-col w-[90%] pt-5">
          <div className="flex flex-col text-center">
            <p className="text-5xl font-bold mob:text-2xl">LETS START BY GREETING EACH OTHER FIRST SHALL WE?</p>
            <p className="text-8xl font-extrabold text-[#943636] pt-3 mob:text-5xl">YOUR TURN FIRST</p>
            
          </div>
            <div className="flex flex-col mt-10 w-10/12 self-center mob:w-auto">
            <p className="flex text-9xl font-black mob:text-5xl">START WITH A</p>
              <form onSubmit = {handleSubmit} className="flex flex-row gap-2 my-8 mob:gap-2">
                <input autoFocus = 'on' onChange= {e => handleChange("pass1",e)} onKeyUp = {e => inputFocus(e)} autoComplete='off' name='pass1' tabIndex="1" type="text" className=" uppercase text-9xl placeholder:text-9xl w-[10vw] text-center rounded-xl text-[#A8A8A8] placeholder:text-[#A8A8A8] bg-[#202020] font-black placeholder:font-bold mob:text-5xl mob:w-[16vw] mob:placeholder:text-5xl" placeholder="_" maxLength={1}></input>
                <input onChange= {e => handleChange("pass2",e)} onKeyUp = {e => inputFocus(e)} autoComplete='off' name='pass2' tabIndex="2" type="text" className="uppercase text-9xl placeholder:text-9xl w-[10vw] text-center rounded-xl text-[#A8A8A8] placeholder:text-[#A8A8A8] bg-[#202020] font-black placeholder:font-bold mob:text-5xl mob:w-[16vw] mob:placeholder:text-5xl" placeholder="_" maxLength={1}></input>
                <input onChange= {e => handleChange("pass3",e)} onKeyUp = {e => inputFocus(e)} autoComplete='off' name='pass3' tabIndex="3" type="text" className="uppercase text-9xl placeholder:text-9xl w-[10vw] text-center rounded-xl text-[#A8A8A8] placeholder:text-[#A8A8A8] bg-[#202020] font-black placeholder:font-bold mob:text-5xl mob:w-[16vw] mob:placeholder:text-5xl" placeholder="_" maxLength={1}></input>
                <input onChange= {e => handleChange("pass4",e)} onKeyUp = {e => inputFocus(e)} autoComplete='off' name='pass4' tabIndex="4" type="text" className="uppercase text-9xl placeholder:text-9xl w-[10vw] text-center rounded-xl text-[#A8A8A8] placeholder:text-[#A8A8A8] bg-[#202020] font-black placeholder:font-bold mob:text-5xl mob:w-[16vw] mob:placeholder:text-5xl" placeholder="_" maxLength={1}></input>
                <input onChange= {e => handleChange("pass5",e)} onKeyUp = {e => inputFocus(e)} autoComplete='off' name='pass5' tabIndex="5" type="text" className="uppercase text-9xl placeholder:text-9xl w-[10vw] text-center rounded-xl text-[#A8A8A8] placeholder:text-[#A8A8A8] bg-[#202020] font-black placeholder:font-bold mob:text-5xl mob:w-[16vw] mob:placeholder:text-5xl" placeholder="_" maxLength={1}></input>
              </form>
              <p className="flex text-9xl font-black mob:text-5xl">AND I WILL HANDLE THE REST.</p>
            </div>
            <div className="flex flex-col items-center justify-center mob:w-auto  my-5">
              <Link to={'./'}><button className="text-6xl py-3 px-4 bg-[#A8A8A8] font-extrabold text-[#1E1E1E] rounded-lg mob:text-3xl" onClick={changePermission}>I DON'T WANT TO SAY HELLO BUTTON</button></Link>
              <p className="flex mr-0.5 mt-1 font-bold text-sm mob:text-center mob:text-xs">PLEASE NOTE THAT: PRESSING THIS BUTTON WILL IMPACT HOW YOU INTERACT WITH THE PORTFOLIO</p>
            </div>
          </div>
      :<Home worth = {isWorthy} />  } 
      </div>
    </Router>
  );
}
