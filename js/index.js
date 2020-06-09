'use strict'

// PRACTICING THE VARIOUS TYPES OF CONDITIONS

const temp = 18

if (temp > 20) {
	console.log(`It's hot!`)
} else if (temp > 10) {
	console.log(`It's warm`)
} else {
	console.log(`It's cold`)
}


if (temp > 20)				console.log(`It's hot!`)
else if (temp > 10)		console.log(`It's warm`)
else 									console.log(`It's cold`)


const usertype = 'admin'

if (usertype == 'admin') {

} else if (usertype == 'standard') {

} else if (usertype == 'guest') {

}


switch (usertype) {
	case 'admin':
		console.log('admin: ' + usertype)
	case 'standard':
		console.log('standard: ' + usertype)
		break
	case 'guest':
		console.log('guest: ' + usertype)
		break
	default:
		console.log('woops: ' + usertype)
		break
}

/* 
let isRecording = true
let statement

if (isRecording) {
	statement = "Recording!"
} else {
	statement = "Not Recording"
} */


// Ternary
let isRecording = true
// let statement = (isRecording == true) ? "Recording!" : "Not Recording"

console.log(`I am ${  (isRecording) ? "Recording!" : "Not Recording"  }`)




/* "AND"
					true
	 true    &&    true
(temp > 10 && temp <= 20)

true && true == true
true && false == false
false && true == false
false && false == false
*/

/* "OR"
					true
	 true    ||    true
(temp > 10 || temp <= 20)

true || true == true
true || false == true
false || true == true
false || false == false
*/


let hello = false
let world = "World"

let result = hello || world


/* if (hello) {
	result = hello
} else {
	result = world
} */

console.log(result)

// Falsy: false, "", null, undefined, NaN, 0
