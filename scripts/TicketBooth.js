// Set the contentTarget to the .entry class of the DOM to place the buttons where I need them to go
const contentTarget = document.querySelector(".entry");

// Set the customerTarget to the .customer class of the DOM to place the ticket count where I need it to go
const customerTarget = document.querySelector(".customers");

// The agreed upon eventHub is listening on the ID of '#state-fair'
const eventHub = document.querySelector("#state-fair");

// Initialize the ticketCount variable
let ticketCount = 0;

// Increase the ticket count when a ticket is purchased
export const ticketUpdater = () => {
    
    // Update the ticketCount by 1 each time a ticket is purchased
    ticketCount += 1;

    // Send the update to the DOM
    customerTarget.innerHTML = `Total tickets purchased: ${ticketCount}`;
};

// Populate the DOM with buttons and the initial ticket count
export const TicketBooth = () => {
    
    // Add buttons to the DOM with unique IDs to be used by the event listener
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullTicket">Full Package Ticket</button>
        </div>
    `;

    // Add the initial ticket count (0) to the DOM
    customerTarget.innerHTML = `Total tickets purchased: ${ticketCount}`;
};

// Setup the event listener to broadcast an event when a button is clicked
eventHub.addEventListener("click", e => {
    
    // If button clicked has an id of 'rideTicket' then..
    if (e.target.id === 'rideTicket') {
        // Create the CustomEvent of rideTicketPurchased
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                // rideThatWasChosen has the value of the selection
                rideThatWasChosen: e.target.value
            }
        });
        // Broadcast the custom event
        eventHub.dispatchEvent(rideEvent);
      
    // If button clicked has an ID of 'foodTicket' then..
    } else if (e.target.id === 'foodTicket') {
        // Create CustomEvent of foodTicketPurchased
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                // foodThatWasChosen has the value of the selection
                foodThatWasChosen: e.target.value
            }
        });
        // Broadcast the custom event
        eventHub.dispatchEvent(foodEvent);

    // If the button clicked has an ID of 'gameTicket' then..
    } else if (e.target.id === 'gameTicket') {
        // Create CustomEvent of gameTicketPurchased
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                //gameThatWasChosen has the value of the selection
                gameThatWasChosen: e.target.value
            }
        });
        // Broadcast the custom event
        eventHub.dispatchEvent(gameEvent);
    
    // If the button clicked has an ID of 'sideshowTicket' then..
    } else if (e.target.id === 'sideshowTicket') {
        // Create CustomEvent of sideshowTicketPurchased
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                // sideshowThatWasChosen has the value of the selection
                sideshowThatWasChosen: e.target.value
            }
        });
        // Broadcast the custom event
        eventHub.dispatchEvent(sideshowEvent);

    // If the button clicked has an ID of 'fullTicket' then..    
    } else if (e.target.id === 'fullTicket') {
        const fullTicketEvent = new CustomEvent("fullTicketPurchased", {
            detail: {
                // fullTicketThatWasChosen has the value of the selection
                fullTicketThatWasChosen: e.target.value
            }
        });
        // Broadcast the custom event
        eventHub.dispatchEvent(fullTicketEvent);
    };
});