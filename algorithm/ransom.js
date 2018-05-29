
function harmlessRansomNote(noteText, magazineText) {
    let noteArr = noteText.split(' ')
    let magazineArr = magazineText.split(' ')
    let magazineObj = {}

    magazineArr.forEach( word => {
        if (!magazineObj[word]) magazineObj[word] = 0
        magazineObj[word]++;
    })

    let noteIsPossible = true
    noteArr.forEach( word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) noteIsPossible = false
        } else noteIsPossible = false
    })
    return noteIsPossible
}

const test1 = harmlessRansomNote('hello hello', 'hello my name is Chris and my favorite food is rice')
console.log(test1)
