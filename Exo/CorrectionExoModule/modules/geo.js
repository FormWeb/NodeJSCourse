const pi = Math.PI

const geo = {
    aireCercle(r) {
        return pi * r * r
    },

    aireRectangle(largeur, longueur) {
        return largeur * longueur
    },

    aireTriangle(base, hauteur) {
        return (base * hauteur) / 2
    }
}

module.exports = geo