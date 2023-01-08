
export default function PharmaciesList(props) {
    const pharmacies = props.pharmacies;

    return (
        <div>
            <div class="card" > 
                 
                <div class="card-body">
                    <h5 class="card-title">List Of Pharmacies</h5>
      {
            pharmacies.map(p=>
                
                    <div class="list-group" key={p.id}>
                        <a href="#" class="list-group-item list-group-item-action " aria-current="true"><div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{p.nom}</h5>
                            <small></small>
                        </div>
                            <p class="mb-1">ADRESSE: {p.adresse}</p>
                            <small>LATITUDE: {p.lat}</small><br/>
                            <small>LONGITUDE: {p.log}</small>
                        </a>
                    </div>
               
            )
        }
             </div>
            </div>
        </div>
  
      
    )
}