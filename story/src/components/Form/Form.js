import React from 'react';
import './Form.css'
// class forms extends React.Component{} this.state



const Form = (props) => {
    let classList = ''
    let types= ['email']
    if(types.includes(props.type)){
classList+= ` Form-${props.type}`
    }


    if(props.inputEmail){
        classList+=` Form-${props.type}-email`;
    }
    // if(props.input){
    //     classList+=` Form-${props.type}-input`;
    // }
    // if(props.count){
    //     classList+=` Form-${props.type}-counter`;
    // }
    return <Form className={classList}>
         {props.email}
    </Form>
}


export default Form;