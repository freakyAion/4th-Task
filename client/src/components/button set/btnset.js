import { Link } from 'react-router-dom';
import './btnset.css';

export function ButtonSet({name, id}){
    return <li className='list-set_item'>
        <Link className='list-set_btn' to={`/set/${id}`} state={{set: name}}>
            <p>{name}</p>
        </Link>
    </li>
}