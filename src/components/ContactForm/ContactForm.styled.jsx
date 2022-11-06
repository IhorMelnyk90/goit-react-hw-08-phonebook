import styled from '@emotion/styled';

export const FormTitle = styled.h1`
  display: block;
  width: max-content;
  color: blue;   
  margin: 20px auto;  
  `;


export const FormTextField = styled.div`
position: relative;
  width: 50%;
  line-height: 0.3;
  padding: 2.2rem 0.8rem;
  
`;
  

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px 10px 25px 10px;
  border: 1px solid;
  width: 50%;
  margin: 20px auto; 
`;

export const NameGroup = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 0.75rem;
  pointer-events: none;
  border: 1px solid transparent;
  transform-origin: 0 0;
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
`;

export const FormInput = styled.input`
  display: block;  
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

export const FormBtn = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #ffffff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: green;
  border: 1px solid #4a1ded;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  margin: 0 auto;
  width: 30%;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    color: black;
    background-color: orange;
  }
`;
