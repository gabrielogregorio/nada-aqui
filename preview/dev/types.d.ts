type ExpressionFunction = {
    kind: 'Function';
    parameters: {
        text: string;
    }[];
    value: Expression;
};
type ExpressionBool = {
    kind: 'Bool';
    value: boolean;
};
type ExpressionInt = {
    kind: 'Int';
    value: number;
};
type ExpressionStr = {
    kind: 'Str';
    value: string;
};
type ExpressionVar = {
    kind: 'Var';
    text: string;
};
type ExpressionCall = {
    kind: 'Call';
    callee: Expression;
    arguments: Expression[];
};
type Operators = 'Add' | 'Sub' | 'Mul' | 'Div' | 'Rem' | 'Eq' | 'Neq' | 'Lt' | 'Gt' | 'Lte' | 'Gte' | 'And' | 'Or';
type ExpressionBinary = {
    kind: 'Binary';
    lhs: Expression;
    op: Operators;
    rhs: Expression;
};
type ExpressionIf = {
    kind: 'If';
    condition: ExpressionBinary;
    then: Expression;
    otherwise: ExpressionBinary;
};
type ExpressionPrint = {
    kind: 'Print';
    value: Expression;
};
type ExpressionLet = {
    kind: 'Let';
    name: {
        text: string;
    };
    value: Expression;
    next: Expression;
};
export type ExpressionBase = {
    expression: Expression;
};
export type Expression = ExpressionLet | ExpressionIf | ExpressionFunction | ExpressionVar | ExpressionBinary | ExpressionCall | ExpressionInt | ExpressionStr | ExpressionPrint | ExpressionBool;
export {};
