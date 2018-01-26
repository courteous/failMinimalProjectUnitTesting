
import { expect } from '../node_modules/chai/';
import {mocha} from "../node_modules/mocha/";


import { Hellow2 } from './../ts/Hello2';

describe('Hello function', () => {

  it('should return hello world', () => {
    // const result = hello();
    var classHello2 = new Hellow2();
    const result = classHello2.sayHello();
    expect(result).to.equal('Hello World!');
  });

});
