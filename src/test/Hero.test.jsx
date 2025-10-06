// App.test.jsx
import { render, screen } from '@testing-library/react'
; // Import MemoryRouter
import Hero from '../components/Hero'
import { MemoryRouter } from 'react-router';

describe('Home Page', () => {

     
  it('affiche le titre', () => {
   render( 
    <MemoryRouter>
        <Hero />
    </MemoryRouter>)
    const mainTitle = screen.getByText('Little Lemon')
    expect(mainTitle).toBeInTheDocument()
    expect(mainTitle).toHaveClass('text-[#F4CE14]')
    expect(mainTitle).toHaveClass('font-markazi')
    expect(mainTitle).toHaveClass('text-[40pt]')
  })


})