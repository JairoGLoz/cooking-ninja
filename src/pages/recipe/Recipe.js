// styles
import './Recipe.css'
import {Link, useHistory, useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import {useEffect} from "react";

export default function Recipe() {

    // Current location in the browser
    const {id} = useParams();

    const {data: recipe, isPending, error} = useFetch('http://localhost:4000/recipes/'+id)

    const history = useHistory();

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history.push("/");
            }, 2000)
        }
    }, [error, history])

    return (
        <div className="recipe">
            {isPending && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            {recipe && (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </>
            )}
        </div>
    )
}