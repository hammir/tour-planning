import "./Tours.css";
import Card from './Card';

function Tours({tours , removeTour})
{
return (
    <div className="container">

        <div>
            <h1 className="title">Plan Tour With Hammir</h1>
        </div>

        <div className="cards">
            {
                tours.map( (tour) =>{
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card> //sending a copy of tour using ... spread operator
                }
                )
            }
        </div>
    </div>
)
}

export default Tours;