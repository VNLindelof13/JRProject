import "./TextFieldWithLogo.css";

interface IProps {
  name: string;
}

const TextFieldWithLogo = (props: IProps) => {
  return <h1>Hello, {props.name}</h1>;
};

export default TextFieldWithLogo;
