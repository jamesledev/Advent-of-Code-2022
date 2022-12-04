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
  // console.log(theData);
  const answerArray = [];
  let number = 0;
  for (let i = 0; i < theData.length; i++) {
    if (!theData[i] == '') {
      number = number + theData[i];
    } else {
      answerArray.push(number);
      number = 0;
    }
  }
  let answer = 0;
  for (let y = 0; y < 3; y++) {
    const highNumber = Math.max(...answerArray);
    const index = answerArray.indexOf(highNumber);
    answer = answer + highNumber;
    answerArray.splice(index, 1); // 2nd parameter means remove one item only
    console.log(index);
    console.log(highNumber);
    console.log(answerArray);
  }

  console.log(answer);
  return answer;
}
