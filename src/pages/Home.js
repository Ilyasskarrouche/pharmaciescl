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
    const [gardes,setGardes] = React.useState([])
    const [pharmacies,setPharmacies] = React.useState([])
    const [zone,setZone] = React.useState(0)


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

    function gardeSelected(garde_id){
        // ID ZONE + ID GRADE = PHARMACIES OF GARD AND ZONE
        if(garde_id == ""){
            fetch("http://localhost:9090/villes/all")
            .then(res=>res.json())
            .then((result)=>{
              setZones([]);
              setVilles(result)
              setPharmacies([])
            })
        }else{
            console.log("http://localhost:9090/pharmacies/gardeAndZoneId/"+garde_id+"/"+zone)
             fetch("http://localhost:9090/pharmacies/gardeAndZoneId/"+garde_id+"/"+zone)
        .then(res=>res.json())
        .then((result)=>{console.log(result)
          setPharmacies(result);
        })
        }
       
    }

    function zoneSelected(zone_id){
    console.log(zone_id)
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

      fetch("http://localhost:9090/gardes/all")
      .then(res=>res.json())
      .then((result)=>{
        setGardes(result);
      }
    )
      },[])
    

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
                   <select class="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={(e)=>{zoneSelected(e.target.value);setZone(e.target.value)}} >
                    <option selected="" value={""}></option>
                    {
                    zones.map(v =>(<option value={v.id}>{v.nom}</option>) 
                    )}
                    </select> 
                    <label for="floatingSelect">Zones</label>
                </div>
            </div>
            <div className="col-lg-4">
                <div class="form-floating mb-3"> 
                   <select class="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={(e)=>{gardeSelected(e.target.value)}} >
                    <option selected="" value={""}></option>
                    {
                    gardes.map(v =>(<option value={v.idGarde}>{v.type}</option>) 
                    )}
                    </select> 
                    <label for="floatingSelect">Types des gardes</label>
                </div>
            </div>
            
                </div>
        <div className="row">
        <div>
            
            <PharmaciesList pharmacies={pharmacies} gardes={gardes}/>
        
            
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