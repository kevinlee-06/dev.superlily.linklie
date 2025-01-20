# URL Shortener API

## Overview

This API allows users to shorten URLs with a custom ID and a password for future deletion. The API endpoint accepts a POST request to create a shortened URL entry in the database.

## Endpoint

### POST `/shorten`

This endpoint is used to shorten a given URL.

#### Request Body

The request body must be a JSON object with the following fields:

- `url` (string, required): The long URL that you want to shorten.
- `id` (string, required): A custom ID for the shortened URL. This ID must be unique.
- `password` (string, required): A password that will be used for deleting the shortened URL later.

#### Example Request

```json
{
    "url": "https://long-url.com",
    "id": "short-id",
    "password": "password-for-deletion"
}
```

#### Response

The response will be a JSON object containing the original URL, the custom ID, and the password used for deletion.

- **Success (HTTP 200)**

```json
{
    "url": "https://long-url.com",
    "id": "short-id",
    "password": "password-for-deletion"
}
```

> [!NOTE]  
> - The custom ID must be unique; if an ID already exists in the database, the request will fail with a 400 status code.
> - The password is hashed before being stored in the database for security purposes.
> - Ensure that the request body is properly formatted as JSON.

- **Error Responses:**

1. **Missing ID**
   - **HTTP 400**
   - **Message:** `ID is required`

2. **Missing URL**
   - **HTTP 400**
   - **Message:** `URL is required`

3. **Missing Password**
   - **HTTP 400**
   - **Message:** `Password is required`

4. **ID Already Exists**
   - **HTTP 400**
   - **Message:** `ID already exists`

5. **Server Error**
   - **HTTP 500**
   - **Message:** The error message from the server.

## Example Usage

To shorten a URL, you can use a tool like `curl`:

```bash
curl -X POST https://LINKLIE_SERVER/shorten \
-H "Content-Type: application/json" \
-d '{
    "url": "https://long-url.com",
    "id": "short-id",
    "password": "password-for-deletion"
}'
```

This will return the shortened URL details if successful or an error message if there are issues with the request.

> [!NOTE]  
> Don't forget to replace `LINKLIE_SERVER` with the actual URL of your Linklie server.