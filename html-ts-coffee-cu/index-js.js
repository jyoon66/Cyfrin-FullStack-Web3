import { createWalletClient, custom } from "https://esm.sh/viem";

const connectButton = document.getElementById('connectButton');
// Add these lines with your other element selections
const fundButton = document.getElementById("fundButton");
const ethAmountInput = document.getElementById("ethAmount");
// You'll also need the balanceButton eventually
// const balanceButton = document.getElementById("balanceButton");

let walletClient;

// Make the function async
async function connect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("Connecting...");

    walletClient = createWalletClient({
      transport: custom(window.ethereum),
    });

    try {
      // Wait for the user to connect their wallet
      const addresses = await walletClient.requestAddresses();
      console.log("Connected accounts:", addresses); // Log the connected address(es)

      // This code now runs ONLY AFTER the await completes successfully
      connectButton.innerHTML = `Connected: ${addresses[0].slice(0, 6)}...`; // Show part of address
      console.log("Connection successful!");

    } catch (error) {
      // Handle errors, like the user rejecting the connection
      console.error("Connection failed:", error);
      connectButton.innerHTML = "Connect"; // Reset button text on failure
    }

  } else {
    connectButton.innerHTML = "Please install MetaMask!";
  }
}

async function fund() {
    const ethAmount = ethAmountInput.value;
    console.log(`Funding with ${ethAmount}...`);

    // Ensure wallet is connected and client is initialized
    if (typeof window.ethereum !== "undefined") {
        // Re-initialize or confirm walletClient
        // Note: We assume 'walletClient' is declared globally (e.g., 'let walletClient;')
        walletClient = createWalletClient({
            transport: custom(window.ethereum),
        });
        // Request account access (important step!)
        const [address] = await walletClient.requestAddresses();
        console.log("Wallet connected, Account:", address);

        // Now we can proceed with transaction logic...

    } else {
        // Handle the case where MetaMask (or other provider) is not installed
        console.log("Please install MetaMask!");
        // Consider disabling the button or updating its text here
        // e.g., fundButton.innerHTML = "Please Install MetaMask";
    }
}

// Event Listeners
connectButton.onclick = connect;
fundButton.onclick = fund; // Add this line
// balanceButton.onclick = getBalance; // Will add later