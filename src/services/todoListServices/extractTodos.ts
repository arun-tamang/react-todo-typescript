import FetchedTodoItem from '../../domains/FetchedTodoItem';

export default function extractTodos(toExtract: FetchedTodoItem[]) {
  // console.log(toExtract);
  // console.log('from extract', toExtract);
  let tagName = [];
  let todoProperties = [];
  for (let i = 0; i < toExtract.length; i++) {
    tagName = toExtract[i].tags.map(tagItem => tagItem.name);
    todoProperties[i] = {
      id: toExtract[i].id,
      title: toExtract[i].name,
      tags: tagName || [],
      createdAt: toExtract[i].createdAt,
      updatedAt: toExtract[i].updatedAt,
      completed: toExtract[i].completed
    };
  }
  return todoProperties;
}