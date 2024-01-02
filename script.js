let currentDateDisplayP = document.querySelector('#currentDay') 
let hour9Div = document.querySelector('#hour-9')
const hour9Button = document.querySelector('#hour-9-button')
let hour9TextArea = document.querySelector('#hour9TextArea')
let hour10Div = document.querySelector('#hour-10')
const hour10Button = document.querySelector('#hour-10-button')
let hour10TextArea = document.querySelector('#hour10TextArea')
let hour11Div = document.querySelector('#hour-11')
const hour11Button = document.querySelector('#hour-11-button')
let hour11TextArea = document.querySelector('#hour11TextArea')
let hour12Div = document.querySelector('#hour-12')
const hour12Button = document.querySelector('#hour-12-button')
let hour12TextArea = document.querySelector('#hour12TextArea')
let hour1Div = document.querySelector('#hour-1')
const hour1Button = document.querySelector('#hour-1-button')
let hour1TextArea = document.querySelector('#hour1TextArea')
let hour2Div = document.querySelector('#hour-2')
const hour2Button = document.querySelector('#hour-2-button')
let hour2TextArea = document.querySelector('#hour2TextArea')
let hour3Div = document.querySelector('#hour-3')
const hour3Button = document.querySelector('#hour-3-button')
let hour3TextArea = document.querySelector('#hour3TextArea')
let hour4Div = document.querySelector('#hour-4')
const hour4Button = document.querySelector('#hour-4-button')
let hour4TextArea = document.querySelector('#hour4TextArea')
let hour5Div = document.querySelector('#hour-5')
const hour5Button = document.querySelector('#hour-5-button')
let hour5TextArea = document.querySelector('#hour5TextArea')

const hourDivArray = [hour9Div, hour10Div, hour11Div, hour12Div, hour1Div, hour2Div, hour3Div, hour4Div, hour5Div]
const hourIndex = [9, 10, 11, 12, 13, 14, 15, 16, 17]
const textAreaArray = [hour9TextArea, hour10TextArea, hour11TextArea, hour12TextArea,hour1TextArea,hour2TextArea,hour3TextArea,hour4TextArea,hour5TextArea]
let taskIndex

currentDateDisplayP.innerHTML = dayjs().format('MM/DD/YYYY')

//checks if each text area's corresponding hour is equal to or greater than the current hour and sets the corresponding class.
//past is default
const applyTextAreaColor = (number, index) => {
    if (number === dayjs().hour()){
        hourDivArray[index].setAttribute('class', 'row time-block present')
    }else if (number > dayjs().hour()){
        hourDivArray[index].setAttribute('class', 'row time-block future')
    }
}

hourIndex.forEach(applyTextAreaColor)

//gets the corresponding local storage item and puts it on the page for each text area
const setSavedTasks = (textArea, index) => textArea.value = localStorage.getItem('Task' + hourIndex[index])

textAreaArray.forEach(setSavedTasks)

//returns text area with matching first class to the event target
const textAreaClassCheck = (textArea) => textArea.classList[0]===taskIndex

//pulls an index from the event target and calls for a text area with a matching index
//then sets a corresponding local storage item of the user's input
const saveTask = (event) => {
    taskIndex = event.target.classList[0]
    inputTextArea = textAreaArray.find(textAreaClassCheck)
    localStorage.setItem('Task' + taskIndex, inputTextArea.value)
}

hour9Button.addEventListener('click', saveTask)
hour9Button.addEventListener('touch', saveTask)
hour10Button.addEventListener('click', saveTask)
hour10Button.addEventListener('touch', saveTask)
hour11Button.addEventListener('click', saveTask)
hour11Button.addEventListener('touch', saveTask)
hour12Button.addEventListener('click', saveTask)
hour12Button.addEventListener('touch', saveTask)
hour1Button.addEventListener('click', saveTask)
hour1Button.addEventListener('touch', saveTask)
hour2Button.addEventListener('click', saveTask)
hour2Button.addEventListener('touch', saveTask)
hour3Button.addEventListener('click', saveTask)
hour3Button.addEventListener('touch', saveTask)
hour4Button.addEventListener('click', saveTask)
hour4Button.addEventListener('touch', saveTask)
hour5Button.addEventListener('click', saveTask)
hour5Button.addEventListener('touch', saveTask)

