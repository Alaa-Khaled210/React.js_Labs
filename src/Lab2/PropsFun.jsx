import React from 'react'
function PropsFun(props) {
    const {fname,lname,age,gender} =props;
    return(
        <div>
          <h1>hi i am {fname} {lname} , my age is : {age} and i am : {gender}</h1>
          
          {props.children}
        </div>
    )

}

export default PropsFun;





