import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/userName.slice';

const UserInput = () => {

    const [userName, setUserName] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const dispatchUserName = () => {
        dispatch(changeName(userName))
        navigate("/pokemons")
    }

    return (
        <div className='userInput-container'>
            <img src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png" alt="" />
            <h1>!Hi Trainer!</h1>
            <p><b>Introduce your name, so we can begin...</b></p>
            <div className="input-container">
                <div className="col-sm-7 inputName-container">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputError"
                        value={userName}
                        onChange = {e => setUserName(e.target.value)}
                        />
                    <button className="btn btn-danger" onClick={dispatchUserName}>Start</button>
                </div>
            </div>
            <footer className='userInputFooterImg'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png" alt="" />
            </footer>             
        </div>
    );
};

export default UserInput;