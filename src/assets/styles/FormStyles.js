import styled from "styled-components";

export const AuthForm = styled.div`
display: flex;
justify-content: center;
flex-direction: center;
`;

export const FormWrapper = styled.form`
background: var(--secondary);
width: min(100%, 30rem);
border-radius: 8px;
padding: 3rem;
margin-top: 1.5rem;
`;

export const Form = styled.form`
  width: 100%;
  padding: 0;
  margin: 2rem 0;
  position: relative;
`;



export const FormOperation = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 2rem 0;
`;

export const FormOperationsContainer = styled.form`
width: min(100%, 33rem);
background: var(--secondary-2);
padding: 3rem;
margin-top: 1.5rem;
border-radius: 8px;
`;

export const FormOTP = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 20px;
// padding: 2rem 4rem 0;
`;

export const FormOTPContainer = styled.div`
width:min(100%, 15rem);
text-align: center;
`;


export const InputLabel = styled.label`
font-weight: 600;
font-size: 13px;
line-height: 19px;
color: var(--gray-2);
margin-bottom: -10px;
`;

export const InputGroup = styled.div`
margin: 0 0 0.2rem;
&:first-child {
  margin-top: 1rem;
}
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1.5px solid var(--primary);
  height: 48px;
  padding: 0 10px;
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 0;
  font-weight: 600;
  box-sizing: border-box;
  color: var(--input-color);
  font-size: 14px;
  line-height: 17.05px;
  margin-bottom: 1rem;


  &.invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E") !important;
    border-color: rgba(220, 53, 69, 0.5) !important;
    color: #dc3545;
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.1875rem) center;
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
  }

  &::placeholder {
    font-size: 14px;
    line-height: 17.05px;
    font-weight: 400;
    color: var(--gray-color);
    opacity: 0.6;
  }

  &:focus {
    color: var(--orange);
    background-color: transparent;
    border-color: var(--orange);
    outline: 0;
    box-shadow: none !important;
  }
  
`;

export const InputErrors = styled.div`
  width: 100%;
  font-size: 13px !important;
  color: #dc3545;
  margin: 0.5rem 0;
  padding: 0;
`;

export const IconHolder = styled.div`
display: flex;
flex-direction: row;
-moz-box-pack: center;
justify-content: center;
-moz-box-align: center;
align-items: center;
margin: 0px;
padding: 0px;
position: absolute;
right: 3%;
top: 22%;
`;


export const AuthStepCounter = styled.div`
padding: 1rem 0;
`;

export const AuthProgressbar = styled.ul`
overflow: hidden;
counter-reset: step;
width: 100%;
margin: 0 auto 15px;
text-align: center;
position: relative;
padding: 0;
`;

export const AuthProgressbarChild = styled.li`
list-style-type: none;
color: var(--white);
text-transform: uppercase;
font-size: 9px;
width: 25%;
float: left;
position: relative;
z-index:10;

&::before {
    content: counter(step);
    counter-increment: step;
    width: 30px;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    color: var(--primary);
    background: var(--step-color);
    border-radius: 50%;
    display: block;
    margin: 0 auto 5px auto;
    text-align:center;
}

&::after {
    content: '';
	width: 70%;
	height: 2px;
	background: var(--step-color);
	position: absolute;
	left: -35%;
	top: 13px;
	z-index: -1;
  }

  &:first-child:after  {
    content: none; 
  }

&.active::before, 
&.active::after {
    background: var(--orange);
    color: var(--white);
  }
`;

export const AuthFormContainer = styled.div`
background: var(--secondary);
padding: 2rem 8rem;
border-radius: 8px;
`;

export const CountryPickerCard = styled.div`
display: flex;
justify-content:flex-start
width: 100%;
`;

export const CountryPicker = styled.div`
width: 35%;
`;


export const FormUpload = styled.div`
border: 1px dashed #8D9EA5;
outline-offset: -10px;
transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear;
position: relative;
background: #405D68;
padding: 20px 30px;
margin-bottom: 20px;

`;

export const FormUploadContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;

export const FormUploadInput = styled.input.attrs(props => ({
    type: "file"
}))`
  display: block;
width: 100%;
height: 48px;
opacity: 0;
overflow: hidden;
position: absolute;
z-index: 1;
cursor: pointer;
  `;

export const FormUploadIcon = styled.img`
width: 50px;
height: 50px;
display: block;
margin: 10px auto;
  `;


export const FormUploadLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #D1D8DB;
  padding:0 6rem;
  margin-bottom: 20px;
  `;
  

export const InputIcon = styled.div`
margin: 0px;
padding: 0px;
position: absolute;
right: ${(props) => props.right || "5%"};
top: ${(props) => props.top || "35%"};
  `;

