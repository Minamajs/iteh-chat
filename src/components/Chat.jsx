import React, { useState } from 'react'
import Poruka from './Poruka'

export default function Chat(props) {
    const [poruka, setPoruka] = useState('');
    return (
        <div className='container'>
            <div className='row mt-2 mb-5'>
                <h1> Vase poruke</h1>
            </div>
            {
                props.poruke.length === 0 ? (
                    <div className='row mt-2'>
                        <h2>Nemate ni jednu poruku</h2>
                    </div>
                ) : (
                        props.poruke.map(element => {
                            return (
                                <Poruka text={element.text} you={element.prvi === props.prvi} />
                            )
                        })
                    )
            }
            <div className='row mt-5'>
                <div className='col-12'>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        props.dodajPoruku(poruka, props.prvi);
                    }} >
                        <input type="text" value={poruka} onChange={(e) => {
                            const value = e.target.value;

                            setPoruka(value);

                        }} className='form-control' />


                    </form>
                </div>
            </div>
        </div>
    )
}
