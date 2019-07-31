module.exports =  (err, fatal = false) => {
    console.log(`Rebst > ${err}`.red)
    if(fatal) process.exit()
}