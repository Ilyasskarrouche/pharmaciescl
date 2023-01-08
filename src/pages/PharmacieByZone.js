import Main from "../components/Main";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { MapContainer, TileLayer,Marker,Popup, useMap } from 'react-leaflet'
import Map from "../components/Map";
import RightSide from "../components/RightSide";
import * as React from 'react';
import PharmaciesList from "../components/PharmaciesList";






export default function Home(){
    const [villes,setVilles] = React.useState([])
    const [zones,setZones] = React.useState([])
    const [pharmacies,setPharmacies] = React.useState([])

    function villeSelected(ville_id){
        console.log(ville_id)
        if(ville_id == ""){
            fetch("http://localhost:9090/villes/all")
            .then(res=>res.json())
            .then((result)=>{
              setZones([]);
              setVilles(result)
            })
        }else{
             fetch("http://localhost:9090/villes/zonesbyville/"+ville_id)
        .then(res=>res.json())
        .then((result)=>{
          setZones(result);
        })
        }
       
    }

    function zoneSelected(zone_id){
      if(zone_id == ""){

      }else{
            fetch("http://localhost:9090/zones/phByZone/"+zone_id)
            .then(res=>res.json())
            .then((result)=>{
             setPharmacies(result);
            })
      }
      
        
    }
   
    React.useEffect(()=>{
        fetch("http://localhost:9090/villes/all")
        .then(res=>res.json())
        .then((result)=>{
          setVilles(result);
          console.log(villes)
        }
      )
      },[])
    
    const position = [51.505, -0.09];

return(
<>

<Main>
   <RightSide>
        <Map pharmacies={pharmacies}/>
    </RightSide>
    <div className="col-lg-6">
        <div className="row">
        
        
          <div className="col-lg-4">
          <div class="form-floating mb-3"> 
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={(e)=>villeSelected(e.target.value)}>
            <option selected="" value=""></option>
            {
            villes.map(v =>(<option value={v.id} >{v.nom}</option>) 
            )}
            </select> 
            <label for="floatingSelect">Villes</label>
        </div>
        </div>
        
            <div className="col-lg-4">
                <div class="form-floating mb-3"> 
                   <select class="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={(e)=>{zoneSelected(e.target.value);console.log(pharmacies)}} >
                    <option selected="" value={""}></option>
                    {
                    zones.map(v =>(<option value={v.id}>{v.nom}</option>) 
                    )}
                    </select> 
                    <label for="floatingSelect">Zones</label>
                </div>
            </div>
            <div className="col-lg-4">
            <button class="btn btn-light rounded-pill "><i class='bx bx-search-alt'></i></button>
            </div>
                </div>
        <div className="row">
        <div>
            
            {pharmacies.map(p=>{
                 <div class="card" key={p.id}>
                <div class="card-body">
                    <h5 class="card-title">List Of Pharmacies</h5>
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action " aria-current="true"><div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                            <small>And some small print.</small>
                        </a>
                    </div>
                </div>
            </div>
            })}

           
            
        
            
        </div>
        </div>

        </div>

       
     



    {/* <PharmaciesList pharmacies={pharmacies}/> */}
   
   

    
  
</Main>
<NavBar/>
<SideBar/>


</>
)
}