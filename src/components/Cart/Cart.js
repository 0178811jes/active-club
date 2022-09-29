import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useState } from 'react';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    const {count} =props;

    const [ cart, setCart] = useState([])
    
    const [value, setValue] =useState(0);

    const handlerBreakButton=(value)=>{
        localStorage.setItem('breakTime',value);
        const getTime=localStorage.getItem('breakTime');
        setValue(value);
    }
    
    

    let total= 0;
    for(const player of count){
        
        total = total + player.time;
    }

    const handlerActivity =()=>{
        toast ("wow Good Job");
    }

    return (
        <div className='container'>
            <div className='biodata'>
                <h4>Jesmin Ara</h4>
                <p>I lives in Dhaka</p>
                <p>My home district in Rajshahi</p>
            </div>
            <div>
                <h3>Add A Break</h3>
                <div className='btn-click'>
                    <button onClick={()=> handlerBreakButton(10)}>10m</button>
                    <button onClick={()=> handlerBreakButton(20)}>20m</button>
                    <button onClick={()=> handlerBreakButton(30)}>30m</button>
                    <button onClick={()=> handlerBreakButton(40)}>40m</button>

                </div>
                <div>
                    <h2>Exercise Details</h2>
                    <div>
                        <h4>Exercise Time:{total}m</h4>
                    </div>


                    <div className='breaktime'>
                    <h4>Break Time:{value || localStorage.getItem('breakTime')} m</h4>
                    </div>

                    <button onClick={handlerActivity} className='btn-activity'>
                        <p>Activity Complited</p>
                    </button>
                    <ToastContainer></ToastContainer>
                </div>

            </div>
        </div>
    );
};

export default Cart;