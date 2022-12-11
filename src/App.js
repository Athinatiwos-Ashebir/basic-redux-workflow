//import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { name , lname , age, gender, pro} from './store/action/action';
import { useState } from 'react';
import About from './Names/About';
//import FirstName from './Names/FirstName';

 //import lname './store/reducer/reducers/lname';


function App() {
   //const age=12

 


    const firstName =useSelector((state)=>state.firstName)
     const lastName =useSelector((state)=>state.lastName)
     const myage =useSelector((state)=>state.myage)
     const gen =useSelector((state)=>state.gen)
     const prof =useSelector((state)=>state.prof)

     const dispatch = useDispatch()

     
     
    
     const [myValue, setMyvalue] =  useState()
     const [lmyValue, lsetMyvalue] =  useState()
     const [amyValue, asetMyvalue] =  useState()
     const [gmyValue, gsetMyvalue] =  useState()
     
     const [pmyValue, psetMyvalue] =  useState()

  return (
    <div className="App">

       <About myAge={age}/>
       
        

      <div>
      <input className='in' type="text" placeholder='enter your first name'  value={myValue} onChange={(e)=>setMyvalue(e.target.value)}/>
        <button className='afn' onClick={()=>dispatch(name(myValue))}>add firstName</button>
        
      <div className='fname'>firstName: {firstName}</div>
      </div>
<div>
       
      <input className="text-black" type="text" placeholder='enter your last name' value={lmyValue} onChange={(e)=>lsetMyvalue(e.target.value)}/>
        <button className='aln' onClick={()=>dispatch(lname(lmyValue))}>add lastName</button>
        
      <div className='lname'>lastName: {lastName}</div>
 </div>
<div>
       
     <input className="text-black"  type="number" placeholder='enter your age' value={amyValue} onChange={(e)=>asetMyvalue(e.target.value)}/>
        <button className='aage' onClick={()=>dispatch(age(amyValue))}>add Age</button>
        
      <div className='age'>Age: {myage}</div>
 </div>
       <div>
       <input className="text-black"  placeholder='enter your your gender' value={gmyValue} onChange={(e)=>gsetMyvalue(e.target.value)}/>
        <button className='agen' onClick={()=>dispatch(gender(gmyValue))}>Gender</button>
        
     <div className='gen'>Gender: {gen}</div>
 </div>
      <div>
       <input className="text-black" placeholder='enter your profession' value={pmyValue} onChange={(e)=>psetMyvalue(e.target.value)}/>
        <button className='apr' onClick={()=>dispatch(pro(pmyValue))}>profession</button>
        
       <div className='pr'>profession: {prof}</div> 
       </div> 
        
    </div>
  );
}

export default App;
