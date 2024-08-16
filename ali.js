let opt = {
    get: (p) => `opt-get(${p})`
};
let getter = (p) => `getter(${p})`;
let accessor = (result, fields, nameOrField) => {
    console.log(`Result: ${result}`);
    console.log(`Fields: ${fields}`);
    console.log(`Name or Field: ${nameOrField}`);
};

// Inputs
let path = 'somePath';
let field = 'someField';
let name = 'someName';

// Executing the line
return accessor((opt && opt.get || getter)(path), [field], name || field);
