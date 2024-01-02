// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar DONE

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours of 9am to 5pm DONE 

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future DONE

// WHEN I click into a time block
// THEN I can enter an event DONE

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage DONE

// WHEN I refresh the page
// THEN the saved events persist DONE

let currentDateDisplayP = document.querySelector("#currentDay") 
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
const hourDivIndex = [9, 10, 11, 12, 13, 14, 15, 16, 17]
const textAreaArray = [hour9TextArea, hour10TextArea, hour11TextArea, hour12TextArea,hour1TextArea,hour2TextArea,hour3TextArea,hour4TextArea,hour5TextArea]
let taskIndex

currentDateDisplayP.innerHTML = dayjs().format('MM/DD/YYYY')

const applyTextAreaColor = (number, index) => {
    // if(number < dayjs().hour()){
    //     hourDivArray[index].setAttribute('class', 'row time-block past')
    if (number === dayjs().hour()){
        hourDivArray[index].setAttribute('class', 'row time-block present')
    }else if (number > dayjs().hour()){
        hourDivArray[index].setAttribute('class', 'row time-block future')
    }
}

hourDivIndex.forEach(applyTextAreaColor)

const setSavedTasks = (textArea, index) => {
    textArea.value = localStorage.getItem('Task' + hourDivIndex[index])
}

textAreaArray.forEach(setSavedTasks)

const textAreaClassCheck = (textArea) => {
    return textArea.classList[0]===taskIndex
}

const saveTask = (event) => {
    taskIndex = event.target.classList[0]
    inputTextArea = textAreaArray.find(textAreaClassCheck)
    localStorage.setItem('Task' + taskIndex, inputTextArea.value)
}

hour9Button.addEventListener('click', saveTask)
hour10Button.addEventListener('click', saveTask)
hour11Button.addEventListener('click', saveTask)
hour12Button.addEventListener('click', saveTask)
hour1Button.addEventListener('click', saveTask)
hour2Button.addEventListener('click', saveTask)
hour3Button.addEventListener('click', saveTask)
hour4Button.addEventListener('click', saveTask)
hour5Button.addEventListener('click', saveTask)

