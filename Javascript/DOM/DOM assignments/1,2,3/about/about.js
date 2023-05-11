let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

document.querySelector('header nav ul').children[2].innerText = 'Projects'
document.querySelectorAll('.accordian')[2].children[1].style.display = 'block'
document.querySelectorAll('.accordian')[3].children[1].style.display = 'block'

skill_h3 = document.createElement('h3')
skill_h3.textContent = 'Skills'

skill_p = document.createElement('p')
skill_p.style.display = 'block'
skill_p.textContent = 'I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github'


skill_div = document.createElement('div')
skill_div.className = 'accordian'
//Appending heading 3
skill_div.appendChild(skill_h3)

//appending paragraph
skill_div.appendChild(skill_p)

//Finally appending local DIV
document.querySelector('.accordian-wrapper').appendChild(skill_div)


