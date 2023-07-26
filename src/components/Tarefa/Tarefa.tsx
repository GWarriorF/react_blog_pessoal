import { useState, useEffect } from 'react'

function Task() {
    const [completo, setCompleted] = useState(false)
    const [tarefa, setTarefa] = useState('')

    useEffect(() => {
        if (completo) {
            setTarefa('Parabéns! Você concluiu a tarefa!')
        }
    }, [completo])

    return (
        <div>
            <h1>Tarefa</h1>
            <h3>{tarefa}</h3>
            <p>Conclua a tarefa</p>
            <button onClick={() => setCompleted(true)}>Concluir Tarefa</button>
        </div>
    )
}

export default Task