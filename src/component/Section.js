
import sunIcon from '../images/icon-sun.svg';
import checkIcon from '../images/icon-check.svg';
import cancel from '../images/icon-cross.svg';
import Lists from '../component/Lists';
import moon from '../images/icon-moon.svg'
import { useState } from 'react';


const Section = (props) => {
    
    const isChecked = false;
    const [textinput, setTextinput] = useState ('');

    const [submit, setSubmit] = useState (false);
    const [todolist, setTodolist] = useState([]);

    const handleTextChange = (e) => {
        setTextinput (e.target.value); 
        console.log(e.target.value)
      };

      const handleCheckChange = (e) => {
        setSubmit (e.target.checked); 
        handleClick ();
      };

      const handleClick = () => {
        if (submit && textinput) { 
            todolist.push(textinput)
          setTodolist (todolist); 
          setTextinput (''); 
          setSubmit (false); 
          console.log (todolist); 
        }
       
      };
      const handleKeyDown = (e) => {
        if(e.key === 'Enter' && textinput) {
          
          todolist.push(textinput)
          setTodolist (todolist); 
          setTextinput (''); 
          setSubmit (false); 
          console.log (todolist);
          e.preventDefault(); 
          // handleClick();
        }
      }
      
     const darkmode = props.darkMode;
     const Darkmodetoggle = props.toggleDarkMode;

    return ( 
        <section>
            <div className="title-div">
            <h1 className="title">Todo</h1>
            <img src={darkmode ? moon : sunIcon} alt="" className='suntheme' 
            onClick={Darkmodetoggle}
            />  
            </div>
            <div className= {`input-div ${darkmode ? 'divlight' : 'divdark'}`}>
            <label htmlFor="check">
  <input type="checkbox" name="check" className="check1 " 
  checked={submit}
  onChange={handleCheckChange}

  />
 <span></span>
 <img src={checkIcon} alt="" />
</label>
<input type="text" className={`listinput  ${darkmode ? 'inputlight' : 'inputdark'}`} 
value={textinput}
onChange={handleTextChange}
onKeyDown={handleKeyDown} 
/> 
       </div>
<Lists listitem = {todolist}  todolistarr = {setTodolist} darkMode={darkmode}
        toggleDarkMode={Darkmodetoggle} />
  
        </section>
     );
}
 
export default Section;