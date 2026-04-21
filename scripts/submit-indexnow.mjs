const key = 'eb5d3fe9-983b-404e-a497-a302da066a29'
const host = 'kazerwanda.com'
const keyLocation = `https://${host}/${key}.txt`

const urls = process.argv.slice(2)

if (urls.length === 0) {
  console.error('Usage: node scripts/submit-indexnow.mjs <url> [more-urls]')
  process.exit(1)
}

const payload = {
  host,
  key,
  keyLocation,
  urlList: urls,
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(payload),
})

if (!response.ok) {
  const body = await response.text()
  console.error(`IndexNow submission failed: ${response.status} ${response.statusText}`)
  console.error(body)
  process.exit(1)
}

console.log('IndexNow submission accepted for:')
urls.forEach((url) => console.log(`- ${url}`))
