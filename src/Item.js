import React from 'react'
import trash from './trash.svg'
import pencil from './pencil.svg'

function Item({ item, remove, update }) {
    const { id, value } = item
    return (
        <li className="item" key={id} >
            <p>{value}</p>
            <div className="btns_container">
                <button className='btn' onClick={() => remove(id)}>
                    <img src={trash} alt="trash"  />
                </button>
                <button className='btn' onClick={() => update(id)}>
                    <img src={pencil} alt="" />
                </button>
            </div>
        </li>
    )
}

export default Item
