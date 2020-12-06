const eventHub = document.querySelector("#state-fair")
let arrayOfTargets = [".games", ".rides", ".sideshow", ".food"]

export const FullTicketHolders = () => {
    eventHub.addEventListener("fullTicketPurchased", customEvent => {
        
        for (let i = 0; i < arrayOfTargets.length; i++) {
            let contentTarget = document.querySelector(arrayOfTargets[i])
            contentTarget.innerHTML += `<div class="person bigSpender"></div>`
        }
        
    })
}