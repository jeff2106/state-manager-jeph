const StateManager = require('state-manager-jeph');

const initialState = { name: { user: "Jeph SARA" }, bio: true };
const manager = new StateManager(initialState);

// Récupérer une propriété
console.log(manager.getProperty('name')); // { user: "Sara" }

// Définir une propriété
manager.setProperty('name', { user: 'Doe' });
console.log(manager.getProperty('name')); // { user: "Doe" }

// Ajouter un état imbriqué
manager.setState({ details: { age: 25, email: "example@example.com" } });
console.log(manager.getState()); // { name: { user: "Doe" }, bio: true, details: { age: 25, email: "example@example.com" } }

// Vérifier si toutes les clés ont des valeurs, en ignorant certaines clés
console.log(manager.allKeysHaveValues(['details'])); // true

// Vérifier si toutes les clés ont des valeurs sans ignorer
console.log(manager.allKeysHaveValues()); // true