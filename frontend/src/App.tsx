import data from './CollegeBasketballTeams.json';
import './App.css'


console.log("HEY LOOK AT ME", data)

function Welcome(){
  return(<h1>This is THEE march madness page!!! (something I could NOT care less about!!!)</h1>);
}


function TeamInfo({School, mascot, city ,state} : {School: string; mascot:string; city:string; state:string}){

  return(
    <>
      <img />
      <h2>------{School}------</h2>
      <h3>The Mascot is... {mascot}!</h3>
      <h3>Location: {city}, {state}</h3>
    </>
  );
}

// Show all teams
function AllTeams(){
  return(
    // These are react cragments, it fuctions like a div
    <> 
      {/* THIS is like a loop  */}
      {data.teams.map((team) => (
        // this is different because the code is ONLY looking for what I listed. also it clearly shows the property and varial realtion
        <TeamInfo  School={team.school} mascot={team.name} city={team.city} state={team.state}/>
      ))}
      </>

  )
}


function App() {


  return (
    <>
      <Welcome />
      <h2>-------------------------------------All Teams-------------------------------------------</h2>
      <AllTeams />
    </>
  )
}

export default App
