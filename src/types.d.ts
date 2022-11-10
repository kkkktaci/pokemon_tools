import { TYPE } from './enums'

declare global {
    type Type = {
        type: TYPE,
        zhName: string,
        enName: string,
        primaryColor: string
    }

    type Move = {
        id: number,
        enName: string,
        zhName: string,
        accuracy: number | null,
        power: number | null,
        pp: number,
        type: TYPE,
        generation: string
    }
}
