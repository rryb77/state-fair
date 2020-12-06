const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", e => {
    if (e.target.id === 'rideTicket') {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                rideThatWasChosen: e.target.value
            }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})

//Listen for the click
eventHub.addEventListener("click", e => {
    //if button that was clicked has an ID of "foodTicket" then..
    if(e.target.id === 'foodTicket') {
        //Create CustomEvent of foodTicketPurchased
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                //foodThatWasChosen has the value of the selection
                foodThatWasChosen: e.target.value
            }
        })
        //Broadcast the custom event
        eventHub.dispatchEvent(foodEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
        </div>
    `
}

