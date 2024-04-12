import {useState} from "react";
import axios from "axios"
import {v1 as uuid} from "uuid";

const useAxios = (baseUrl) => {
    const [state, setState] = useState ([]);

    let fetchCard = async (endPointUrl= "") => {
        const response = await axios.get(`${baseUrl}${endPointUrl}`);
        const newCard = {...response.data, id: uuid ()}
        setState(cards => [...cards, newCard])
    }
    
    return [state, fetchCard]

}

export default useAxios;

