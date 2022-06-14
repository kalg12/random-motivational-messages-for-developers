const messages = [
    "Tal vez tu código no salga a la primera, pero no pares de intentar hasta lograrlo.",
    "Un buen desarrollador de software trabaja con disciplina y constancia desde el primer día - Omar Bradley",
    "El software es una herramienta que se utiliza para hacer lo que imagines."
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}


module.exports = { randomMsg }