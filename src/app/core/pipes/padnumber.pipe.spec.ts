import { PadnumberPipe } from './padnumber.pipe';

describe('PadnumberPipe', () => {
  it('create an instance', () => {
    const pipe = new PadnumberPipe();
    expect(pipe).toBeTruthy();
  });
});
