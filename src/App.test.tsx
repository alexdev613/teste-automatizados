import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Obs: para o test funcionar
import App from './App';


function sum(n1: number, n2: number) {
  return n1 + n2;
}

function media(n1: number, n2: number) {
  const resultado = (n1 + n2) / 2;

  if(resultado >= 7) {
    return "Aprovado";
  } else {
    return "Exame";
  }
}

// Criar um bloco que agrupa vários teste relacionados
describe("First test app component", () => {
  
  it("Should adds 1 + 2 to equal 3", () => {
    expect(6 + 13).toBe(19);
  })

  it("should adds 5 + 2 to equal 7", () => {
    expect(sum(5, 2)).toBe(7);
  })

  it("should calculate the average and return exame", () => {
    expect(media(5, 6)).toBe("Exame");
    expect(media(7, 8)).toBe("Aprovado");
  })

})

//----------------------------------//

describe("App component", () => {

  it("should render app component", () => {
    render(<App/>)

    screen.getByText("Alex Developer")
  })

  it("should heading h1 have correct text", () => {
    render(<App/>);

    const headingElement = screen.getByRole("heading", { level: 1});
    expect(headingElement).toHaveTextContent("Alex Developer");
    expect(headingElement).toHaveClass("titulo")
  })

  it("should change message on button click", () => {
    render(<App />);

    const buttonElement = screen.getByText("Alterar Mensagem");
    fireEvent.click(buttonElement);

    screen.getByText("Estudando testes com ReactJS");

    const newMessage = screen.queryByText("Estudando testes com ReactJS");
    expect(newMessage).toBeInTheDocument();

    const oldMessage = screen.queryByText("Bem vindo ao projeto!");
    expect(oldMessage).not.toBeInTheDocument();

  })

})

export default {}
