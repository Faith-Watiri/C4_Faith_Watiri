import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
         display: flex;
         justify-content: center:
         margin-top: 20px;
`;


const StyledButton = styled.button`
  padding: 10px 20px;
   font-size: 16px;
   background-color: #3498db;
   color: #ffffff;
   border: none;
   border-radius: 5px;
   cursor: pointer:

   &:hover {
    background-color: #2980b9;
   }
`;

    


const Button = ({ label }) => {
    return (

        <button > { label } </button>
    );





};

export default Button;