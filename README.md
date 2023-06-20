# Todo List React App

Todo list app created with React.

## Running the app

```bash
$ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Run API

```bash
$ npm run db
```

Run JSON-Server as an API.

Configure your api endpoint in the `.env` file as `REACT_APP_API_PORT`

```
REACT_APP_API_PORT=3030
```

It will be running at http://0.0.0.0:3030

| Method  | Endpoints          | Description                         |
| ------- | ------------------ | ----------------------------------- |
| **GET** | `/lists`           | Get all lists                       |
| **GET** | `/lists/:id`       | Get specific lists                  |
| **GET** | `/lists/:id/todos` | Get specific todos in specific list |
| **GET** | `/todos`           | Get all todos                       |
| **GET** | `/todos/:id`       | Get specific todos                  |
