import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Login from '../../components/containers/Login';
import {AuthProvider} from '../../context/AuthContext';

afterEach(cleanup)

const mockHandleSubmit= jest.fn();
beforeEach(()=>render(<Router><AuthProvider auth={{}} signInWithEmailAndPassword={mockHandleSubmit} onAuthStateChanged={()=> console.log()}><Switch><Route component={Login} /></Switch></AuthProvider></Router>));
test('Login behavior test with context', () => {
      const contentEmail = screen.getByPlaceholderText("Email");
      const contentPassword = screen.getByPlaceholderText("Password");
      const contentButton = screen.getByRole("button", { name: /Login/i });
      
      expect(contentEmail).toBeInTheDocument();
      expect(contentPassword).toBeInTheDocument();

      const emailValue = "usuario@prueba.com";
      const passwordValue = "123456";
      fireEvent.change(contentEmail, { target: { value: emailValue } });
      fireEvent.change(contentPassword, { target: { value: passwordValue } });
      fireEvent.click(contentButton);
    
      expect(mockHandleSubmit).toHaveBeenCalledWith({}, emailValue, passwordValue);
      

     });