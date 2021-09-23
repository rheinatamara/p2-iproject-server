**p2-cms-integration-server**
CMS Integration Server

---

This app has :

- RESTful endpoint for asset's CRUD operation
- JSON formatted response

&nbsp;

## RESTful endpoints

### POST /register

- **URL Params**

  `not needed`

- **Request Body**
  `fullName = string`
  `username = string`
  `location = string`
  `password = string`

- **Request Header**

  ```not needed

  ```

- **Success Response:201 (Created)**

  ```
  {
    "fullName": "Rheina ",
    "username": "rheinat",
    "location": "Indonesia"
  }
  ```

- **Error Response:400 (Bad Request)**

  ```
  {
    "message": "Username is already exists"
  }

  ```

- **Error Response:500 (Internal server error)**

  ```
  {
    message: "Interval server error"
  }
  ```

  &nbsp;

### POST /login

- **URL Params**

  `not needed`

- **Request Body**
  `username = string`
  `password = string`

- **Request Header**

  ```not needed

  ```

- **Success Response:200 (OK)**

  ```
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsInVzZXJuYW1lIjoicmhlaW5hdCIsImlhdCI6MTYzMjQyNDgyMX0.89DMDq7cNbuWKkhX-jQVb6T_lAINPq4IntCWwFTtXI4",
    "fullName": "Rheina ",
    "username": "rheinat",
    "location": "Indonesia"
  }
  ```

- **Error Response:404 (NOT FOUND)**

  ```
  {
    "message": "Invalid Email / Password"
  }

  ```

- **Error Response:500 (Internal server error)**

  ```
  {
    message: "Interval server error"
  }
  ```

  &nbsp;

### GET /myProfile

- **URL Params**

  `not needed`

- **Request Body**
  `not needed`

- **Request Header**

  ```
  {
    "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoicmhlaW5hNTQzIiwiZW1haWwiOiJyaGVpbmE1NDMiLCJyb2xlIjoic3RhZmYiLCJwaG9uZU51bWJlciI6IjA4MTIxMjEiLCJhZGRyZXNzIjoiYWRkcmVzcyIsImlhdCI6MTYzMDQxNzQwM30.DXYp4PAeP6mvwD-cpDQ-3o26AxV8Mu0gsD0q3PGjqYE"
  }
  ```

- **Success Response:200 (OK)**

  ```
  {
    "id": 9,
    "default_profile_image": true,
    "description": null,
    "profile_image_url": null,
    "profile_use_background_image": false,
    "followers_count": 0,
    "following": 0,
    "profile_background_image_url": null,
    "UserId": 12,
    "createdAt": "2021-09-23T19:19:12.250Z",
    "updatedAt": "2021-09-23T19:19:12.250Z",
    "User": {
        "id": 12,
        "fullName": "Rheina ",
        "username": "rheinat",
        "location": "Indonesia",
        "password": "$2a$10$mWrTqBvz6jESoKRhanp0kexAAYzNBx1GHGljTWGwuk518/IOdBpSm",
        "createdAt": "2021-09-23T19:19:11.775Z",
        "updatedAt": "2021-09-23T19:19:11.775Z"
    },
    "Posts": []
  }
  ```

  - **Error Response:400 (BAD REQUEST)**

  ```{
    "message": "invalid jwt token"
    }
  ```

- **Error Response:500 (Internal server error)**

  ```
  {
    message: "Interval server error"
  }
  ```

&nbsp;

### PUT /myProfile

- **URL Params**

  `not needed`

- **Request Body**
  `description = string`
  `profile_image_url = string`
  `profile_background_image_url = string`

- **Request Header**
  ```
  {
    "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoicmhlaW5hNTQzIiwiZW1haWwiOiJyaGVpbmE1NDMiLCJyb2xlIjoic3RhZmYiLCJwaG9uZU51bWJlciI6IjA4MTIxMjEiLCJhZGRyZXNzIjoiYWRkcmVzcyIsImlhdCI6MTYzMDQxNzQwM30.DXYp4PAeP6mvwD-cpDQ-3o26AxV8Mu0gsD0q3PGjqYE"
  }
  ```
- **Success Response:200 (OK)**

  ```
  {
    "id": 9,
    "default_profile_image": false,
    "description": "",
    "profile_image_url": "https://ik.imagekit.io/xaxh7klpgvo/123_K5BxgPOhcw.png",
    "profile_use_background_image": true,
    "followers_count": 0,
    "following": 0,
    "profile_background_image_url": "https://ik.imagekit.io/xaxh7klpgvo/123_tr-OnIwHo.png",
    "UserId": 12,
    "createdAt": "2021-09-23T19:19:12.250Z",
    "updatedAt": "2021-09-23T19:24:38.685Z"
    }
  ```

- **Error Response:400 (Bad Request)**

  ```
  {
    "message": [
        "Title is required",
        "Content is required"
    ]
  }

  ```

- **Error Response:400 (BAD REQUEST)**

```{
  "message": "invalid jwt token"
  }
```

- **Error Response:500 (Internal server error)**

  ```
  {
    message: "Interval server error"
  }
  ```

&nbsp;

### GET /profiles

- **URL Params**

  `not needed`

- **Request Body**
  `not needed`

  - **Request Header**

  ```
  {
    "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoicmhlaW5hNTQzIiwiZW1haWwiOiJyaGVpbmE1NDMiLCJyb2xlIjoic3RhZmYiLCJwaG9uZU51bWJlciI6IjA4MTIxMjEiLCJhZGRyZXNzIjoiYWRkcmVzcyIsImlhdCI6MTYzMDQxNzQwM30.DXYp4PAeP6mvwD-cpDQ-3o26AxV8Mu0gsD0q3PGjqYE"
  }
  ```

- **Success Response:200 (OK)**

  ```
  [
    {
        "id": 1,
        "default_profile_image": false,
        "description": "",
        "profile_image_url": "https://ik.imagekit.io/xaxh7klpgvo/squre_mxilyMxj_Q.png",
        "profile_use_background_image": true,
        "followers_count": 0,
        "following": 0,
        "profile_background_image_url": "https://ik.imagekit.io/xaxh7klpgvo/123_-D9qoMbr-.png",
        "UserId": 1,
        "createdAt": "2021-09-22T05:55:29.180Z",
        "updatedAt": "2021-09-23T05:02:37.713Z",
        "User": {
            "id": 1,
            "fullName": "John Doe",
            "username": "johndoe",
            "location": "United States",
            "password": "$2a$10$5EPPS/V4UqmhHIoLRu6uR.uHGeHXQB7wZ1hvcJtHDKTbLUdu/gq9i",
            "createdAt": "2021-09-22T05:55:28.948Z",
            "updatedAt": "2021-09-22T05:55:28.948Z"
        },
        "Posts": [
            {
                "id": 27,
                "text": "1212",
                "image_url": "https://ik.imagekit.io/xaxh7klpgvo/squre_nV_ZNujLUi.png",
                "favourites_count": 0,
                "ProfileId": 1,
                "createdAt": "2021-09-23T07:32:02.987Z",
                "updatedAt": "2021-09-23T07:32:02.987Z"
            },
            {
                "id": 28,
                "text": "1212",
                "image_url": "https://ik.imagekit.io/xaxh7klpgvo/squre_mMAE8NAkW7.png",
                "favourites_count": 0,
                "ProfileId": 1,
                "createdAt": "2021-09-23T07:33:33.950Z",
                "updatedAt": "2021-09-23T07:33:33.950Z"
            },
            {
                "id": 29,
                "text": "1212",
                "image_url": "https://ik.imagekit.io/xaxh7klpgvo/squre_iu0QUQH3fG.png",
                "favourites_count": 0,
                "ProfileId": 1,
                "createdAt": "2021-09-23T07:36:22.658Z",
                "updatedAt": "2021-09-23T07:36:22.658Z"
            },
            {
                "id": 30,
                "text": "1212",
                "image_url": "https://ik.imagekit.io/xaxh7klpgvo/squre_TierEWKNR88.png",
                "favourites_count": 0,
                "ProfileId": 1,
                "createdAt": "2021-09-23T07:36:38.574Z",
                "updatedAt": "2021-09-23T07:36:38.574Z"
            }
        ]
    },
    ...
  ]

  ```

- **Error Response:400 (BAD REQUEST)**

```{
  "message": "invalid jwt token"
  }
```

- **Error Response:500 (Internal server error)**

  ```
  {
    message: "Interval server error"
  }
  ```

&nbsp;

### POST /posts

- **URL Params**

  `not needed`

- **Request Body**
  `image_url = string`
  `text = string`

- **Request Header**
  ```
  {
    "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoicmhlaW5hNTQzIiwiZW1haWwiOiJyaGVpbmE1NDMiLCJyb2xlIjoic3RhZmYiLCJwaG9uZU51bWJlciI6IjA4MTIxMjEiLCJhZGRyZXNzIjoiYWRkcmVzcyIsImlhdCI6MTYzMDQxNzQwM30.DXYp4PAeP6mvwD-cpDQ-3o26AxV8Mu0gsD0q3PGjqYE"
  }
  ```
- **Success Response:200 (OK)**

  ```
  [
    {
        "id": 31,
        "text": "Square",
        "image_url": "https://ik.imagekit.io/xaxh7klpgvo/123_C9IQ5E6ffT.png",
        "favourites_count": 0,
        "ProfileId": 2,
        "createdAt": "2021-09-23T11:46:01.868Z",
        "updatedAt": "2021-09-23T11:46:01.868Z"
    }
  ]
  ```

- **Error Response:400 (BAD REQUEST)**

```{
  "message": "invalid jwt token"
  }
```

- **Error Response:500 (Internal server error)**

  ```
  {
    message: "Interval server error"
  }
  ```

&nbsp;

### DELETE /posts/:id

- **URL Params**

  `id = integer`

- **Request Body**
  `not needed`

- **Request Header**

```
{
  "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoicmhlaW5hNTQzIiwiZW1haWwiOiJyaGVpbmE1NDMiLCJyb2xlIjoic3RhZmYiLCJwaG9uZU51bWJlciI6IjA4MTIxMjEiLCJhZGRyZXNzIjoiYWRkcmVzcyIsImlhdCI6MTYzMDQxNzQwM30.DXYp4PAeP6mvwD-cpDQ-3o26AxV8Mu0gsD0q3PGjqYE"
 }
```

- **Success Response:200 (OK)**

  ```
  {
    "message": "your post has been deleted"
  }
  ```

- **Error Response:404 (Not Found)**

  ```{
    "message": "Post not found"
  }
  ```

- **Error Response:403 (FORBIDDEN)**

  ```{
    "message": "you dont have access"
  }
  ```

- **Error Response:500 (Internal server error)**

  ```
  {
    message: "Interval server error"
  }
  ```

&nbsp;

### GET /posts

- **URL Params**

  `not needed`

- **Request Body**
  `not needed`

- **Request Header**

```
{
  "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoicmhlaW5hNTQzIiwiZW1haWwiOiJyaGVpbmE1NDMiLCJyb2xlIjoic3RhZmYiLCJwaG9uZU51bWJlciI6IjA4MTIxMjEiLCJhZGRyZXNzIjoiYWRkcmVzcyIsImlhdCI6MTYzMDQxNzQwM30.DXYp4PAeP6mvwD-cpDQ-3o26AxV8Mu0gsD0q3PGjqYE"
 }
```

- **Success Response:200 (OK)**

  ```[
    {
        "id": 27,
        "text": "1212",
        "image_url": "https://ik.imagekit.io/xaxh7klpgvo/squre_nV_ZNujLUi.png",
        "favourites_count": 0,
        "ProfileId": 1,
        "createdAt": "2021-09-23T07:32:02.987Z",
        "updatedAt": "2021-09-23T07:32:02.987Z",
        "Profile": {
            "id": 1,
            "default_profile_image": false,
            "description": "",
            "profile_image_url": "https://ik.imagekit.io/xaxh7klpgvo/squre_mxilyMxj_Q.png",
            "profile_use_background_image": true,
            "followers_count": 0,
            "following": 0,
            "profile_background_image_url": "https://ik.imagekit.io/xaxh7klpgvo/123_-D9qoMbr-.png",
            "UserId": 1,
            "createdAt": "2021-09-22T05:55:29.180Z",
            "updatedAt": "2021-09-23T05:02:37.713Z",
            "User": {
                "id": 1,
                "fullName": "John Doe",
                "username": "johndoe",
                "location": "United States",
                "password": "$2a$10$5EPPS/V4UqmhHIoLRu6uR.uHGeHXQB7wZ1hvcJtHDKTbLUdu/gq9i",
                "createdAt": "2021-09-22T05:55:28.948Z",
                "updatedAt": "2021-09-22T05:55:28.948Z"
            }
        }
    },
    {
        "id": 28,
        "text": "1212",
        "image_url": "https://ik.imagekit.io/xaxh7klpgvo/squre_mMAE8NAkW7.png",
        "favourites_count": 0,
        "ProfileId": 1,
        "createdAt": "2021-09-23T07:33:33.950Z",
        "updatedAt": "2021-09-23T07:33:33.950Z",
        "Profile": {
            "id": 1,
            "default_profile_image": false,
            "description": "",
            "profile_image_url": "https://ik.imagekit.io/xaxh7klpgvo/squre_mxilyMxj_Q.png",
            "profile_use_background_image": true,
            "followers_count": 0,
            "following": 0,
            "profile_background_image_url": "https://ik.imagekit.io/xaxh7klpgvo/123_-D9qoMbr-.png",
            "UserId": 1,
            "createdAt": "2021-09-22T05:55:29.180Z",
            "updatedAt": "2021-09-23T05:02:37.713Z",
            "User": {
                "id": 1,
                "fullName": "John Doe",
                "username": "johndoe",
                "location": "United States",
                "password": "$2a$10$5EPPS/V4UqmhHIoLRu6uR.uHGeHXQB7wZ1hvcJtHDKTbLUdu/gq9i",
                "createdAt": "2021-09-22T05:55:28.948Z",
                "updatedAt": "2021-09-22T05:55:28.948Z"
            }
        }
    }
  ]
  ```

- **Error Response:500 (Internal server error)**

  ```
  {
    message: "Interval server error"
  }
  ```

  &nbsp;

### GET /posts/:id

- **URL Params**

  `id = integer`

- **Request Body**
  `not needed`

- **Request Header**

```
{
  "access_token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoicmhlaW5hNTQzIiwiZW1haWwiOiJyaGVpbmE1NDMiLCJyb2xlIjoic3RhZmYiLCJwaG9uZU51bWJlciI6IjA4MTIxMjEiLCJhZGRyZXNzIjoiYWRkcmVzcyIsImlhdCI6MTYzMDQxNzQwM30.DXYp4PAeP6mvwD-cpDQ-3o26AxV8Mu0gsD0q3PGjqYE"
 }
```

- **Success Response:200 (OK)**

  ```{
    "id": 27,
    "text": "1212",
    "image_url": "https://ik.imagekit.io/xaxh7klpgvo/squre_nV_ZNujLUi.png",
    "favourites_count": 0,
    "ProfileId": 1,
    "createdAt": "2021-09-23T07:32:02.987Z",
    "updatedAt": "2021-09-23T07:32:02.987Z",
    "Profile": {
        "id": 1,
        "default_profile_image": false,
        "description": "",
        "profile_image_url": "https://ik.imagekit.io/xaxh7klpgvo/squre_mxilyMxj_Q.png",
        "profile_use_background_image": true,
        "followers_count": 0,
        "following": 0,
        "profile_background_image_url": "https://ik.imagekit.io/xaxh7klpgvo/123_-D9qoMbr-.png",
        "UserId": 1,
        "createdAt": "2021-09-22T05:55:29.180Z",
        "updatedAt": "2021-09-23T05:02:37.713Z",
        "User": {
            "id": 1,
            "fullName": "John Doe",
            "username": "johndoe",
            "location": "United States",
            "password": "$2a$10$5EPPS/V4UqmhHIoLRu6uR.uHGeHXQB7wZ1hvcJtHDKTbLUdu/gq9i",
            "createdAt": "2021-09-22T05:55:28.948Z",
            "updatedAt": "2021-09-22T05:55:28.948Z"
        }
    }
  }
  ```

  - **Error Response:404 (NOT FOUND)**

  ```
  {
    "message": "Post not found"
  }
  ```

- **Error Response:500 (Internal server error)**

  ```
  {
    message: "Interval server error"
  }
  ```

  &nbsp;
