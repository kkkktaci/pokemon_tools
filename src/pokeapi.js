import axios from 'axios'
import fs from 'fs'

const moveIds = Array(818).fill(1).map((_, i) => i + 1)
// this id is no game index
const pokemonIds = Array(200).fill(1).map((_, i) => i + 1)

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

const pokemons = []

const client = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

run()

async function run() {
    // await getMoves()
    await getPokemon()
}

async function getMoves() {
    for (let id = 1; id <= moveIds.length; id ++) {
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

    fs.writeFile('./assets/abilities.json', JSON.stringify(abilities), function (error) {
        if (error) {
            console.log('保存技能失败!', error)
        } else {
            console.log('保存技能成功!')
        }
    })
}

async function getPokemon() {
    for (let id = 1; id <= pokemonIds.length; id ++) {
        console.log(`Fetching id:${id} Pokemon.`)
        try {
            const response = await client.get(`/pokemon/${id}/`)
            const { data } = response

            // filter out data if it missing game_indices
            if (!data.game_indices) {
                console.log(`${id} has no game_indices. skip.`)
                continue
            }

            const pokemon = {
                id,
                name: data.name,
                moves: data.moves.map(move => move.move.name.replace('-', ' ')),
                types: data.types.map(type => type.type.name),
                stats: data.stats.map(stat => ({ name: stat.stat.name, baseStats: stat.base_stat })),
                sprite: data.sprites.front_default
            }

            pokemons.push(pokemon)
        } catch (error) {
            console.log(error)
        }
    }

    fs.writeFile('./assets/pokemons.json', JSON.stringify(pokemons), function (error) {
        if (error) {
            console.log('保存宝可梦失败!', error)
        } else {
            console.log('保存宝可梦成功!')
        }
    })
}
