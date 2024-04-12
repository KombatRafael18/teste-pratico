import { useState } from 'react'
import styles from './Form.module.css'
import PopUp from './popUp.js';
import api from './api.js';
import axios from 'axios';

function Form() {
    const [showPopup, setShowPopup] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [date, setDate] = useState ('')
    const [dogPequeno, setDogPequeno] = useState ('')
    const [dogGrande, setDogGrande] = useState ('')
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(`Usuário cadastrou a data ${date} com ${dogPequeno} cachorros pequenos e ${dogGrande} cachorros grandes`)
        
        
        api.get('calcular').then(res => {
            if('res.data.mensage') {
            setMensagem(res.data);
            setShowPopup(true);
            } else{
                console.error('Erro ao obter a mensagem da API.');
            }
        })

        try {
            const response = await axios.post('http://localhost:5000/calcular', {
                dogPequeno,
                dogGrande,
                date
        });
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao enviar dados para o servidor:', error);
        }
    }


    const handleDogPequenoChange = (e) => {
        const inputDogPequeno = parseInt(e.target.value);
    
        if (inputDogPequeno < 0) {
          setDogPequeno(0);
        } else {
          setDogPequeno(inputDogPequeno);
        }
      };

      const handleDogGrandeChange = (e) => {
        const inputDogGrande = parseInt(e.target.value);
    
        if (inputDogGrande < 0) {
          setDogGrande(0);
        } else {
          setDogGrande(inputDogGrande);
        }
      };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}> Procurador de petshop</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor='date' className={styles.label}> Digite a data dos banhos: </label>
                    <input 
                        type="date" 
                        className={styles.input}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="numberInput" className={styles.label}>Digite quantos cachorros pequenos vão tomar banho: </label>
                    <input 
                        type="number" 
                        id='numberInput'
                        className={styles.input}
                        value={dogPequeno}
                        placeholder="Digite um número" 
                        onChange={handleDogPequenoChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="numberInput" className={styles.label}>Digite quantos cachorros grandes vão tomar banho: </label>
                    <input 
                        type="number" 
                        id='numberInput'
                        className={styles.input}
                        value={dogGrande}
                        placeholder="Digite um número"
                        onChange={handleDogGrandeChange} 
                    />
                </div>
                <div className={styles.Button}>
                    <input type="submit" value={"Enviar"} className={styles.submitButton} />
                </div>
            </form>
            {showPopup && <PopUp message={mensagem} onClose={() => setShowPopup(false)} />}
        </div>
    )
}

export default Form