import * as todoActions from '../../actions/todoActionCreators';
import TypeKeys from '../../domains/TypeKeys';

describe('todoActions', () => {
  it('should add new todo', () => {
    const newTodo = {
      id: 1,
      title: 'test title',
      tags: ['tag1', 'tag2'],
      createdAt: Date().toLocaleString(),
      updatedAt: Date().toLocaleString(),
      completed: false
    };

    const expectedAction = {
      type: TypeKeys.ADD_TODO,
      payload: {
        newTodo
      }
    };

    const actualAction = todoActions.addTodo(newTodo);

    expect(actualAction).toEqual(expectedAction);
  });
});
