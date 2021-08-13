## Description

Take Home API - backend starter package

## Used Tech's

- Nest JS
- Mongo
- Bcrypt
- JWT
- GraphQL
- Class Validator

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Resolvers

SIGNIN - Resolver (GraphQl Query)

```bash
# For 1 day login access
query {
  signin(
    signin: {
      email: valid email address thats been registered
      password: correct password
      isRemembered: 1
    }
  ) {
    accessToken
    timeout
  }
}

# For 1 hour login access
query {
  signin(
    signin: {
      email: valid email address thats been registered
      password: correct password
      isRemembered: 0
    }
  ) {
    accessToken
    timeout
  }
}

# signin ok response
{
  "data": {
    "signin": {
      "accessToken": one unique generated token containing user email address as payload,
      "timeout": access timeout in utc
    }
  }
}

# signup error response
{
  "errors": [
    {
      "message": any string,
      "locations": array of {line: number, column: number},
      "path": array of string
      "extensions": any error as object
  ],
  "data": any
}
```

SIGNUP - Resolver (GraphQl Mutation)

```bash
# signup request
mutation {
  signup(
    signup: {
      email: valid email address thats never been registered before
      password: any password
    }
  ) {
    id
    email
  }
}

# signup ok response
{
  "data": {
    "signup": {
      "id": "61167993150a3881ad5e8e51",
      "email": "rifat@gmail.com"
    }
  }
}

# signup error response
{
  "errors": [
    {
      "message": any string,
      "locations": array of {line: number, column: number},
      "path": array of string
      "extensions": any error as object
  ],
  "data": any
}
```

## Screenshots
- Sign In Success
![sigin-success](./docs/signin-success.png?raw=true "Sign In Success")
  
- Sign In (User not found)
![sigin-user-not-found](./docs/signin-user-not-found.png?raw=true "Sign In User Not Found")
  
- Sign In (Wrong Password)
![sigin-wrong-password](./docs/sigin-wrong-password.png?raw=true "Sign In Wrong Password")
  
- Sign Up Success
  ![sigup-success](./docs/signup-success.png?raw=true "Sign Up Success")
  
- Sign Up (Wrong Email)
  ![signup-wrong-email](./docs/signup-wrong-email.png?raw=true "Sign Up Wrong Email")
  
- Sign Up (Email Available)
  ![signup-email-available](./docs/signup-email-available.png?raw=true "Sign Up Email Already Available")

## License

Nest is [MIT licensed](LICENSE).
