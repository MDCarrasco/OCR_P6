# OCR_P6

<img width="1786" alt="Screenshot 2021-03-03 at 09 33 54" src="https://user-images.githubusercontent.com/50454011/109777252-ce21cd80-7c03-11eb-9c65-401945768b15.png">
OpenClassrooms' Python Project 6 (JustStreamIt) is a Netflix like local site that uses an API (https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR) to fetch and present IMDB's data.

<img width="1786" alt="Screenshot 2021-03-03 at 09 34 12" src="https://user-images.githubusercontent.com/50454011/109777308-df6ada00-7c03-11eb-8ef0-df1cb6b8c765.png">
Each movie image pops up an info modal on click.

<img width="1076" alt="Screenshot 2021-03-03 at 09 34 36" src="https://user-images.githubusercontent.com/50454011/109777376-f0b3e680-7c03-11eb-886f-46910e0e3cf5.png">


## Installation

### MacOS
```bash
./run
```

### Windows
- In a terminal window :
```bash
cd ocmovies-api
pipenv install
pipenv run python manage.py create_db
pipenv run python manage.py runserver
```

- In another terminal window :

```bash
python ./pyserver.py
```
