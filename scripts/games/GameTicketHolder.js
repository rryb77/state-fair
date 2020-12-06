const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        console.log('it works!')
        contentTarget.innerHTML += `<div class="person player"></div>`
    })
}