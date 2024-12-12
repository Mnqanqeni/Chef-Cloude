import Header from "./componets/Header";
import Main from "./componets/Main";
import ClaudeRecipe from "./componets/CloudeRecipe";
import React, { useState } from "react";
export default function App(){
  const [ingredient, setIngredient] = useState([])
  return(
    <>
    <Header/>
    <Main ingredient={ingredient} setIngredient={setIngredient}/>
    <ClaudeRecipe/>
    </>
  )
}

