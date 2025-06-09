// Synchronous Example
function main() {
  console.log("Step 1: Start");
  let message = "Step 2: Processing...";
  console.log(message);
  console.log("Step 3: Finish");
}

main();
// Output:
// Step 1: Start
// Step 2: Processing...
// Step 3: Finish


// Assume cookPopcorn and pourDrinks are async functions returning Promises
// Assume startMovie is a regular synchronous function

async function setupMovieNight() {
  console.log("Starting setup...");

  // Wait for the popcorn Promise to resolve
  await cookPopcorn();
  console.log("Popcorn is ready!");

  // Wait for the drinks Promise to resolve (or maybe it's quick/sync)
  await pourDrinks();
  console.log("Drinks are poured!");

  // Only runs after both awaits complete successfully
  startMovie();
  console.log("Movie started!");
}

// Example placeholder for an async function returning a Promise
function cookPopcorn() {
  console.log("Putting popcorn in microwave...");
  // Simulate a delay (e.g., 2 seconds)
  return new Promise(resolve => setTimeout(() => {
    console.log("Microwave finished!");
    resolve(); // Fulfill the promise after the delay
  }, 2000));
}

// Assume pourDrinks is similar or faster/synchronous for simplicity

setupMovieNight();



// Simplified structure for deploy.js
async function main() {
  console.log("Deploying contract...");
  // contractFactory.deploy() returns a Promise that resolves with the deployed contract object
  const deployedContract = await contractFactory.deploy(/* constructor args */);

  // This line only runs *after* the deployment is confirmed
  await deployedContract.deployed(); // Often an additional wait for full confirmation

  console.log("Contract deployed to:", deployedContract.address);
  // Now we can interact with deployedContract...
}

// ... (rest of the script execution logic)



// Define your main async logic
async function main() {
  // ... your deployment code using await ...
  console.log("Deployment script finished successfully.");
}

// Execute the main function and handle the final Promise
main()
  .then(() => process.exit(0)) // If main() fulfills, exit the script with success code 0
  .catch((error) => {         // If main() rejects (throws an error), catch it
    console.error(error);      // Log the error details
    process.exit(1);           // Exit the script with failure code 1
  });



  