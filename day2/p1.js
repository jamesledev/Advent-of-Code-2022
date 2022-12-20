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

  return answer;
}
