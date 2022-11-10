import { MOVES, TYPE_RESTRAIN } from 'src/data'
import { TYPE } from 'src/enums'

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
