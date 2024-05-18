export type BaseInfo = {
  name: string,
  url: string
}

export interface PokemonSpecies {
  count: number,
  next: string,
  previous: null,
  results: BaseInfo[]
}

export interface SelectedPokemonInfo {
  base_happiness: number
  capture_rate: number
  color: BaseInfo

  egg_groups: [
    BaseInfo
  ]
  evolution_chain: {
    url: string
  }
  evolves_from_species: null
  flavor_text_entries: [
    {
      flavor_text: string
      language: BaseInfo
      version: BaseInfo
    }
  ]
  form_descriptions: []
  forms_switchable: boolean
  gender_rate: number
  genera: [
    {
      genus: string
      language: BaseInfo
    }
  ]
  generation: BaseInfo
  growth_rate: BaseInfo
  habitat: BaseInfo
  has_gender_differences: boolean
  hatch_counter: number
  id: number
  is_baby: boolean
  is_legendary: boolean;
  is_mythical: boolean
  name: string
  names: [
    BaseInfo
  ]
  order: number
  pal_park_encounters: [
    {
      area: BaseInfo
      base_score: number
      rate: number
    }
  ]
  pokedex_numbers: [
    {
      entry_number: number
      pokedex: BaseInfo
    }
  ]
  shape: BaseInfo
  varieties: [
    {
      is_default: boolean
      pokemon: BaseInfo
    }
  ]
}