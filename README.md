
# 📦 Inventory Management System

This is a full-stack Inventory Management System built using:

- **Frontend:** Angular 16
- **Backend:** .NET 7 Web API
- **Database:** SQL Server

---

## 📁 Project Structure

```
/InventoryFrontend     → Angular 16 application  
/InventoryBackend      → .NET 7 Web API  
```

---

## ⚙️ Prerequisites

- [.NET 7 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)
- [Node.js (v16 or above)](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
- SQL Server (LocalDB or full version)
- Git

---

## 🖥️ Backend Setup (.NET 7)

1. Navigate to the backend folder:

```bash
cd InventoryBackend
```

2. Restore NuGet packages:

```bash
dotnet restore
```

3. Update the connection string in `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=InventoryDB;Trusted_Connection=True;"
}
```

4. Start the API:

```bash
dotnet run
```

Backend will run at: `https://localhost:7084` or `http://localhost:5047`

---

## 🌐 Frontend Setup (Angular 16)

1. Navigate to the frontend folder:

```bash
cd InventoryFrontend
```

2. Install dependencies:

```bash
npm install
```

3. Update `environment.ts` with the backend API URL:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://localhost:5047/api'
};
```

4. Run the Angular app:

```bash
ng serve
```

App will run at: `http://localhost:4200`

---

## 🧪 Testing the Application

- Open Angular UI → Add/Edit/Delete products
- Record sales → Inventory should decrease
- Record purchases → Inventory should increase

---

## ✅ Submission

Ensure:
- Both backend and frontend are running without errors
- API & Angular are connected successfully
- The GitHub repo includes this README

---
