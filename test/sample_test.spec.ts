import { serializeURL, parseURL } from 'whatwg-url';
import { spy } from 'sinon';

describe('Sample test', () => {
    it('Tries to use a whatwg-url imported function', () => {
        // This is here to demonstrate a functioning import.
        const testSpy = spy();
        testSpy();
        expect(testSpy.calledOnce).toEqual(true);

        // This line utlizes the import, which throws an error in whatwg-url v8.2.0+.
        const url = serializeURL(parseURL('http://google.com/'));
        expect(true);
    });
});