import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import SignUp from "../../components/containers/SignUp";
import {AuthProvider} from '../../context/AuthContext';

afterEach(cleanup)

const mockHandleSubmit= jest.fn();
beforeEach(()=>render(<Router><AuthProvider auth={{}} createUserWithEmailAndPassword={mockHandleSubmit} onAuthStateChanged={()=> console.log()}><Switch><Route component={SignUp} /></Switch></AuthProvider></Router>));
test('SignUp behavior test with context', () => {
      const contentEmail = screen.getByPlaceholderText("Email");
      const contentPassword = screen.getByPlaceholderText("Password");
      const contentConfirmPassword = screen.getByPlaceholderText("Confirm Password");
      const contentButton = screen.getByRole("button", { name: /SignUp/i });
      
      expect(contentEmail).toBeInTheDocument();
      expect(contentPassword).toBeInTheDocument();
      expect(contentConfirmPassword).toBeInTheDocument();
      const emailValue = 'usuario@prueba.com';
      const passwordValue = '123456';
      const confirmPasswordValue='123456';
      fireEvent.change(contentEmail, { target: { value: emailValue } });
      fireEvent.change(contentPassword, { target: { value: passwordValue } });
      fireEvent.change(contentConfirmPassword, { target: { value: confirmPasswordValue } });
      fireEvent.click(contentButton);
    
      expect(mockHandleSubmit).toHaveBeenCalledWith({}, emailValue, passwordValue);
      

     });