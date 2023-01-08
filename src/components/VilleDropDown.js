import * as React from 'react';


export default function VilleDropDown(){

    

    return(
        <>
         <div className="col-lg-3">
        <div class="form-floating mb-3"> 
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected=""></option><option value="1">One</option>
            <option value="2">Two</option><option value="3">Three</option>
            </select> 
            <label for="floatingSelect">Villes</label>
        </div>
        </div>
        </>
    )
}