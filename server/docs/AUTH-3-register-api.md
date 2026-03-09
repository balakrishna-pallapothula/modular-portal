# AUTH-3 Register API

## Endpoint

POST /api/auth/register

## Request Body

{
"name": "string",
"email": "string",
"password": "string"
}

## Success Response

201 Created

{
"success": true,
"message": "user registered successfully",
"data": {
"id": "userId",
"name": "name",
"email": "email"
}
}

## Errors

400 - Missing fields  
409 - Email already registered
