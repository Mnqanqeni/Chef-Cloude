import React,{useState} from "react"

export default function Main(){
    const [ingredient,setIngredient] = useState([])
    const IngredientHtml=ingredient.map((val,index)=><li key={index}>{val}</li>)
    console.log(IngredientHtml)
    const addItem =(event)=>{
        event.preventDefault();
        console.log(event)
        const formData= new FormData(event.target)
        setIngredient((prevIngredient)=>[...prevIngredient, formData.get("input")])
        event.target.reset();
       
    }
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={addItem}>
            <input type="text" name="input" placeholder="e.g orange" required></input>
            <button >Add Ingredient</button>
            </form>
            <h1>list of ingredient</h1>
            <ul>
            {IngredientHtml}
            </ul>
            
        </main>
    )
}