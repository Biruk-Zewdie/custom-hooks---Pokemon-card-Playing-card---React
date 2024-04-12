import {useState} from "react"

const useFlip = () => {
    const [state, setState] = useState ("initialCondition")
    const flipCard = () =>{
        setState(initialCondition => !initialCondition)
    }
    

    return ([state, flipCard])
}

export default useFlip;