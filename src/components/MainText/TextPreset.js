import { typography } from "../../theme/typography"

const BASE = {
    fontFamily: typography.Reguler,
    fontSize: 16
}

const BOLD = {
    fontFamily: typography.Bold,
    fontSize: 16
}


export const presets = {
    default: BASE,
    h1: {
        ...BOLD,
        fontSize: 34
    },
    h2: {
        ...BOLD,
        fontSize: 28
    },
    h3: {
        ...BOLD,
        fontSize: 24
    },
    h4: {
        ...BASE,
        fontSize: 20
    },
    h5: {
        ...BASE,
        fontSize: 18
    },
    p: {
        ...BASE,
        fontSize: 14
    },
}