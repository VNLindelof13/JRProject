import "./TextFieldWithLogo.css";

interface IProps {
  logo: string;
  type: number;
}

const TextFieldWithLogo = (props: IProps) => {
  const textFieldWithLogo = (
    <div className='InitialDiv'>
      <img src={props.logo} alt='User' width='50' height='50' />
      <input className='Input' type='text' id='fname' name='fname' />
    </div>
  );
  return textFieldWithLogo;
};

export default TextFieldWithLogo;
