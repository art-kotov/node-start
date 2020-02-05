function consoleToJson() {
    const console = {};

    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i].split("=");
        console[arg[0]] = arg[1] ? arg[1] : true
    }
    return console
}

console.log(consoleToJson());
