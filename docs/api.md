# API Documentation

The `wrixle-portfolio-manager` project exposes a set of API endpoints to handle various functionalities related to portfolio management, asset exploration, and user authentication. This document provides detailed documentation for each API route.

## Base URL

The base URL for all API endpoints is: `https://api.example.com`

## Authentication

### Register User

- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Description**: Register a new user account.
- **Request Body**:
  - `username` (string): The username of the new user.
  - `password` (string): The password of the new user.

### Login User

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Description**: Authenticate a user and generate an access token.
- **Request Body**:
  - `username` (string): The username of the user.
  - `password` (string): The password of the user.
- **Response**:
  - `accessToken` (string): JWT access token for authenticated user.

### Logout User

- **URL**: `/api/auth/logout`
- **Method**: `POST`
- **Description**: Log out the authenticated user.
- **Request Header**:
  - `Authorization`: JWT access token.
- **Response**:
  - `message` (string): A message confirming successful logout.

## Portfolio Management

### Get User Portfolio

- **URL**: `/api/portfolio`
- **Method**: `GET`
- **Description**: Get the portfolio details of the authenticated user.
- **Request Header**:
  - `Authorization`: JWT access token.
- **Response**:
  - `portfolio` (object): The user's portfolio information, including assets and their quantities.

### Add Asset to Portfolio

- **URL**: `/api/portfolio/add`
- **Method**: `POST`
- **Description**: Add a new asset to the authenticated user's portfolio.
- **Request Header**:
  - `Authorization`: JWT access token.
- **Request Body**:
  - `assetName` (string): The name of the asset to be added.
  - `quantity` (number): The quantity of the asset to be added.

### Remove Asset from Portfolio

- **URL**: `/api/portfolio/remove`
- **Method**: `POST`
- **Description**: Remove an asset from the authenticated user's portfolio.
- **Request Header**:
  - `Authorization`: JWT access token.
- **Request Body**:
  - `assetId` (string): The ID of the asset to be removed.

## Asset Exploration

### Get All Assets

- **URL**: `/api/assets`
- **Method**: `GET`
- **Description**: Get a list of all available assets.
- **Response**:
  - `assets` (array): An array of assets with their details.

### Get Asset Details

- **URL**: `/api/assets/:assetId`
- **Method**: `GET`
- **Description**: Get detailed information about a specific asset.
- **URL Parameters**:
  - `assetId` (string): The ID of the asset to retrieve details for.
- **Response**:
  - `asset` (object): The detailed information of the asset.

## Error Handling

The API returns appropriate error responses with status codes and error messages for invalid requests or server errors.

- **Status Code 400**: Bad Request - Invalid request parameters or missing data.
- **Status Code 401**: Unauthorized - Access to the resource requires authentication.
- **Status Code 404**: Not Found - The requested resource does not exist.
- **Status Code 500**: Internal Server Error - An unexpected error occurred on the server.

## Conclusion

This API documentation provides detailed information on the available endpoints and their functionalities in the `wrixle-portfolio-manager` project. Developers can use this documentation to understand how to interact with the API and build applications that utilize its features.
