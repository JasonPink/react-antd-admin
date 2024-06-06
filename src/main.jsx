import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './router/index.jsx';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
