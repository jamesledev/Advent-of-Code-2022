const fileSelector = document.getElementById('file-selector');
fileSelector.addEventListener('change', (event) => {
  const result = event.target.files[0];
  const promise = result.text();
  promise.then((data) => {
    const finalAnswer = solution(data);
    document.getElementById('answer').innerHTML = finalAnswer;
  });
});

function solution(data) {
  const theData = data.split('\n').map(Number);
  console.log(theData);
  // .map(Number);
  const answerArray = [];
  let number = 0;
  for (let i = 0; i < theData.length; i++) {
    if (!theData[i] == '') {
      number = number + theData[i];
      console.log('added' + number);
    } else {
      console.log('deleted ' + number);
      answerArray.push(number);
      number = 0;
    }
  }
  const answer = Math.max(answerArray);
  console.log(answerArray);
  console.log(Math.max(...answerArray));
  return answer;
}
