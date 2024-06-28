import { render, screen } from '@testing-library/react';
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

describe("App component", () => {

  it("should render app component", () => {
    render(<App/>)

    screen.getByText("Alex Developer")
  })


})

export default {}
