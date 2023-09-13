type locationType = {
    start: number;
    end: number;
    filename: string;
};
type ExpressionFunction = {
    kind: 'Function';
    parameters: {
        text: string;
        location?: locationType;
    }[];
    value: Expression;
    location?: locationType;
};
type ExpressionBool = {
    kind: 'Bool';
    value: boolean;
    location?: locationType;
};
type ExpressionInt = {
    kind: 'Int';
    value: number;
    location?: locationType;
};
type ExpressionStr = {
    kind: 'Str';
    value: string;
    location?: locationType;
};
type ExpressionVar = {
    kind: 'Var';
    text: string;
    location?: locationType;
};
type ExpressionCall = {
    kind: 'Call';
    callee: Expression;
    arguments: Expression[];
    location?: locationType;
};
type Operators = 'Add' | 'Sub' | 'Mul' | 'Div' | 'Rem' | 'Eq' | 'Neq' | 'Lt' | 'Gt' | 'Lte' | 'Gte' | 'And' | 'Or';
type ExpressionBinary = {
    kind: 'Binary';
    lhs: Expression;
    op: Operators;
    rhs: Expression;
    location?: locationType;
};
type ExpressionIf = {
    kind: 'If';
    condition: ExpressionBinary;
    then: Expression;
    otherwise: ExpressionBinary;
    location?: locationType;
};
type ExpressionPrint = {
    kind: 'Print';
    value: Expression;
    location?: locationType;
};
type ExpressionLet = {
    kind: 'Let';
    name: {
        text: string;
        location?: locationType;
    };
    value: Expression;
    next: Expression;
    location?: locationType;
};
export type ExpressionBase = {
    name?: string;
    expression: Expression;
    location?: locationType;
};
export type Expression = ExpressionLet | ExpressionIf | ExpressionFunction | ExpressionVar | ExpressionBinary | ExpressionCall | ExpressionInt | ExpressionStr | ExpressionPrint | ExpressionBool;
export {};
