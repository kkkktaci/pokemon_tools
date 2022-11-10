import { TYPE } from './enums'

declare global {
    type Type = {
        type: TYPE,
        zhName: string,
        enName: string,
        primaryColor: string
    }
}
