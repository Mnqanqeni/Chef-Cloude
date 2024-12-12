

export default function Main(props) {
    const IngredientHtml = props.ingredient.map((val, index) => <li key={index}>{val}</li>)
    const addItem = (event) => {
        event.preventDefault();
        console.log(event)
        const formData = new FormData(event.target)
        props.setIngredient((prevIngredient) => [...prevIngredient, formData.get("input")])
        event.target.reset();

    }
    return (
        <main>
            <div>
                <form className="add-ingredient-form" onSubmit={addItem}>
                    <input type="text" name="input" placeholder="e.g orange" required></input>
                    <button >Add Ingredient</button>
                </form>
                {props.ingredient.length ? <section className="main-section">
                    <div className="content">
                        <h1>Ingredents on hand:</h1>
                        <ul className="ingredients-list">
                            {IngredientHtml}
                        </ul>
                    </div>
                    {props.ingredient.length>=4?<div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button>Get a recipe</button>
                    </div>:null}
                    
                </section> : null 
                }

            </div>
        </main>
    )
}