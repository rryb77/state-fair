import { ticketUpdater } from "../TicketBooth.js"

// Set the contentTarget to the class of .rides to display the person in the right div
const contentTarget = document.querySelector(".rides");

// The agreed upon eventHub is listening on the ID of '#state-fair'
const eventHub = document.querySelector("#state-fair");

// Define what happens when the event listener hears that the button was clicked
export const RideTicketHolders = () => {

    // The event broadcasted was 'rideTicketPurchased'
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
       
        // Update the ticket counter on the DOM
        ticketUpdater();

        // Add the person to the DOM in the proper place by using <div> with the '.rider' class
        contentTarget.innerHTML += `<div class="person rider"></div>`;
    });
};