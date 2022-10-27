let isIgnite = false
function changeCard(event) {
    const card = event.currentTarget
    const backgroundImage = isIgnite
    ? "url(https://github.com/4lisson0/CardCopa/blob/cd72a8150b5c61e357bc4643b33fc47d8350539a/assets/bg-explorer.svg)"
    : "url(https://github.com/4lisson0/CardCopa/blob/cd72a8150b5c61e357bc4643b33fc47d8350539a/assets/bg-ignite-verde.svg)"
    isIgnite = !isIgnite 
    card.style.backgroundImage = backgroundImage
}
