const timeToSeconds = time => {
	return +(time + '').split(':')
		.reduce((a, b, i) => (i == 0 ? +b * 3600 : (i == 1 ? +b * 60 : +b)) + a, 0)
}

const timeslotToSeconds = timeslot => {
	return timeslot.split('-').map(timeToSeconds)
		.reduce((a, b, i) => a == 0 ? b : b - a, 0)
}

const dance = () => {
	const lines = document.querySelector('textarea').value.split('\n')
	let cases = +lines.shift()
	let caseNumber = 0

	while (cases--) {
		const [movieTime, numberOfDays] = lines.shift().split(' ')

		const busySeconds = Array(+numberOfDays).fill(0).map(_ =>
			lines.shift().split(' ').map(timeslotToSeconds).reduce((a, b) => a + b, 0)
		).reduce((a, b) => a + b, 0)

		const availableSeconds = 14 * numberOfDays * 3600 - busySeconds
		const movieSeconds = timeToSeconds(movieTime)
z
		alert(`Case ${++caseNumber}
					 Can we watch ${ movieSeconds}s in ${availableSeconds}s ?
					 ${ availableSeconds >= movieSeconds ? 'Yep :(' : 'Nope ;)'}`)
	}
}