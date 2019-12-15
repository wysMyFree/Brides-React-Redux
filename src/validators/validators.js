export const required = value => {
    if (value) return undefined;

    return 'Field incomplete!'
}

export const maxLengthCreator = (maxLength) => value => {
    if (value.length > maxLength) return `Max length exceeded ${maxLength} symbols`;
    return undefined;
}