import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from "../src/App";
import React from 'react';


describe('App', () => {
  it('should render headline', () => {
    render(<App />);
    const headline = screen.getByText(/It works and you found me!/i);
    expect(headline).toBeInTheDocument();
  });

  it('should render a button', () => {
    render(<App />);
    
    const button = screen.getByTitle('deck-button');

    expect(button).toBeInTheDocument();
  });

  it('should render an app bar', () => {
    render(<App />);

    const appBar = screen.getByRole('app-bar');

    expect(appBar).toBeInTheDocument();
  });

  it('should render bird-deck cards', () => {
    render(<App />);

    const deckCard = screen.getByRole('deck-card');

    expect(deckCard).toBeInTheDocument();
  });


  
});