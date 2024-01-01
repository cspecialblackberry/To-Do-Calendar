// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar DONE

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours of 9am to 5pm DONE 

// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future DONE

// WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

let currentDateDisplayP = document.querySelector("#currentDay") 
let hour9Div = document.querySelector('#hour-9')
let hour10Div = document.querySelector('#hour-10')
let hour11Div = document.querySelector('#hour-11')
let hour12Div = document.querySelector('#hour-12')
let hour1Div = document.querySelector('#hour-1')
let hour2Div = document.querySelector('#hour-2')
let hour3Div = document.querySelector('#hour-3')
let hour4Div = document.querySelector('#hour-4')
let hour5Div = document.querySelector('#hour-5')

const hourDivArray = [hour9Div, hour10Div, hour11Div, hour12Div, hour1Div, hour2Div, hour3Div, hour4Div, hour5Div]
const hourDivIndex = [9, 10, 11, 12, 13, 14, 15, 16, 17]
let i = 0

const applyTextAreaColor = (number) => {
    if(number < dayjs().hour()){
        hourDivArray[i].setAttribute('class', 'row time-block past')
    }else if (number = dayjs().hour()){
        hourDivArray[i].setAttribute('class', 'row time-block present')
    }else{
        hourDivArray[i].setAttribute('class', 'row time-block future')
    }
    i++
}
hourDivIndex.forEach(applyTextAreaColor)

currentDateDisplayP.innerHTML = dayjs().format('DD/MM/YYYY')
