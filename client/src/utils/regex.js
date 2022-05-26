


const onlyLettersAndSpace = (string) => {
    const regex = /(^[A-Za-z ]*$)/;
    return regex.test(string);
}

const validEmail = (string) => {
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return regex.test(string);
}

const validSpanishZipCode = (zipCode) => {
    const regex = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/
    return regex.test(zipCode);
}

const validPassword = (password) => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\_\-])(?=.{8,})/;
    return regexPassword.test(password);
};

const onlyNumbers = (input) => {
    const regex = /^[0-9]*$/
    return regex.test(input)
}



const regex = {
    onlyLettersAndSpace,
    validEmail,
    validSpanishZipCode,
    validPassword,
    onlyNumbers
}


module.exports = regex;