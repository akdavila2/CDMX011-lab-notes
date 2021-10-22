import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { render, screen, cleanup } from '@testing-library/react';
import Login from '../../components/containers/Login';
import {AuthProvider} from '../../context/AuthContext';

afterEach(cleanup)


beforeEach(()=>render(<Router><AuthProvider><Switch><Route component={Login} /></Switch></AuthProvider></Router>));
test('Login behavior test', () => {
      const contentEmail = screen.getByPlaceholderText('Email')
      expect(contentEmail).toBeInTheDocument();
     });