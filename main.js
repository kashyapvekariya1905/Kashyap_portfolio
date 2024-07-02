import "./style.css";
import Experience from "./Experience/Experience.js";

const experience = new Experience(document.querySelector(".experience-canvas"));

async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills2.json"))
    : (response = await fetch("./projects/projects.json"));
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
          <div class="bar">
                <div class="info">
                  <img src=${skill.icon} alt="skill" />
                  <span>${skill.name}</span>
                </div>
              </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

fetchData().then((data) => {
  showSkills(data);
});

srtop.reveal(".skills .container", { interval: 200 });
srtop.reveal(".skills .container .bar", { delay: 400 });
