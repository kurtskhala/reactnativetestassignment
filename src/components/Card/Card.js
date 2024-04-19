import './Card.css'
function Card(props) {
    return (
        <div className='card'>
            <h1>{props.data.name}</h1>
            <p>{props.data.body}</p>
            <button>Delete</button>
        </div>
    );
}

export default Card;