# <p align="center">Mithify</p>
# <p align="center">Project Description<p>

 Mithify is a web-based platform designed to post ancient myths and review other them. It provides a user-friendly and engaging with animations interface for all categories of myths to browse, while also allowing for users to like the Myths
 
# <p align="center">Functionalities</p>
# <p align="center">For Guests</p>

1. **Can access the home page**
   You can see the last 4 myths

3. **Can Browse through all myths**
   You can look through our collection of myths with pagination and fade in effects on the myths and page buttons
   
5. **Can see the details of a myth**
   You can see the details of every myth
   
# <p align="center">For Registered Users</p>
1. **Guest Functionalities**
   Registered have access to all the functionalities listed above.

2. **Create, Edit, Delete**
   Users have access to adding into the collection, editing and deleting them

3. **Like/Dislike**
   Users can like/dilike other people's myths Dislike removes the like from the myth


# <p align="center">Login</p>
![login-page](https://github.com/Tiwua/Mythify/assets/106426081/38fca385-3cc0-4f08-9e97-1edc6551d295)
 Validations for email(if its an email) and empty fields

# <p align="center">Register</p>
   Validations for username email (if its an email) and are matching passwords and empty fields
   ![register-page](https://github.com/Tiwua/Mythify/assets/106426081/46c5c964-06e0-42a5-b2b5-7d6242da28c1)

# <p align="center">Home</p>
  ![home-page](https://github.com/Tiwua/Mythify/assets/106426081/932f1779-2247-45e8-a883-8af9fa872bd4)

 # <p align="center">All</p>
   ![all-page](https://github.com/Tiwua/Mythify/assets/106426081/74c87925-08c7-416e-90e4-31e92abb5f92)
   
 # <p align="center">All (hover on myth)</p>
 ![all-hover-page](https://github.com/Tiwua/Mythify/assets/106426081/219b7505-3457-4dd5-89b8-7a810b7ed847)
 
# <p align="center">Add Myth</p>
  ![create-page](https://github.com/Tiwua/Mythify/assets/106426081/5004b1e2-a3f9-4482-84c2-84167c45df2e)
  Validations for Title, Origin, Timeline, Description, Image URL (Check if its url)

# <p align="center">Edit Myth</p>
  ![edit-page](https://github.com/Tiwua/Mythify/assets/106426081/188e5d4a-200f-443b-ad5b-4757b223ee71)
  Same Validations for Create
  
# <p align="center">Myth Details(Guest, User, Owner)</p>

# <p align="center">Myth Details Guest</p>
  ![details-guest](https://github.com/Tiwua/Mythify/assets/106426081/1c93485c-c3ae-40f1-9488-dc5c3249bd3d)

# <p align="center">Myth Details User</p>
  ![details-user](https://github.com/Tiwua/Mythify/assets/106426081/0e04717b-7f69-4cd6-a7bb-24e70005d1d6)

# <p align="center">Myth Details Owner</p>
  ![details-owner](https://github.com/Tiwua/Mythify/assets/106426081/7d8de18a-aafa-4dd7-8da2-493603d8e970)

# <p align="center">404</p>
  ![404-page](https://github.com/Tiwua/Mythify/assets/106426081/6f326edc-3a7d-43f6-a408-d87eed7f811a)

Frontend operates on http://localhost:4200/ and incorporates : | Backend runs on http://localhost:5000/ and employs:
---------------------------------------------------------------|----------------------------------------------------
Angular, TypeScript | Express, Mongoose
Angular Material (HTML, CSS) | BCrypt, Cookie-parser, JSON Web Token
(For more details, please refer to ```/client/package.json```) | (For more details, please refer to ```/server/package.json```)

## Installation Guide
- Navigate on the terminal to Mythify\Server and write npm install for the dependencies, then npm start to get the server started
- Navigate on the terminal to Mythify\Client and write ng serve to get the client project started
### Prerequisites
- Angular CLI
- Node.js
- MongoDB

Endpoint | HTTP Method | Description | Accessible to Guests | Accessible when Logged in | Requires Ownership
---------|:-----------:|-------------|:---------------------------:|:--------------------------------:|:----------------------------:
/user/register | POST | Creates a new user item | :heavy_check_mark: | :x: | **-**
/user/login | POST | Logs in as an existing user | :heavy_check_mark: | :x: | **-**
/user/auth | POST | Checks if cookie is stored |  :x: | :heavy_check_mark: | **-**
/user/logout | POST | Logs out an existing user | :x: | :heavy_check_mark: | **-**
/myths/all | GET | Retrieves all myths | :heavy_check_mark: | :heavy_check_mark: | **-**
/myths/create | POST | Creates a new myth | :x: | :heavy_check_mark: | **-**
/myths/:mythId/details | GET | Retrieves details of a myth | :heavy_check_mark: | :heavy_check_mark: | **-**
/myths/:mythId/edit | PUT | Updates/Edits details of a myth | :x: | :heavy_check_mark: | :heavy_check_mark:
/myths/:mythId/delete | DELETE | Deletes a myth | :x: | :heavy_check_mark: | :heavy_check_mark:
/myths/:mythId/like | POST | User likes a myth | :x: | :heavy_check_mark: | :x:
/myths/:mythId/dislike | POST | User removes their like from a myth | :x: | :heavy_check_mark: | :x:
/myths/:mythId/likes-count | GET | Gets likes count of a myth | :x: | :heavy_check_mark: | **-**
/myths/latest | GET | Retrieves the latest 4 myths | :heavy_check_mark: | :heavy_check_mark: | **-**
