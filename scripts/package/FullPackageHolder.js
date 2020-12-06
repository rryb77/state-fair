import { ticketUpdater } from "../TicketBooth.js"

// The agreed upon eventHub is listening on the ID of '#state-fair'
const eventHub = document.querySelector("#state-fair");

// Define the array of classes that will be used to push a person that buys the full package ticket to the DOM.
// Possible TODO: Refactor this to let it build the list dynamically???
let arrayOfTargets = [".games", ".rides", ".sideshow", ".food"];

// Define what happens when the event listener hears that the button was clicked
export const FullTicketHolders = () => {
    
    // The event broadcasted was 'fullTicketPurchased'
    eventHub.addEventListener("fullTicketPurchased", customEvent => {
        
        // Update the ticket counter on the DOM
        ticketUpdater();

        // Loop through the arrayOfTargets to change the contentTarget selector for each class
        for (let i = 0; i < arrayOfTargets.length; i++) {
            
            // Set the contentTarget to the class of the current item in the array to display the person in the right div
            let contentTarget = document.querySelector(arrayOfTargets[i]);

            // Add the person to the DOM in the proper place by using <div> with the current item class in the array
            contentTarget.innerHTML += `<div class="person bigSpender"></div>`;
        };
        
    });
};