// // jest.config.js
// // Sync object
// /** @type {import('@jest/types').Config.InitialOptions} */
// import React from "react";
// //import { BrowserRouter as Router } from "react-router-dom";
// import { mount } from "enzyme";
// import Login from "../../components/containers/Login";

// describe("<Login />", () => {
//   const login = mount(<Login />);
//   test("Render Login", () => {
//     expect(login.length).toEqual(1);
//   });

//   test("Render element", () => {
//     expect(login.find("footer").text()).toEqual(
//       " Copyright - All rights reserved - Created by Ana Karina Dávila Dávila"
//     );
//   });
// });

// // test('renders learn react link', () => {
// //   render(<App />);
// //   const linkElement = screen.getByText(/learn react/i);
// //   expect(linkElement).toBeInTheDocument();
// // });

import { render, screen } from '@testing-library/react';
import LoginForm
 from '../../components/containers/LoginForm';

beforeEach(()=>render(<LoginForm />));
test('FormLogin behavior test', () => {
  const contentEmail=screen.getByPlaceholderText('Email');
  const contentPassword=screen.getByPlaceholderText('Password');
  const contentButton = screen.getByRole('button',{name:/Login/i});
  expect(contentEmail).toBeInTheDocument();
  expect(contentPassword).toBeInTheDocument();
  expect(contentButton).toBeInTheDocument();
});