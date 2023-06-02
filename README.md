# fullCart

## Description

A app designed to allow users to keep track of their grocery lists, trips, and expenses. A user can create a list of items, and track what they're spending while they're shopping.

## Project Structure

- The API folder contains the dotnet app, controllers, extensions, middleware, etc. Application, Domain, and Persistance are class libaries that contain the business logic, domain entities, database context, and EF Core migrations respecitively.
- The client folder contains the Typescript React Client.

## Setup

```
	git clone https://github.com/michael-duren/full-cart.git
	cd full-cart/client
	npm install
```

### Running Server

```
	cd API
	dotnet run
```

### Running client

```
	cd client
	npm run dev
```
