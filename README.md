# 🎬 Movie Search App

A sleek, responsive movie search application built with **React**, **TypeScript**, and **Vite**. Users can search for movies using the [OMDb API](https://www.omdbapi.com/), view results, and add their favorites to a selected list.

---

## 🚀 Features

- 🔍 **Search Movies** by title in real-time
- 📂 **Select/Unselect** movies to/from a favorite list
- 🎞️ **Poster display** with fallback for missing posters
- 🧼 Clean and modular components
- ✨ Smooth animations for selecting/removing items
- 🌐 Powered by [OMDb API](https://www.omdbapi.com/)

---

## 🛠️ Tech Stack

- **React + TypeScript**
- **Vite**
- **Tailwind CSS** for UI styling
- **Axios** for HTTP requests

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdu1478/movie-search-app.git
   cd movie-search-app
   ```

2. **Install dependencies**
   ```bash 
   npm install
   ```

3. **Add API key**

   Create a `.env` file in the root directory:

   ```bash
   VITE_API_KEY=your_omdb_api_key
   ```

   Replace `your_omdb_api_key` with a valid key from [OMDb API](https://www.omdbapi.com/apikey.aspx).

4. **Start the app**
   ```bash
   npm run dev
   ```

---

## 🏗️ Build

```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── assets/            # Static files and images
├── components/        # UI components (e.g., SelectedMovies)
├── hooks/             # Custom hooks (e.g., useMovieSearch)
├── App.tsx            # Main app entry
├── main.tsx           # React root
└── App.css          # Global styles (Tailwind)
```

---

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [OMDb API](https://www.omdbapi.com/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
