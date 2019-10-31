import React from 'react';
import { storiesOf } from '@storybook/react';
import logo from '../../../public/logo.svg';
import Button from './Button';
storiesOf('Button', module)
   .add('Primary', () => <Button
       label="Primary"
       type="primary"
   />)
   .add('Danger', () => <Button
       label="Danger"
       type="danger"
   />)
   .add('Success', () => <Button
       label="Success"
       type="success"
       
   />)
   .add('Warning', () => <Button
       label="Warning"
       type="warning"
   />)
   .add('WeeWoo', () => <Button
       label="Do Some"
       type="weewoo"
   />)

   .add('AddToCart',()=> <Button
   label="Add To Cart"
   type="cart"
   cart
   />)
   .add("Primaryhollow",()=> <Button


       label="Do Some"
       type="primary"
       hollow
      /> )

      .add("Dangerhollow",()=> <Button


      label="Do Some"
      type="danger"
      hollow
     /> )
     .add("Successhollow",()=> <Button


     label="Do Some"
     type="success"
     hollow
    /> )
 
 
     .add("Warninghollow",()=> <Button


     label="Do Some"
     type="warning"
     hollow
    /> )
    .add("WeeWoohollow",()=> <Button


    label="Do Some"
    type="weewoo"
    hollow
   /> )
  
 .add("PrimaryOpacity",()=> <Button


       label="Do Some"
       type="primary"
       opacity
      /> )
      
      .add("WarningOpacity",()=> <Button


      label="Do Some"
      type="warning"
      opacity
     /> )
     .add("DangerOpacity",()=> <Button


     label="Do Some"
     type="danger"
     opacity
    /> )
    
    .add("SuccessOpacity",()=> <Button


    label="Do Some"
    type="success"
    opacity
   /> )
   .add("WeewooOpacity",()=> <Button


   label="Do Some"
   type="weewoo"
   opacity
  /> )

  .add("PrimaryOpacityLarge",()=> <Button


       label="Do Some"
       type="primary"
       opacity
       large
      /> )
      
      .add("WarningOpacityLarge",()=> <Button


      label="Do Some"
      type="warning"
      opacity
      large
     /> )
     .add("DangerOpacityLarge",()=> <Button


     label="Do Some"
     type="danger"
     opacity
     large
    /> )
    
    .add("SuccessOpacityLarge",()=> <Button


    label="Do Some"
    type="success"
    opacity
    large
   /> )
   .add("WeewooOpacityLarge",()=> <Button


   label="Do Some"
   type="weewoo"
   opacity
   large
  /> )
  .add("PrimaryhollowLarge",()=> <Button


       label="Do Some"
       type="primary"
       hollow
       large
      /> )

      .add("DangerhollowLarge",()=> <Button


      label="Do Some"
      type="danger"
      hollow
      large
     /> )
     .add("SuccesshollowLarge",()=> <Button


     label="Do Some"
     type="success"
     hollow
     large
    /> )
 
 
     .add("WarninghollowLarge",()=> <Button


     label="Do Some"
     type="warning"
     hollow
     large
    /> )
    .add("WeeWoohollowLarge",()=> <Button


    label="Do Some"
    type="weewoo"
    hollow
   /> )
  