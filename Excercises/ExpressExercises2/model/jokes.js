var jokes = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];


const _addJoke = (joke) => {
    if (joke.length > 0) jokes.push(joke);
};

const _getRandomJoke = () => {
    return jokes[Math.floor(Math.random() * jokes.length)];
};

module.exports = {
    allJokes: jokes,
    getRandomJoke: _getRandomJoke,
    addJoke: _addJoke
};
