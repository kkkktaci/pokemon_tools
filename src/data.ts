import abilities from './assets/abilities.json'

import { TYPE } from './enums'

const TypeBug = {
    type: TYPE.Bug,
    zhName: '虫',
    enName: 'bug',
    primaryColor: '#99c631'
}

const TypeDark = {
    type: TYPE.Dark,
    zhName: '恶',
    enName: 'dark',
    primaryColor: '#4a4858'
}

const TypeDragon = {
    type: TYPE.Dragon,
    zhName: '龙',
    enName: 'dragon',
    primaryColor: '#0763ad'
}

const TypeElectric = {
    type: TYPE.Electric,
    zhName: '电',
    enName: 'electric',
    primaryColor: '#f5d13e'
}

const TypeFairy = {
    type: TYPE.Fairy,
    zhName: '妖精',
    enName: 'fairy',
    primaryColor: '#ef8dde'
}

const TypeFighting = {
    type: TYPE.Fighting,
    zhName: '格斗',
    enName: 'fighting',
    primaryColor: '#e24653'
}

const TypeFire = {
    type: TYPE.Fire,
    zhName: '火',
    enName: 'fire',
    primaryColor: '#ff9c52'
}

const TypeFlying = {
    type: TYPE.Flying,
    zhName: '飞行',
    enName: 'flying',
    primaryColor: '#88adde'
}

const TypeGhost = {
    type: TYPE.Ghost,
    zhName: '幽灵',
    enName: 'ghost',
    primaryColor: '#526bae'
}

const TypeGrass = {
    type: TYPE.Grass,
    zhName: '草',
    enName: 'grass',
    primaryColor: '#63bd52'
}

const TypeGround = {
    type: TYPE.Ground,
    zhName: '地面',
    enName: 'ground',
    primaryColor: '#d87846'
}

const TypeIce = {
    type: TYPE.Ice,
    zhName: '冰',
    enName: 'ice',
    primaryColor: '#71cec2'
}

const TypeNormal = {
    type: TYPE.Normal,
    zhName: '普通',
    enName: 'normal',
    primaryColor: '#9399a5'
}

const TypePoison = {
    type: TYPE.Poison,
    zhName: '毒',
    enName: 'poison',
    primaryColor: '#a567c7'
}

const TypePsychic= {
    type: TYPE.Psychic,
    zhName: '超能力',
    enName: 'psychic',
    primaryColor: '#f86e76'
}

const TypeRock= {
    type: TYPE.Rock,
    zhName: '岩石',
    enName: 'rock',
    primaryColor: '#c6bd8c'
}

const TypeSteel= {
    type: TYPE.Steel,
    zhName: '钢',
    enName: 'steel',
    primaryColor: '#5a90a9'
}

const TypeWater= {
    type: TYPE.Water,
    zhName: '水',
    enName: 'water',
    primaryColor: '#5395de'
}

export const Types = [
    TypeBug,
    TypeDark,
    TypeDragon,
    TypeElectric,
    TypeFairy,
    TypeFighting,
    TypeFire,
    TypeFlying,
    TypeGhost,
    TypeGrass,
    TypeGround,
    TypeIce,
    TypeNormal,
    TypePoison,
    TypePsychic,
    TypeRock,
    TypeSteel,
    TypeWater
]

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

export const MOVES: {
    id: number,
    enName: string,
    zhName: string,
    accuracy: number | null,
    power: number | null,
    pp: number,
    type: TYPE,
    generation: string
}[] = abilities.map(move => {
    let type = TypeNormal.type
    Types.forEach(t => {
        if (t.enName === move.type) {
            type = t.type
        }
    })

    return {
        ...move,
        type,
    }
})

export const POKEMON = {}
