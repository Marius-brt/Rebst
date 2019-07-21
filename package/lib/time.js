function time() {
    d = new Date()
    hours = format_two_digits(d.getHours())
    minutes = format_two_digits(d.getMinutes())
    seconds = format_two_digits(d.getSeconds())
    return `${hours}:${minutes}:${seconds}`
}

function format_two_digits(n) {
    return n < 10 ? '0' + n : n
}

module.exports = () => time()