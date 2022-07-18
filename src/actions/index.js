
export const ADD_LISTS = "ADD_LISTS";
export const ADD_NEW = "ADD_NEW";
export const DELETE_TAKS = "DELETE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export function TaskComplete(id) {
  return {
    type: COMPLETE_TASK,
    id,
  };
}

export function DeleteTask(id) {
  return {
    type: DELETE_TAKS,
    id,
  };
}
export function AddList(list) {
  return {
    type: ADD_LISTS,
    list,
  };
}

export function AddnewData(data) {
  return {
    type: ADD_NEW,
    data,
  };
}




export function HandleTodoApi() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((list) => {
        dispatch(AddList(list));
      });
  };
}


export function AddTodoApi(text, length) {
  const url = "https://jsonplaceholder.typicode.com/todos";

  return function (dispatch) {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        title: text,
        completed: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        data.id = length;
        dispatch(AddnewData(data));
      });
  };
}


export function HandleDelete(id) {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  return function (dispatch) {
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(DeleteTask(id));
      });
  };
}


export function CompleteTask(id) {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  return function (dispatch) {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id: id,
        completed: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(TaskComplete(id));
      });
  };
}
