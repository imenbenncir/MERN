import React, { useState } from 'react'
function Tabs(props) {
    const {allTabs, setAllTabs}=props
    const[text,setText]=useState(allTabs[0].content)
    const[currentTab,setCurrentTabs]=useState(0)
    const Tabchange =(i)  => {
        setCurrentTabs(i)
        setText(allTabs[i].content)
    }
    const saveChange =(value)  => {
        setText(value)
        allTabs[currentTab].content=value
        setAllTabs(allTabs)
    }
    return ( 
        <>
        <div className='nav nav-tabs justify-content-center'>
            {allTabs.map((t,i) => (
                <div className='nav-item '> 
                    <button onClick={()=>Tabchange(i)}className={i===currentTab?'nav-link active':'nav-link'}>{t.label} </button>
                </div>
            ))}
        </div>
            <textarea onChange={(e)=>saveChange(e.target.value)} cols="30" row="10" value={text} className='form-control col'></textarea>
        </>
    );
}
export default Tabs;
