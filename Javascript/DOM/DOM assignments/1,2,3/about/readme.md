# DOM Assignment 2
## Task 1: 
1. Change contact menu to Projects menu
2. Show Achievement ,hobbies paragraph

![task1output](../secondAssignmentImage/task1Output.png)

## Code output
```
document.querySelector('header nav ul').children[2].innerText = 'Projects'

document.querySelectorAll('.accordian')[2].children[1].style.display = 'block'

document.querySelectorAll('.accordian')[3].children[1].style.display = 'block'

```

## Task 2: 
1. Add skills as heading in accordian div
2. Add explanation paragraph about possessed skills

![task1output](../secondAssignmentImage/task2Output.png)

## Code output
```
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

```