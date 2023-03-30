import React from 'react';

import { render, screen } from '@testing-library/react'

import Demo from './Demo';

describe('Testing Demo Component', ()=>{

    test('h1 element render in DOM', ()=>{
        render(<Demo />)
        screen.debug();
        expect(screen.getByText(/Hello/)).toBeInTheDocument();
        expect(screen.getByTestId("testId")).toBeInTheDocument();
        
    });
    
    test('list contains 4 items', ()=>{
        render(<Demo />)
        const listElement = screen.getByRole('list')
        const listItems = screen.getAllByRole('listitem')
    
        expect(listElement).toBeInTheDocument();
        expect(listItems.length).toBe(4)
    })
})
