import { render, screen } from '@testing-library/react';
import ImageComponent from '../src/softwareyapps';
import PaginaInicio from '../src/PaginaInicio';

test('renders the image correctly', () => {
  render(<imagenes src="../imagenes/softwareyapps.png" alt="softwareyapps" />);
  
  const imageElement = screen.getByAltText('softwareyapps');
  
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', '../imagenes/softwareyapps.png');
});

test('renders the image correctly', () => {
  render(<ImageComponent src="../imagenes/imagen-testimonio.jpg" alt="imagen-testimonio" />);
  
  const imageElement = screen.getByRole('img', { name: 'imagen-testimonio' });
  
  expect(imageElement).toBeInTheDocument();
});

test('renders the image with correct CSS styles', () => {
  render(<ImageComponent src="../imagenes/MemoriaRAM.jpg" alt="MemoriaRAM.jpg" />);
  
  const imageElement = screen.getByAltText('MemoriaRAM.jpg');
  
  expect(imageElement).toHaveStyle(`
    width: 100%;
    height: auto;
    border-radius: 4px;
  `);
});

import { render, screen } from '@testing-library/react';
import TextComponent from '../src/ServiciosHardware';

test('renders the component with correct text', () => {
  const text = 'Actualización de Sistemas Operativos';
  render(<TextComponent text={text} />);
  
  const textElement = screen.getByText();
  
  expect(textElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import TextComponent from '../src/Testimonios';

test('renders the component with correct text', () => {
  const text = 'Testimonios de nuestros clientes';
  render(<TextComponent text={text} />);
  
  const textElement = screen.getByText(text);
  
  expect(textElement).toBeInTheDocument();
});