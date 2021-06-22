import  getTime  from './getTime'
import { expect } from 'chai';


it('time', () => {
    var result = getTime("2021-06-05 20:07:02");
    expect(result).to.equal("17 days");

})