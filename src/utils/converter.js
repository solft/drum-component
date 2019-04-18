// var reverseMidiMapping = new Map([
// 	[36, 0],
// 	[35, 0],
// 	[38, 1],
// 	[27, 1],
// 	[28, 1],
// 	[31, 1],
// 	[32, 1],
// 	[33, 1],
// 	[34, 1],
// 	[37, 1],
// 	[39, 1],
// 	[40, 1],
// 	[56, 1],
// 	[65, 1],
// 	[66, 1],
// 	[75, 1],
// 	[85, 1],
// 	[42, 2],
// 	[44, 2],
// 	[54, 2],
// 	[68, 2],
// 	[69, 2],
// 	[70, 2],
// 	[71, 2],
// 	[73, 2],
// 	[78, 2],
// 	[80, 2],
// 	[46, 3],
// 	[67, 3],
// 	[72, 3],
// 	[74, 3],
// 	[79, 3],
// 	[81, 3],
// 	[45, 4],
// 	[29, 4],
// 	[41, 4],
// 	[61, 4],
// 	[64, 4],
// 	[84, 4],
// 	[48, 5],
// 	[47, 5],
// 	[60, 5],
// 	[63, 5],
// 	[77, 5],
// 	[86, 5],
// 	[87, 5],
// 	[50, 6],
// 	[30, 6],
// 	[43, 6],
// 	[62, 6],
// 	[76, 6],
// 	[83, 6],
// 	[49, 7],
// 	[55, 7],
// 	[57, 7],
// 	[58, 7],
// 	[51, 8],
// 	[52, 8],
// 	[53, 8],
// 	[59, 8],
// 	[82, 8]
// ]);

var midiDrums = [36, 38, 42, 46, 41, 43, 45, 49, 51];

// input example 
// [
//  [1, 0, 1, 0, 1, 0, 1],
//  [0, 0, 0, 0, 0, 0, 1],
//  [1, 0, 1, 0, 0, 0, 0],
//  [0, 1, 1, 1, 0, 0, 0],
//  [0, 0, 1, 1, 1, 1, 0],
// ]
function drum_to_note(pitch_by_time_array) {
  var result_notes = [];
	var note_index = 0;
  for (let time = 0; time < pitch_by_time_array[0].length; time++) {
    for (let pitch = 0; pitch < pitch_by_time_array.length; pitch++) {
			if(pitch_by_time_array[pitch][time]){
				result_notes[note_index] = {};
				result_notes[note_index]['pitch'] = midiDrums[pitch];
				result_notes[note_index]['startTime'] = time * 0.5;
				result_notes[note_index]['endTime'] = (time + 1) * 0.5;
				note_index++;
			}
		}
	}
	
	return result_notes
}

export { drum_to_note }