# WhatsApp Clone (MERN + Socket.io)

Lightweight WhatsApp-like chat app using a Node/Express + MongoDB backend and a React + Vite frontend. Features Socket.IO real-time messaging, Cloudinary image uploads, Tailwind + DaisyUI styling, and Zustand for state.

**Prerequisites**

- **Node.js**: v18+ recommended
- **npm**: v8+ (comes with Node)
- **MongoDB**: Atlas or local MongoDB server
- **Cloudinary account**: for image/profile uploads

**Repository layout**

- **backend**: server code, routes, models, seeds
- **frontend**: React app (Vite + Tailwind)

**Backend - required environment variables**
Create a `.env` file in the `backend` folder with the following variables:

```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=some_long_random_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

Notes:

- Use MongoDB Atlas for an easy cloud-hosted DB; whitelist your IP and copy the connection string into `MONGODB_URI`.
- Keep `JWT_SECRET` secure (do not commit `.env`).

**Backend - install & run**

1. Open a terminal and go to the backend folder:

```
cd backend
```

2. Install dependencies:

```
npm install
```

3. (Optional) Seed the database with sample users:

```
node src/seeds/user.seed.js
```

4. Start the development server:

```
npm run dev
```

The backend listens on the port set by `PORT` (default `5001`). The API base path is `/api` (examples: `/api/auth`, `/api/messages`).

**Frontend - configuration & run**

1. Open a terminal and go to the frontend folder:

```
cd frontend
```

2. Install dependencies:

```
npm install
```

3. If your backend is running on a different host/port, update the API base URL in `frontend/src/lib/axios.js` (default points to `http://localhost:5001/api`).
4. Start the frontend dev server:

```
npm run dev
```

Vite dev server runs on `http://localhost:5173` by default. The app expects the backend at `http://localhost:5001` (match `PORT` in backend `.env`).

**Cloudinary**

- Create a Cloudinary account and get the cloud name, API key and API secret.
- Set those values in the backend `.env` (`CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`).
- The backend uses Cloudinary to upload profile images in `src/controllers/auth.controller.js`.

**Database seeding**

- The seed script `backend/src/seeds/user.seed.js` creates sample users. Run it once after you configure `MONGODB_URI`.

**Sockets & CORS**

- Socket.IO is configured in `backend/src/lib/socket.js` and allows origin `http://localhost:5173` by default. Update the CORS origin if you run the frontend on another host/port.

**Common troubleshooting**

- "MongoDB connection error": check `MONGODB_URI`, network/whitelist and that MongoDB is reachable.
- "JWT secret missing": ensure `JWT_SECRET` is set in `.env`.
- CORS/socket errors: confirm frontend origin matches backend socket CORS settings.

**Next steps (optional)**

- Add a `.env.example` in `backend` with the keys shown above (do not include secrets).
- Add npm scripts to run the seed script from `package.json` (e.g., `seed: "node src/seeds/user.seed.js"`).

If you want, I can add a `.env.example` and a `seed` script to `backend/package.json` now.
