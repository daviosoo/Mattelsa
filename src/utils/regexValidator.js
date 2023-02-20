export const regexValidate = (args) => {
    const { regexp = /[]/, stringToValidate = '' } = args;
    const regexpValid = new RegExp(regexp);
    const valuesOfRegexpValid = regexpValid.exec(stringToValidate);

    if (!valuesOfRegexpValid) return false;

    const isValid = valuesOfRegexpValid[0] === valuesOfRegexpValid.input;
    return isValid;
};