import { Types, MOVES, TYPE_RESTRAIN, POKEMONS } from 'src/data'
import { TYPE } from 'src/enums'

const STAT_NAME_MAP = new Map<string, string>([
    ['hp', 'HP'],
    ['attack', 'Atk'],
    ['defense', 'Def'],
    ['special-attack', 'SpA'],
    ['special-defense', 'SpD'],
    ['speed', 'Spe'],
])

/**
 * 根据所给的能力id，找出所有所属的属性
 * @param moves 能力id数组
 * @returns 属性数组
 */
export function getTypesByMoveIds(moves: number[]): TYPE[] {
    const ms = MOVES.filter(move => moves.includes(move.id))
    return ms.map(m => m.type)
}

/**
 * 根据所给的能力id，找出所有优势属性
 * @param moves 能力id数组
 * @returns 属性数组
 */
export function getStrengthsTypesByMoveIds(moves: number[]): TYPE[] {
    const ms = MOVES.filter(move => moves.includes(move.id))
    return ms.flatMap(m => TYPE_RESTRAIN[m.type].strengths)
}

/**
 * 根据所给的能力id，找出所有劣势属性
 * @param moves 能力id数组
 * @returns 属性数组
 */
export function getWeaknessTypesByMoveIds(moves: number[]): TYPE[] {
    const ms = MOVES.filter(move => moves.includes(move.id))
    return ms.flatMap(m => TYPE_RESTRAIN[m.type].weaknesses)
}

export function getMoveByName(moveName: string): Move | undefined {
    return MOVES.find(move => move.enName === moveName)
}

export function getTypePrimaryColor(typeName: string): string {
    return Types.find(type => type.enName === typeName)?.primaryColor || 'white'
}

export function shortStatName(statName: string): string {
    return STAT_NAME_MAP.get(statName) || ''
}

export function getPokemonsByIds(ids: number[]): Pokemon[] {
    const result: Pokemon[] = []
    POKEMONS.forEach(p => {
        if (ids.includes(p.id)) {
            result.push(p)
        }
    })
    return result
}
