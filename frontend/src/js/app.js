document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");

  fetch("http://localhost:5555/movies")
    .then(response => response.json())
    .then(data => {
      data.forEach(movie => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${movie.title}</td>
          <td><img src="${movie.poster}" alt="${movie.title}" width="100"></td>
          <td>${movie.overview}</td>
          <td><button data-id="${movie.id}" class="btn-saiba-mais">Saiba Mais</button></td>
        `;
        tableBody.appendChild(row);
      });
      
      const saibaMaisButtons = document.querySelectorAll(".btn-saiba-mais");
      saibaMaisButtons.forEach(button => {
        button.addEventListener("click", handleSaibaMaisClick);
      });
    })
    .catch(error => console.error("Erro ao buscar filmes:", error));
});

function handleSaibaMaisClick(event) {
  const movieId = event.target.getAttribute("data-id");
  window.location.href = `movie.html?id=${movieId}`;
}
