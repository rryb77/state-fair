const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        // console.log('ticket purchased listener works!'
        contentTarget.innerHTML += `<div class="person rider"></div>`
    })
}

