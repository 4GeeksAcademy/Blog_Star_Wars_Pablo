export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    favorites: []
  }
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task': {

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    }

    case 'toggle_favorite': {
      const name = action.payload;
      const isFavorite = store.favorites.includes(name);

      return {
        ...store,
        favorites: isFavorite
        ? store.favorites.filter((fav) => fav !== name)
        : [...store.favorites, name]
      };
    }

    default:
      throw Error('Unknown action.');
  }
}
