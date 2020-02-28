/**
 * Fetching a JSON file across the network 
 */
async function loadPokemon() {
    const name = document.getElementById('pokemon').value;

    try {
        // Trying to fetch a pokemon which doesn't exist
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`);

        if (response.ok) {
            const pokemon = await response.json();
            document.getElementById('result').innerText = `You catched a ${pokemon.name} with a height of ${pokemon.height} decimetres.`;
        } else {
            // Executed because server returns HTTP Code 404 (NOT FOUND)
            alert(`Error: Could not fetch Pokemon "${name}"`);    
        }
    } catch (error) {
        // executed e.g. if there is no network connection
        alert(error);
    }
}