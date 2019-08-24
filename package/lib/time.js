function time() {
    d = new Date()
    hours = format_two_digits(d.getUTCHours())
    minutes = format_two_digits(d.getUTCMinutes())
    seconds = format_two_digits(d.getUTCSeconds())
    return `${hours}:${minutes}:${seconds}`
}

function format_two_digits(n) {
    return n < 10 ? '0' + n : n
}

module.exports = () => time()