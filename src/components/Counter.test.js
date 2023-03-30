import React from "react";
import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe('Testing Counter Component', ()=>{
    test('counter is incremented on add button click', ()=>{
        render(<Counter /> )
        screen.debug();
        const counter = screen.getByTestId('counter');
       fireEvent.click(screen.getByText('Add'))
       fireEvent.click(screen.getByText('Add'))
       fireEvent.click(screen.getByText('Add'))
       fireEvent.click(screen.getByText('Add'))

        expect(counter.innerHTML).toBe("4")
       //expect(incrementBtn).toBeInTheDocument();
    });

    test('counter is decremented on subtract button click', ()=>{
        render(<Counter /> )
        const counter = screen.getByTestId('counter');
        fireEvent.click(screen.getByText('Subtract'))
        fireEvent.click(screen.getByText('Subtract'))
        
        expect(counter.innerHTML).toBe("-2")
    });
})