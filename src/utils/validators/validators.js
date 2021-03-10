export const required = (value) => {
    return value ? undefined : 'Field is required';
};

const maxLength = (num) => (value) => {
    return (value.length > num) ? `Max length is ${num} symbols` : undefined;
};

export const maxLength30 = maxLength(30);