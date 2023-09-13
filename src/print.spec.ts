/* eslint-disable @typescript-eslint/no-magic-numbers */
import { interpreter } from './interpreter';

describe('InterpreterPrint', () => {
  it('should run print() ast and returns "Hello world" without "', () => {
    expect(
      interpreter({
        kind: 'Print',
        value: {
          kind: 'Str',
          value: 'Hello world',
        },
      }),
    ).toEqual('Hello world');
  });

  it('should run print() ast and returns "10" without "', () => {
    expect(
      interpreter({
        kind: 'Print',
        value: {
          kind: 'Int',
          value: 10,
        },
      }),
    ).toEqual(10);
  });

  it('should run print() ast and returns "true" without "', () => {
    expect(
      interpreter({
        kind: 'Print',
        value: {
          kind: 'Bool',
          value: true,
        },
      }),
    ).toEqual(true);
  });

  it('should run print() ast and returns "<#closure>" without "', () => {
    expect(
      interpreter({
        kind: 'Print',
        value: {
          kind: 'Function',
          parameters: [
            {
              text: 'n',
            },
          ],
          value: {
            kind: 'Bool',
            value: true,
          },
        },
      }),
    ).toEqual('<#closure>');
  });

  it('should run print() ast and returns "Tuple" without "', () => {
    expect(
      interpreter({
        kind: 'Print',
        value: {
          kind: 'Tuple',
          first: {
            kind: 'Int',
            value: 10,
          },
          second: {
            kind: 'Int',
            value: 20,
          },
        },
      }),
    ).toEqual('(term, term)');
  });
});