const signUp = (req, res) => {
    res.send('register')
}

const signIn = (req, res) => {
    res.send('Login')
}

export {
    signUp,
    signIn
}