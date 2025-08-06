console.log(
    new URL('./dot.txt', import.meta.url).href,
    new URL('no-dot.txt', import.meta.url).href,
)
