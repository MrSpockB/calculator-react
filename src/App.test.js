import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should calculate correctly 2 + 2', () => {
  const component = renderer.create(<App/>);
  component.getInstance().onNumButtonClick('2');
  component.getInstance().setOperation('+');
  component.getInstance().onNumButtonClick('2');
  component.getInstance().onEqualBtnClick();
  expect(component.toJSON()).toMatchSnapshot();
});

it('should calculate correctly 4 - 2', () => {
  const component = renderer.create(<App/>);
  component.getInstance().onNumButtonClick('4');
  component.getInstance().setOperation('-');
  component.getInstance().onNumButtonClick('2');
  component.getInstance().onEqualBtnClick();
  expect(component.toJSON()).toMatchSnapshot();
});

it('should calculate correctly 12 * 2', () => {
  const component = renderer.create(<App/>);
  component.getInstance().onNumButtonClick('12');
  component.getInstance().setOperation('*');
  component.getInstance().onNumButtonClick('2');
  component.getInstance().onEqualBtnClick();
  expect(component.toJSON()).toMatchSnapshot();
});

it('should calculate correctly 100 / 25', () => {
  const component = renderer.create(<App/>);
  component.getInstance().onNumButtonClick('100');
  component.getInstance().setOperation('/');
  component.getInstance().onNumButtonClick('25');
  component.getInstance().onEqualBtnClick();
  expect(component.toJSON()).toMatchSnapshot();
});

it('should clear entered numbers and display 0', () => {
  const component = renderer.create(<App/>);
  component.getInstance().onNumButtonClick('500');
  component.getInstance().setOperation('+');
  component.getInstance().onNumButtonClick('3491');
  component.getInstance().onClearBtnClick();
  expect(component.toJSON()).toMatchSnapshot();
});
