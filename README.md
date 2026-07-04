# 🚀 Lexus ERP - Frontend

A modern **Enterprise Resource Planning (ERP)** frontend built with **Next.js** that provides a fast, responsive, and intuitive interface for managing business operations.

---

## 🌟 Key Highlights

- 🔐 JWT Authentication
- 🏢 Multi-Company Management
- 👥 Customer Management
- 🚚 Supplier Management
- 📊 Dashboard
- ⚡ Responsive UI
- 🔒 Company-wise Data Isolation
- 🧩 Reusable Components
- 🚀 Production-ready Architecture

---

## 🎯 Project Objective

Lexus ERP is designed to help businesses manage master data efficiently. This MVP focuses on Companies, Customers, and Suppliers while providing a scalable architecture for future Inventory, Sales, Purchase, and Accounting modules.

---

## 📌 Repositories

**Frontend**

https://github.com/samyak-19/Lexus_frontend

**Backend**

https://github.com/samyak-19/Lexus_backend

---

## 🌐 Live Demo

Frontend:
https://your-vercel-url.vercel.app

Backend API:
https://your-render-url.onrender.com

---

## ✨ Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

### Company
- Create Company
- Edit Company
- Delete Company
- Company Selection

### Customer
- Create Customer
- Edit Customer
- Delete Customer
- Opening Balance

### Supplier
- Create Supplier
- Edit Supplier
- Delete Supplier
- Opening Balance

### Dashboard
- Customer Statistics
- Supplier Statistics
- Clean Dashboard UI

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js |
| Library | React |
| Styling | Tailwind CSS |
| HTTP | Axios |
| Notifications | React Hot Toast |
| Modal | React Modal |

---

## 🏗 Architecture

```text
User
 │
 ▼
Next.js Frontend
 │
 ▼
Axios
 │
 ▼
Express REST API
 │
 ▼
Prisma ORM
 │
 ▼
PostgreSQL (Supabase)
```

---

## 📂 Folder Structure

```text
src
├── app
├── components
├── services
├── hooks
└── styles
```

---

## ⚙ Installation

```bash
git clone https://github.com/samyak-19/Lexus_frontend.git
cd Lexus_frontend
npm install
```

---

## 🔑 Environment Variables

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## ▶ Run Locally

```bash
npm run dev
```

Visit:

http://localhost:3000

---

## 🚀 Deployment

Deploy on **Vercel**

Environment Variable:

```env
NEXT_PUBLIC_API_URL=https://your-render-url.onrender.com/api
```

Build Command

```bash
npm run build
```

---

## 📸 Screenshots

Add screenshots here:

- Login
- Signup
- Dashboard
- Company
- Customer
- Supplier

---

## 🚧 Future Scope

- Inventory Management
- Purchase Module
- Sales Module
- Reports
- Analytics
- Role-Based Access Control
- Dark Mode

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push your branch
5. Open a Pull Request

---

## 📄 License

Licensed under the MIT License.

---

## 👨‍💻 Author

**Samyak Bahade**

GitHub:
https://github.com/samyak-19

LinkedIn:
(Add your LinkedIn profile)

---

⭐ If you found this project useful, consider giving it a star on GitHub.
