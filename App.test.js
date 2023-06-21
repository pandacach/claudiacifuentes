import { render, screen } from '@testing-library/react';
import ImageComponent from '../src/ImageComponent';
import PaginaInicio from '../src/PaginaInicio';

test('renders the image correctly', () => {
  render(<ImageComponent src="../imagenes/best-laptop-medium.jpg" alt="best-laptop-medium" />);
  
  const imageElement = screen.getByAltText('best-laptop-medium');
  
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', '../imagenes/best-laptop-medium.jpg');
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

test('renders the component with correct text', () => {
  render(<PaginaInicio />);
  
  const textElement = screen.getByText('Venta, Mantenimiento y Reparación de Computadores');
  
  expect(textElement).toBeInTheDocument();
});