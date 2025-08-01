// Helper functions

function helperFunction2(x) {
    return x * 2;
}

function formatOutput(data) {
    return String(data).toUpperCase();
}

function sanitizeInput(inputStr) {
    if (typeof inputStr !== 'string') {
        return String(inputStr);
    }
    return inputStr.trim().replace(/\n/g, '').replace(/\r/g, '');
}

module.exports = { helperFunction2, formatOutput, sanitizeInput };
