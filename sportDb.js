const searchText =()=>{
     const searchText = document.getElementById('searchText').value;
     console.log(searchText);
     if(searchText == '') {
          const noText = document.getElementById('noText')
          noText.style.display = 'block';
          }else{ const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`
          fetch(url)
          .then(res => res.json())
          .then(data => displayPlayerBySearch(data.player))
     }
     document.getElementById('searchText').value = '';
    
}
const displayPlayerBySearch = (players) => {
     const searchPlayersResults = document.getElementById('searchPlayersResults');
     searchPlayersResults.textContent ='';
     // console.log(players)
     players.forEach(player => {
     console.log(player.strInstagram)

          const div = document.createElement('div');
          div.classList.add('card');
          div.innerHTML = `
          <div class="card"><img src="${player.strThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${player.strPlayer}</h5>
            <p class="card-text">${player.strDescriptionEN.slice(0,150)}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Sport Name : ${player.strSport}</li>
            <li class="list-group-item"> Club : ${player.strTeam}</li>
            <li class="list-group-item">Nationality : ${player.strNationality}</li>
          </ul>
          
          `
          searchPlayersResults.appendChild(div);
     })
     
}


const loadSports = () => {
     fetch(`https://www.thesportsdb.com/api/v1/json/2/all_sports.php`)
     .then(res => res.json())
     .then(data => displaySports(data.sports))
}
loadSports();

const displaySports = sports => {
     const sportsContainer = document.getElementById('sportsContainer');

     sports.forEach((sport) => {
          // console.log(sport)
          const div = document.createElement('div');
          div.classList.add('col')
          div.innerHTML = `
               <div class="card">
                   <img src="${sport.strSportThumb}" class="card-img-top" alt="...">
                   <div class="card-body">
                     <h5 class="card-title">${sport.strSport}</h5>
                     <p class="card-text">${sport.strSportDescription.slice(0,100)}</p>
                   </div>
               </div>
          `
          sportsContainer.appendChild(div);
     })
    
}
