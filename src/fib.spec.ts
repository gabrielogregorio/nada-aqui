import { interpret } from '.';

const fib = {
  expression: {
    kind: 'Let',
    name: {
      text: 'fib',
    },
    value: {
      kind: 'Function',
      parameters: [
        {
          text: 'n',
        },
      ],
      value: {
        kind: 'If',
        condition: {
          kind: 'Binary',
          lhs: {
            kind: 'Var',
            text: 'n',
          },
          op: 'Lt',
          rhs: {
            kind: 'Int',
            value: 2,
          },
        },
        then: {
          kind: 'Var',
          text: 'n',
        },
        otherwise: {
          kind: 'Binary',
          lhs: {
            kind: 'Call',
            callee: {
              kind: 'Var',
              text: 'fib',
            },
            arguments: [
              {
                kind: 'Binary',
                lhs: {
                  kind: 'Var',
                  text: 'n',
                },
                op: 'Sub',
                rhs: {
                  kind: 'Int',
                  value: 1,
                },
              },
            ],
          },
          op: 'Add',
          rhs: {
            kind: 'Call',
            callee: {
              kind: 'Var',
              text: 'fib',
            },
            arguments: [
              {
                kind: 'Binary',
                lhs: {
                  kind: 'Var',
                  text: 'n',
                },
                op: 'Sub',
                rhs: {
                  kind: 'Int',
                  value: 2,
                },
              },
            ],
          },
        },
      },
    },
    next: {
      kind: 'Print',
      value: {
        kind: 'Call',
        callee: {
          kind: 'Var',
          text: 'fib',
        },
        arguments: [
          {
            kind: 'Int',
            value: 10,
          },
        ],
      },
    },
  },
};

describe('Fibonnaci', () => {
  it('should accept correctly fibonnaci', () => {
    expect(interpret({}, fib.expression)).toEqual(55);
  });
});
