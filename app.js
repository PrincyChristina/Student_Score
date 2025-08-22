function addScore() {
  const name = document.getElementById("studentName").value.trim();
  const score = document.getElementById("studentScore").value.trim();
  if (!name || score === "") return;

  const entry = `${name}: ${score}`;
  const li = document.createElement("li");
  li.textContent = entry;
  document.getElementById("scoreList").appendChild(li);

  document.getElementById("studentName").value = "";
  document.getElementById("studentScore").value = "";
}