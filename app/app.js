class Character {
    constructor(name, description, ability) {
        this.name = name
        this.description = description
        this.ability = ability
    }
}

class CharacterContainer {
    constructor() {
        this.characters = []
    }

    addCharacter(character) {
        this.characters.push(character)
    }
}

class CharacterInputManager {
    constructor(){}

    getCharacter() {
        return new Character(
            document.getElementById('character_name').value,
            document.getElementById('character_description').value,
            this.getAbility()
        )
    }

    getAbility() {
        let ability = {
            "name" : document.getElementById('ability_name').value,
            "description" : document.getElementById('ability_description').value
        }
        return ability
    }

    clearInputs() {
        document.getElementById('character_name').value = ""
        document.getElementById('character_description').value = ""
        document.getElementById('ability_name').value = ""
        document.getElementById('ability_description').value = ""
    }
}

class CharacterManager {
    constructor() {
        this.characterContainer = new CharacterContainer()
        this.characterInputManager = new CharacterInputManager()
        this.registerEventListeners()
    }

    registerEventListeners() {

        document.getElementById('add_character_btn').addEventListener('click', (e) => {
            let character = this.characterInputManager.getCharacter()
            this.characterInputManager.clearInputs()
            this.characterContainer.addCharacter(character)
            this.render()
        })

    }

    render() {
        let display = document.getElementById('display')

        display.innerHTML = ""

        for(let character of this.characterContainer.characters) {

            display.innerHTML += 
            `<div class="character">
    
            <h2>${character.name}</h2>
            <p>${character.description}</p>
                
            <div class="character-abilites">
                <h2>Ability : </h2>
                <p title="${character.ability.description}">${character.ability.name}</p>
            </div>
    
            </div>
            `

        }
    }
}

const characterManager = new CharacterManager()