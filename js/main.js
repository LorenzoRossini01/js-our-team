const resultEl = document.getElementById("result");

for (let i = 0; i < team.length; i++) {
  console.log(team[i].name, team[i].role, team[i].image);

  let resultHtml = ` 
  <div class="col">
    <div class="card border-0">
        <img src="./img/${team[i].image}" alt="" />
        <h2 class="fs-4 my-3">${team[i].name}</h2>
        <p class="fs-6 mb-3">${team[i].role}</p>
    </div>
   </div>
  `;
  resultEl.innerHTML += resultHtml;
}
