import React from 'react'

export default function Poruka(props) {
    console.log(props.you);
    return (
        <div className={'row mt-2 mb-5 d-flex' + (props.you) ? 'justify-content-end' : 'justify-content-start'} >
            <div className='col-12' >
                <h3 className={props.you ? 'text-right' : 'text-left '} >{props.text}</h3>
            </div>
        </div>
    )
}
