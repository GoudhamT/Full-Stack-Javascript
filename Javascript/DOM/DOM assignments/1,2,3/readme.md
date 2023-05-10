# DOM Assignments 
## Task 1: 
1. Add Hire Me option in header navigation
2. Change contact menu to Projects menu
3. Remove github , linkedin, instagrams icon from footer section

![task1output](./firstAssignmentImage/task1Output.png)

## Code output
```
let hire_li = document.createElement('li')

hire_li.textContent = 'Hire Me'

document.querySelector('header nav ul').appendChild(hire_li)

document.querySelector('header nav ul').children[2].innerText = 'Projects'

document.querySelector('footer ul').remove()

```

## Task 2: 
1. Change contact menu to Projects menu
2. Remove github , linkedin, instagrams icon from footer section

![task1output](./firstAssignmentImage/task2Output.png)

## Code output
```
document.querySelector('header nav ul').children[2].innerText = 'Projects'

search_projects = document.body.getElementsByTagName('input')[0]

search_projects.placeholder = 'Search My Project'

document.querySelector('footer ul').remove()

```
## Task 3: 
1. Change contact menu to Projects menu
2. In cover note paragraph change text **freelancer** to **an Employee** 
3. In cover note paragraph change text **National and International client** to **iNeuron Intelligence pvt ltd** 

![task1output](./firstAssignmentImage/task3Output.png)

## Code output
```
document.querySelector('header nav ul').children[2].innerText = 'Projects'

para_chn = document.querySelectorAll('p span')
      
para_chn.forEach(desg)

function desg(span_txt)
{
    if(span_txt.innerText == 'a Freelancer')
        {
          span_txt.innerText = 'an Employee'
        }
    else if(span_txt.innerText == 'National and International Client')
        {
          span_txt.innerText = 'iNeuron Intelligence Pvt Ltd'
        }
      }

```   


## Task 4: 
1. Change contact menu to Projects menu
2. Upload photo in page  

![task1output](./firstAssignmentImage/task4Output.png)

## Code output
```
document.querySelector('header nav ul').children[2].innerText = 'Projects'

myimg = document.getElementsByClassName('hero-right-section')[0].firstElementChild

myimg.src = 'https://media.licdn.com/dms/image/C5103AQHfio3Oi6rYfQ/profile-displayphoto-shrink_400_400/0/1516897361924?e=1689206400&v=beta&t=U0mmJfV8dx-UbCukYk8Ox_zL77TBPSEDuwmck0HbMfA'

```   

## Task 5: 
1. Change contact menu to Projects menu
2. Add button **Support Me** next to Chat with Me option  

![task1output](./firstAssignmentImage/task5Output.png)

## Code output

```
document.querySelector('header nav ul').children[2].innerText = 'Projects'

mybtn = document.createElement('button')
mybtn.innerText = 'Support Me'

document.getElementsByClassName('hero-right-section-btns')[0].appendChild(mybtn)
```