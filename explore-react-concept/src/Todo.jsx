// export default function Todo({ task }) {
//   return <li>task: {task}</li>;
// }
export default function Todo({ task, isDone }) {
  if (isDone == true) {
    return <li>Finished: {task}</li>;
  } else {
    return <li>Work on : {task}</li>;
  }
}
