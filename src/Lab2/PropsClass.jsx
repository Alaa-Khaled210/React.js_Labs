import React, { Component } from 'react'

 class PropsClass extends Component {
  render() {
    const {course_1,course_2}=this.props;
    return (
      <div>
        <h1>Hi Alaa The first course is : {course_1} and secound course is : {course_2}</h1>
      {this.props.children}
      </div>
    )
  }
}
export default PropsClass;
