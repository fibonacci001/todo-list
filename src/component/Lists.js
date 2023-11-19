import sunIcon from '../images/icon-sun.svg';
import checkIcon from '../images/icon-check.svg';
import cancel from '../images/icon-cross.svg';
import { useState } from 'react';


const Lists = (props) => {
    const list = props.listitem;
    
    const setTodolist = props.todolistarr;
    const darkmode = props.darkMode;
     const Darkmodetoggle = props.toggleDarkMode;

    const [checked, setChecked] = useState (list.map (() => false));
    const [filtered, setFiltered] = useState(list);
    const btn = document.querySelectorAll('btn');
    btn.forEach((btn) => (
      console.log(btn)
    ))
const listlength = filtered.length ;

    const deletelist = (item) => {
      const newlist = list.filter((list) => list !== item);
      const newfiltered = filtered.filter((filtered) => filtered !== item);
      
      setTodolist(newlist);
      setFiltered(newfiltered);
      }

    const handleCheckChange = (index) => {
        
        setChecked((prevChecked) => {
          const newChecked = [...prevChecked];
          newChecked[index] = !newChecked[index];
          return newChecked;
        });

        const todoItem = document.querySelector(`.todolist-inner-div:nth-child(${index + 1})`);
        
        todoItem.classList.toggle("crossline");
      };

      const [activeLink, setActiveLink] = useState('All');

      const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  });
})



      const All = (e) => { 
        setFiltered(list);
        document.querySelector('.All').classList.add('active');
        setActiveLink('All');
      };
      const Active = () => {
        const newlist = list.filter((item, index) => !checked[index]);
        setFiltered(newlist);
        document.querySelector('.Active').classList.add('active');
        setActiveLink('Active');
      };

      const Completed = () => {
      
        const newlist = list.filter((item, index) => checked[index]);
        
        setFiltered(newlist);
        document.querySelector('.Completed').classList.add('active');
        setActiveLink('Completed'); 
      };

const fullclear = () => {
    setFiltered([]);
    setTodolist([])

}


     

    return ( 
        <div className={`todolist-outer-div ${darkmode ? 'outer-divlight' : 'outer-divdark'}`}>


{
  filtered.map((item, index) => (
    <div className="todolist-inner-div" key={item}>
      <label htmlFor="check" class="label">
        <input
          type="checkbox"
          name="check"
          className="checkbox"
          checked={checked[index]} 
          onChange={() => handleCheckChange(index)} 
        />
        <span></span>
        <img src={checkIcon} alt="" />
      </label>
      <p className={`todo-list-text ${darkmode ? 'list-textlight': 'list-textdark'}`}>{item} </p>
      <img src={cancel} alt="" className='cancel' onClick={() => deletelist(item)} />
    </div>
  ))
  
  }



     <div className="todolist-controls">
<div className="items-remaining linkday"> 
<span className="item-amount" > {listlength}  items left</span>

</div>

<div className={`main-controls ${darkmode ? 'controlslight' : 'controlsdark' }`}>
<span>
<a href="#" className={`btn linkday All  ${activeLink === 'All' ? 'active' : ''}`} onClick={() => All()}>All</a>  
</span>
<span>
<a href="#" className={`btn Active linkday ${activeLink === 'Active' ? 'active' : ''}`} onClick={() => Active()}>Active</a>
</span>
<span>
<a href="#" className={`btn  Completed linkday ${activeLink === 'Completed' ? 'active' : ''}`} onClick={() => Completed()}>Completed</a>
</span>


</div>
<div className={`clear-control `}>
<a href="#" className="btn clear linkday" onClick={() => fullclear()}> Clear Completed</a>
</div>

       </div>
       <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://giftrichard.com/">Gift Richard</a>.
  </div>
            </div>
     );
}
 
export default Lists;