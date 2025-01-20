# Sending a DELETE Request with cURL

This guide explains how to use cURL to send a DELETE request to delete a shortened URL using its custom ID and associated password.

## cURL Command

To send a DELETE request, you can use the following cURL command:

```bash
curl -X DELETE https://LINKLIE_SERVER/{id} \
-H "Content-Type: application/json" \
-d '{
    "password": "password-for-deletion"
}'
```

### Parameters

- **`https://LINKLIE_SERVER/{id}`**: Replace `LINKLIE_SERVER` with the actual URL of your Linklie server and `{id}` with the custom ID of the shortened URL you want to delete.
- **`password-for-deletion`**: Replace this with the password associated with the shortened URL.

### Example

Here’s an example of how the command might look:

```bash
curl -X DELETE https://demo.superlily.dev/example \
-H "Content-Type: application/json" \
-d '{
    "password": "example"
}'
```

### Response

If the request is successful, you should receive a response indicating that the URL was successfully deleted:

```txt
Short URL deleted successfully
```

If there are any errors, you may receive an error message indicating what went wrong, such as:

- **ID not found**: `Not found`
- **Incorrect Password**: `Invalid password`