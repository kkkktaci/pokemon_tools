import abilities from './assets/abilities.json'

export enum TYPE {
    Bug,
    Dark,
    Dragon,
    Electric,
    Fairy,
    Fighting,
    Fire,
    Flying,
    Ghost,
    Grass,
    Ground,
    Ice,
    Normal,
    Poison,
    Psychic,
    Rock,
    Steel,
    Water,
}

const TYPE_NAMES= new Map<string, TYPE>()
TYPE_NAMES.set('bug', TYPE.Bug)
TYPE_NAMES.set('dark', TYPE.Dark)
TYPE_NAMES.set('dragon', TYPE.Dragon)
TYPE_NAMES.set('electric', TYPE.Electric)
TYPE_NAMES.set('fighting', TYPE.Fighting)
TYPE_NAMES.set('fire', TYPE.Fire)
TYPE_NAMES.set('flying', TYPE.Flying)
TYPE_NAMES.set('ghost', TYPE.Ghost)
TYPE_NAMES.set('ground', TYPE.Ground)
TYPE_NAMES.set('ice', TYPE.Ice)
TYPE_NAMES.set('normal', TYPE.Normal)
TYPE_NAMES.set('poison', TYPE.Poison)
TYPE_NAMES.set('psychic', TYPE.Psychic)
TYPE_NAMES.set('rock', TYPE.Rock)
TYPE_NAMES.set('steel', TYPE.Steel)
TYPE_NAMES.set('water', TYPE.Water)

export const TYPE_RESTRAIN = {
    [TYPE.Bug]: {
        strengths: [
            TYPE.Grass,
            TYPE.Psychic,
            TYPE.Dark
        ],
        weaknesses: [
            TYPE.Fighting,
            TYPE.Flying,
            TYPE.Poison,
            TYPE.Ghost,
            TYPE.Steel,
            TYPE.Fire,
            TYPE.Fairy
        ],
        unused: []
    },
    [TYPE.Dark]: {
        strengths: [
            TYPE.Ghost,
            TYPE.Psychic
        ],
        weaknesses: [
            TYPE.Fighting,
            TYPE.Dark,
            TYPE.Fairy
        ],
        unused: []
    },
    [TYPE.Dragon]: {
        strengths: [
            TYPE.Dragon
        ],
        weaknesses: [
            TYPE.Steel
        ],
        unused: [
            TYPE.Fairy
        ]
    },
    [TYPE.Electric]: {
        strengths: [
            TYPE.Flying,
            TYPE.Water
        ],
        weaknesses: [
            TYPE.Grass,
            TYPE.Electric,
            TYPE.Dragon
        ],
        unused: [
            TYPE.Ground
        ]
    },
    [TYPE.Fairy]: {
        strengths: [
            TYPE.Fighting,
            TYPE.Dragon,
            TYPE.Dark
        ],
        weaknesses: [
            TYPE.Poison,
            TYPE.Steel,
            TYPE.Fire
        ],
        unused: []
    },
    [TYPE.Fighting]: {
        strengths: [
            TYPE.Normal,
            TYPE.Rock,
            TYPE.Steel,
            TYPE.Ice,
            TYPE.Dark
        ],
        weaknesses: [
            TYPE.Flying,
            TYPE.Poison,
            TYPE.Bug,
            TYPE.Fairy,
            TYPE.Psychic
        ],
        unused: [
            TYPE.Ghost
        ]
    },
    [TYPE.Fire]: {
        strengths: [
            TYPE.Bug,
            TYPE.Steel,
            TYPE.Grass,
            TYPE.Ice
        ],
        weaknesses: [
            TYPE.Rock,
            TYPE.Fire,
            TYPE.Ice,
            TYPE.Dragon
        ],
        unused: []
    },
    [TYPE.Flying]: {
        strengths: [
            TYPE.Fighting,
            TYPE.Bug,
            TYPE.Grass
        ],
        weaknesses: [
            TYPE.Rock,
            TYPE.Steel,
            TYPE.Electric
        ],
        unused: []
    },
    [TYPE.Ghost]: {
        strengths: [
            TYPE.Ghost,
            TYPE.Psychic
        ],
        weaknesses: [
            TYPE.Dark
        ],
        unused: [
            TYPE.Normal
        ]
    },
    [TYPE.Grass]: {
        strengths: [
            TYPE.Ground,
            TYPE.Rock,
            TYPE.Water
        ],
        weaknesses: [
            TYPE.Flying,
            TYPE.Poison,
            TYPE.Bug,
            TYPE.Steel,
            TYPE.Fire,
            TYPE.Grass,
            TYPE.Dragon
        ],
        unused: []
    },
    [TYPE.Ground]: {
        strengths: [
            TYPE.Poison,
            TYPE.Rock,
            TYPE.Steel,
            TYPE.Fire,
            TYPE.Electric
        ],
        weaknesses: [
            TYPE.Bug,
            TYPE.Grass
        ],
        unused: [
            TYPE.Flying
        ]
    },
    [TYPE.Ice]: {
        strengths: [
            TYPE.Flying,
            TYPE.Ground,
            TYPE.Grass,
            TYPE.Dragon
        ],
        weaknesses: [
            TYPE.Steel,
            TYPE.Fire,
            TYPE.Water,
            TYPE.Ice
        ],
        unused: []
    },
    [TYPE.Normal]: {
        strengths: [],
        weaknesses:[
            TYPE.Rock,
            TYPE.Steel
        ],
        unused: [
            TYPE.Ghost
        ]
    },
    [TYPE.Poison]: {
        strengths: [
            TYPE.Grass,
            TYPE.Fairy
        ],
        weaknesses: [
            TYPE.Poison,
            TYPE.Ground,
            TYPE.Rock,
            TYPE.Ghost
        ],
        unused: [
            TYPE.Steel
        ]
    },
    [TYPE.Psychic]: {
        strengths: [
            TYPE.Fighting,
            TYPE.Bug
        ],
        weaknesses: [
            TYPE.Steel,
            TYPE.Psychic
        ],
        unused: [
            TYPE.Dark
        ]
    },
    [TYPE.Rock]: {
        strengths: [
            TYPE.Flying,
            TYPE.Bug,
            TYPE.Fire,
            TYPE.Ice
        ],
        weaknesses: [
            TYPE.Fighting,
            TYPE.Ground,
            TYPE.Steel
        ],
        unused: []
    },
    [TYPE.Steel]: {
        strengths: [
            TYPE.Rock,
            TYPE.Ice,
            TYPE.Fairy
        ],
        weaknesses: [
            TYPE.Steel,
            TYPE.Fire,
            TYPE.Water,
            TYPE.Electric
        ],
        unused: []
    },
    [TYPE.Water]: {
        strengths: [
            TYPE.Ground,
            TYPE.Rock,
            TYPE.Fire,
        ],
        weaknesses: [
            TYPE.Water,
            TYPE.Grass,
            TYPE.Dragon
        ],
        unused: []
    },
}

export const ABILITIES: {
    id: number,
    enName: string,
    zhName: string,
    accuracy: number | null,
    power: number | null,
    pp: number,
    type: string,
    generation: string
}[] = abilities.map(move => {
    let type
    if (TYPE_NAMES.has(move.type)) {
        type = TYPE_NAMES.get(move.type)
    }

    return {
        type,
        ...move
    }
})

export const POKEMON = {}
