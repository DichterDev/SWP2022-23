let wrapper = document.getElementById("wrapper");

var myHeaders = new Headers();
myHeaders.append("X-AUTH-TOKEN", "cbba90aa300f4c83a3b173779f717fb7");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let list_teams = []

fetch('https://api.football-data.org/v2/teams', requestOptions)
  .then(response => response.json())
  .then(data => {
    console.log(data.teams.length)
  })

/*
async () => {
  await fetch('https://api.football-data.org/v2/teams', requestOptions)
  .then(response => response.json())
  .then(teams => {
    teams.forEach(team => {
      fetch(`https://api.football-data.org/v2/teams/${team.id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        list_teams.push(data)
      })
    })
  })
  console.log(list_teams.length)
}
*/
/*
fetch("https://api.football-data.org/v2/competitions/WC/matches", requestOptions)
.then(response => response.json())
.then((data) => {
  data.matches.map(match => {
    console.log(match.homeTeam.name + " vs " + match.awayTeam.name);
    console.log(match)
  });
});

fetch("https://api.football-data.org/v2/matches", requestOptions)
.then(response => response.json())
.then(data => {
  console.log(data);
})
*/
/*
fetch('https://api.football-data.org/v2/competitions/WC/teams', requestOptions)
.then(response => response.json())
.then(data => {
  data.teams.forEach(team => {
    fetch(`https://api.football-data.org/v2/teams/${team.id}`, requestOptions)
    .then(response => response.json())
    .then(data => {
      data.squad.forEach(player => {
        fetch(`https://api.football-data.org/v3/persons/${player.id}`)
        .then(response => response.json())
        .then(player => {
          fetch(`https://api.football-data.org/v2/teams`, requestOptions)
          .then(response => response.json())
          .then(teams => {
            teams.forEach(team => {
              team.squad.find()
            })
          })
        })
      })
    })
  })
})
*/