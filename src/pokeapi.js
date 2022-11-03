import axios from 'axios'
import fs from 'fs'

const ids = Array(818).fill(1).map((_, i) => i + 1)

/*
    id: number,
    enName: string,
    zhName: string,
    accuracy: number,
    power: number,
    pp: number,
    type: string,
    generation: string
*/
const abilities = []

const client = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

run()

async function run() {
    await getMoves()

    fs.writeFile('./assets/abilities.json', JSON.stringify(abilities), function (error) {
        if (error) {
            console.log('保存技能失败!', error)
        } else {
            console.log('保存技能成功!')
        }
    })
}

async function getMoves() {
    for (let id=1; id<=ids.length; id++) {
        console.log(`Fetching id:${id} move.`)
        try {
            const response = await client.get(`/move/${id}/`)
            const move = response.data
            const ability = {
                id: move.id,
                enName: move.names.find(name => name.language.name === 'en')?.name || '',
                zhName: move.names.find(name => name.language.name === 'zh-Hans')?.name || '',
                accuracy: move.accuracy,
                power: move.power,
                pp: move.pp,
                type: move.type.name,
                generation: move.generation.name
            }
        
            abilities.push(ability)
        } catch (error) {
            console.log(error)
        }
        
    }
}
