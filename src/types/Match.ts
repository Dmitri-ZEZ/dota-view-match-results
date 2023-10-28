export interface Match {
    match_id: number
    barracks_status_dire: number
    barracks_status_radiant: number
    chat: any
    cluster: number
    cosmetics: any
    dire_score: any
    dire_team_id: any
    draft_timings: any
    duration: number
    engine: number
    first_blood_time: number
    game_mode: number
    human_players: number
    leagueid: number
    lobby_type: number
    match_seq_num: number
    negative_votes: number
    objectives: any
    picks_bans: any
    positive_votes: number
    radiant_gold_adv: any
    radiant_score: any
    radiant_team_id: any
    radiant_win: boolean
    radiant_xp_adv: any
    skill: any
    start_time: number
    teamfights: any
    tower_status_dire: number
    tower_status_radiant: number
    version: any
    players: Player[]
    patch: number
    region: number
}

export interface Player {
    match_id: number
    player_slot: number
    ability_targets: any
    ability_upgrades_arr: any
    ability_uses: any
    account_id?: number
    actions: any
    additional_units: any
    assists: number
    backpack_0: number
    backpack_1: number
    backpack_2: number
    backpack_3: any
    buyback_log: any
    camps_stacked: any
    connection_log: any
    creeps_stacked: any
    damage: any
    damage_inflictor: any
    damage_inflictor_received: any
    damage_taken: any
    damage_targets: any
    deaths: number
    denies: number
    dn_t: any
    firstblood_claimed: any
    gold: any
    gold_per_min: number
    gold_reasons: any
    gold_spent: any
    gold_t: any
    hero_damage: any
    hero_healing: any
    hero_hits: any
    hero_id: number
    item_0: number
    item_1: number
    item_2: number
    item_3: number
    item_4: number
    item_5: number
    item_neutral: number
    item_uses: any
    kill_streaks: any
    killed: any
    killed_by: any
    kills: number
    kills_log: any
    lane_pos: any
    last_hits: number
    leaver_status: number
    level: number
    lh_t: any
    life_state: any
    max_hero_hit: any
    multi_kills: any
    net_worth: number
    obs: any
    obs_left_log: any
    obs_log: any
    obs_placed: any
    party_id: any
    party_size: any
    performance_others: any
    permanent_buffs: any
    pings: any
    pred_vict: any
    purchase: any
    purchase_log: any
    randomed: any
    repicked: any
    roshans_killed: any
    rune_pickups: any
    runes: any
    runes_log: any
    sen: any
    sen_left_log: any
    sen_log: any
    sen_placed: any
    stuns: any
    teamfight_participation: any
    times: any
    tower_damage: any
    towers_killed: any
    xp_per_min: number
    xp_reasons: any
    xp_t: any
    radiant_win: boolean
    start_time: number
    duration: number
    cluster: number
    lobby_type: number
    game_mode: number
    is_contributor: boolean
    patch: number
    region: number
    isRadiant: boolean
    win: number
    lose: number
    total_gold: number
    total_xp: number
    kills_per_min: number
    kda: number
    abandons: number
    rank_tier?: number
    is_subscriber: boolean
    cosmetics: any[]
    benchmarks: Benchmarks
    personaname?: string
    name: any
    last_login: any
}

export interface Benchmarks {
    gold_per_min: GoldPerMin
    xp_per_min: XpPerMin
    kills_per_min: KillsPerMin
    last_hits_per_min: LastHitsPerMin
    hero_damage_per_min: HeroDamagePerMin
    hero_healing_per_min: HeroHealingPerMin
    tower_damage: TowerDamage
    stuns_per_min: StunsPerMin
}

export interface GoldPerMin {
    raw: number
    pct: number
}

export interface XpPerMin {
    raw: number
    pct: number
}

export interface KillsPerMin {
    raw: number
    pct: number
}

export interface LastHitsPerMin {
    raw: number
    pct: number
}

export interface HeroDamagePerMin {
    raw: number
    pct: number
}

export interface HeroHealingPerMin {
    raw: number
    pct: number
}

export interface TowerDamage {}

export interface StunsPerMin {
    raw: number
    pct: number
}