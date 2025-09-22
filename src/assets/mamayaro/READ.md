# Laboratorio 2 - Software Architecture

- **Nombre:** María Camila Amaya Rodríguez  


## 1 · Component-and-Connector View.
![alt text](image.png)

## 2 · Description of the identified components and connectors.

### Components
1. **Component-1 (MongoDB Database):**  
   A NoSQL database used to store JSON-like documents.  
   - Acts as the persistence layer for Component-2.  
   - Exposes a database service running on port **27017**.  
   - Stores collections such as `items`, which can be queried and mutated via GraphQL.  

2. **Component-2 (FastAPI + GraphQL Service):**  
   A backend service built with FastAPI and Strawberry GraphQL.  
   - Provides a **GraphQL API** available at `/graphql`.  
   - Defines queries and mutations to create and retrieve `items`.  
   - On startup, initializes a connection with **Component-1 (MongoDB)** using `motor`.  
   - Exposes the application logic for GraphQL operations.  

3. **Component-3 (MySQL Database):**  
   A relational database used to store structured application data.  
   - Manages a schema containing the `items` table.  
   - Exposes a SQL interface to be consumed by external services.  
   - Runs on port **3306** and requires authentication (user, password, database).  

4. **Component-4 (Flask API Service):**  
   A RESTful API built with Flask.  
   - Provides two endpoints:  
     - **GET /items** → retrieves all items from the MySQL database.  
     - **POST /items** → creates a new item in the database.  
   - Connects to **Component-3 (MySQL Database)** using `mysql.connector`.  
   - Acts as the application logic layer, handling HTTP requests and persisting data.  

### Connectors
- **Database Connector (Component-2 → Component-1):**  
  A TCP connection used by the FastAPI + GraphQL service to query and update data in MongoDB.  

- **Database Connector (Component-4 → Component-3):**  
  A TCP connection used by the Flask API service to query and update the MySQL database.  

- **HTTP Connector (External Client → Component-4):**  
  RESTful communication between external clients (e.g., curl, Postman, browser) and the Flask API service.  

- **GraphQL Connector (External Client → Component-2):**  
  Communication between clients and the FastAPI service through the GraphQL endpoint (`/graphql`).  
