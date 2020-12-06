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

eventHub.addEventListener("click", e => {
    //if button that was clicked has an ID of "gameTicket" then..
    if(e.target.id === 'gameTicket') {
        //Create CustomEvent of gameTicketPurchased
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                //gameThatWasChosen has the value of the selection
                gameThatWasChosen: e.target.value
            }
        })
        //Broadcast the custom event
        eventHub.dispatchEvent(gameEvent)
    }
})

eventHub.addEventListener("click", e => {
    //if button that was clicked has an ID of "sideshowTicket" then..
    if(e.target.id === 'sideshowTicket') {
        //Create CustomEvent of sideshowTicketPurchased
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                //gameThatWasChosen has the value of the selection
                sideshowThatWasChosen: e.target.value
            }
        })
        //Broadcast the custom event
        eventHub.dispatchEvent(sideshowEvent)
    }
})


// Add buttons to the DOM with unique IDs to be used by the event listener
export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}

