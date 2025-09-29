import readline from readline;

class BackendSimulator {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  askFieldChoice(player, options, callback) {
    console.log(`${player.name}, you can plant in: ${options.join(", ")}`);
    this.rl.question("Choose a field: ", (answer) => {
      const choice = parseInt(answer, 10);
      if (options.includes(choice)) {
        callback(choice);
      } else {
        console.log("Invalid choice, try again.");
        this.askFieldChoice(player, options, callback);
      }
    });
  }

  close() {
    this.rl.close();
  }
}